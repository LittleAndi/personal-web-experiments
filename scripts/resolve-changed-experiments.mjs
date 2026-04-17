import { execFileSync } from "node:child_process";
import { appendFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function normalizePath(value) {
  return value.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
}

function boolOrDefault(value, fallback) {
  if (typeof value === "boolean") {
    return value;
  }
  return fallback;
}

function getChangedFiles(baseSha, headSha) {
  if (!baseSha || !headSha) {
    throw new Error("BASE_SHA and HEAD_SHA must be set.");
  }

  const output = execFileSync(
    "git",
    ["diff", "--name-only", baseSha, headSha],
    {
      encoding: "utf8",
    },
  );

  return output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => normalizePath(line));
}

function loadExperimentsConfig() {
  const configPath = resolve(process.cwd(), "deploy", "experiments.json");
  const raw = readFileSync(configPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.experiments)) {
    throw new Error(
      "deploy/experiments.json must contain an experiments array.",
    );
  }

  return parsed.experiments.map((item) => {
    if (!item.name || !item.path) {
      throw new Error("Each experiment must include name and path.");
    }

    return {
      name: String(item.name),
      path: normalizePath(String(item.path)),
      appLocation: item.appLocation ? String(item.appLocation) : "/",
      outputLocation: item.outputLocation ? String(item.outputLocation) : "",
      appBuildCommand: item.appBuildCommand ? String(item.appBuildCommand) : "",
      apiLocation: item.apiLocation ? String(item.apiLocation) : "",
      skipAppBuild: boolOrDefault(item.skipAppBuild, true),
    };
  });
}

function getChangedExperiments(experiments, changedFiles) {
  return experiments.filter((experiment) => {
    const prefix = `${experiment.path}/`;
    return changedFiles.some(
      (filePath) => filePath === experiment.path || filePath.startsWith(prefix),
    );
  });
}

function writeOutput(name, value) {
  const outputPath = process.env.GITHUB_OUTPUT;
  if (!outputPath) {
    console.log(`${name}=${value}`);
    return;
  }

  appendFileSync(outputPath, `${name}=${value}\n`, "utf8");
}

function main() {
  const baseSha = process.env.BASE_SHA;
  const headSha = process.env.HEAD_SHA;

  const changedFiles = getChangedFiles(baseSha, headSha);
  const experiments = loadExperimentsConfig();
  const changedExperiments = getChangedExperiments(experiments, changedFiles);

  const matrix = JSON.stringify(changedExperiments);
  const hasChanges = changedExperiments.length > 0 ? "true" : "false";

  console.log(`Changed files: ${changedFiles.length}`);
  console.log(`Changed experiments: ${changedExperiments.length}`);

  writeOutput("matrix", matrix);
  writeOutput("has_changes", hasChanges);
}

main();
