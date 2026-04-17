# personal-web-experiments

This repository is for running personal, side-by-side comparisons of AI tooling for building a personal website.

Core idea:

- Use the same base prompt.
- Change tool and model.
- Compare outputs by personal preference (design quality, code quality, usability, maintainability, and overall fit).

## Project Goal

The goal is not to find a universally "best" model. The goal is to build your own preference profile by testing repeated website-generation experiments under consistent conditions.

Each experiment should answer:

- How good is the first generated result?
- How much cleanup is required?
- How well does the tool follow constraints?
- How easy is it to iterate toward a production-ready personal site?

## Repository Structure

- `basic-prompt.md`: The baseline prompt copied into each experiment folder.
- `.agents/skills/`: Local skill library used by experiments.
- `skills-lock.json`: Lock file pinning skill sources and hashes.

## Create a New Experiment (using `new-experiment` skill)

This repository includes a user-invocable skill: `.agents/skills/new-experiment`.

What it does:

1. Collects tool and model.
2. Creates a folder at repo root using `<tool>-<model>` naming.
3. Copies `basic-prompt.md` into the new folder.
4. Copies all local skills (`.agents/skills`) into the new folder.
5. Generates a tool-appropriate `.gitignore`.
6. Validates required files/folders exist.

Suggested invocation in Copilot Chat:

```text
/new-experiment tool=<your-tool> model=<your-model>
```

If values are not provided, the skill asks for them.

### Naming Rules Used by the Skill

Experiment folder names are normalized from tool/model:

- lowercase
- spaces and `_` become `-`
- non `[a-z0-9-]` characters removed
- repeated `-` collapsed

Example:

- Tool: `Cursor`
- Model: `GPT-5.3 Codex`
- Folder: `cursor-gpt-53-codex`

### If Target Folder Already Exists

The skill asks whether to:

- reuse and overwrite copied files, or
- create a new unique suffix (for example `-v2`).

## Skill Dependencies in This Project

There are two dependency layers to understand.

### 1) Source-Pinned Skill Dependencies (`skills-lock.json`)

Most design/UI skills are sourced from `pbakaus/impeccable` and hash-pinned in `skills-lock.json`.

Included source-pinned skills:

- `adapt`
- `animate`
- `audit`
- `bolder`
- `clarify`
- `colorize`
- `critique`
- `delight`
- `distill`
- `impeccable`
- `layout`
- `optimize`
- `overdrive`
- `polish`
- `quieter`
- `shape`
- `typeset`

Why this matters:

- Reproducibility: skill behavior is tied to locked content hashes.
- Consistency: experiments can be compared with the same skill set.

### 2) Runtime/Workflow Dependencies for `new-experiment`

The `new-experiment` skill depends on these local assets at runtime:

- `basic-prompt.md` (required source file)
- `.agents/skills/` (required source folder, copied recursively)
- Workspace root write access (to create experiment folder)

It also depends on user input:

- selected tool
- selected model

Optional dependency by stack:

- `.gitignore` profile selection based on the chosen tool ecosystem (JS/TS, Python, .NET, Go, Rust, or generic fallback).

## Recommended Experiment Workflow

1. Create a folder using `new-experiment`.
2. Run the same baseline prompt in the selected tool/model.
3. Keep changes isolated inside that experiment folder.
4. Evaluate results with your own criteria.
5. Record notes (what looked better, what required less rework, what felt maintainable).

## Notes

- This repository is preference-driven and intentionally subjective.
- Keep the baseline prompt stable to make comparisons meaningful.
