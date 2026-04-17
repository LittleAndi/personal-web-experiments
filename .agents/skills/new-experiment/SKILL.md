---
name: new-experiment
description: Create a new experiment folder by asking for tool and model, then copy the base prompt, all local skills, and a suitable .gitignore.
version: 1.1.0
user-invocable: true
argument-hint: "[tool and model, optional]"
---

Create a new experiment scaffold in this repository.

## Goal

Ask which experiment we are creating (tool and model), then create a folder for that experiment at the workspace root. Copy:

- `basic-prompt.md`
- `.agents/skills/` (all skills, recursively)
- a tool-appropriate `.gitignore`

into the new experiment folder so future work can start there.

## Mandatory Workflow

1. Collect Inputs

- If tool/model are already clear in the user's request, reuse them.
- Otherwise ask for both values before doing file operations.
- Ask one concise question that captures both values if possible.

2. Build Folder Name

- Use this format: `<tool>-<model>`.
- Normalize both parts:
  - trim whitespace
  - lowercase
  - replace spaces and underscores with `-`
  - remove characters outside `[a-z0-9-]`
  - collapse repeated `-`
  - remove leading/trailing `-`
- If either value becomes empty after normalization, ask again.

3. Resolve Target Path

- Create target at workspace root: `<workspace>/<tool>-<model>/`.
- If that folder already exists, ask whether to:
  - reuse and overwrite copied files, or
  - create a unique suffix (for example `-v2`).

4. Create and Copy

- Create the folder if missing.
- Copy root `basic-prompt.md` to `<target>/basic-prompt.md`.
- Copy `.agents/skills` recursively to `<target>/.agents/skills`.
- Preserve directory structure and include all files.

5. Add `.gitignore`

- Create `<target>/.gitignore` that matches the selected tool.
- Use practical defaults for common experiment stacks:
  - JavaScript/TypeScript (`npm`, `pnpm`, `yarn`, `vite`, `react`, `next`, `node`): ignore `node_modules`, build output, env files, logs.
  - Python (`python`, `uv`, `poetry`, `pip`, `fastapi`, `flask`, `django`): ignore `__pycache__`, virtual envs, pytest/mypy caches, local env files.
  - .NET (`dotnet`, `csharp`, `aspnet`): ignore `bin`, `obj`, user-specific IDE files.
  - Go (`go`): ignore binaries, coverage, vendor cache where applicable.
  - Rust (`rust`, `cargo`): ignore `target` and local backup files.
  - Unknown tool: use a safe generic template (`.env*`, logs, common OS/editor artifacts).
- If the tool is ambiguous, ask one follow-up question before writing `.gitignore`.

6. Validate

- Confirm these paths exist after copy:
  - `<target>/basic-prompt.md`
  - `<target>/.agents/skills`
  - `<target>/.gitignore`
- Confirm `.gitignore` is non-empty and appropriate for the selected tool.
- Report created path, copied files, and the `.gitignore` profile used.

## Safety Rules

- Do not delete any existing experiment folders.
- Do not run destructive git commands.
- If a required source path is missing, stop and report exactly what is missing.

## PowerShell Reference (Preferred)

Use PowerShell commands equivalent to:

```powershell
New-Item -ItemType Directory -Path $target -Force | Out-Null
Copy-Item -Path "$workspace\basic-prompt.md" -Destination "$target\basic-prompt.md" -Force
New-Item -ItemType Directory -Path "$target\.agents" -Force | Out-Null
Copy-Item -Path "$workspace\.agents\skills" -Destination "$target\.agents\skills" -Recurse -Force

$gitignore = @"
# Generic defaults
.DS_Store
Thumbs.db
.idea/
.vscode/
*.log
.env
.env.*
"@

Set-Content -Path "$target\.gitignore" -Value $gitignore
```

Always verify the final paths exist before finishing.
