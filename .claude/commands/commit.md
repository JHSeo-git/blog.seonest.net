---
description: Create well-formatted commits with conventional commit messages.
argument-hint: [optional context...]
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git commit:*)
---

# Task: Create well-formatted commits with conventional commit messages.

Based on the following code changes, please generate a concise and descriptive commit message that follows the Conventional Commits specification.

Provide only the commit message itself, without any introduction or explanation.

## Usage:

- `/commit` - Create a commit with conventional commit message

## Commit Type

- build: Changes that affect the build system or external dependencies
- chore: Other changes that don't modify production code (e.g., configs, tools)
- ci: Changes to CI configuration files and scripts
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (whitespace, formatting)
- test: Adding or modifying tests

## Commit Rules

Read `commitlint.config.cjs` in the project root to understand the commit message rules and constraints before generating a commit message.

## Process:

1. Check for staged changes
2. Analyze changes to determine commit type
3. Generate descriptive commit message
4. Include scope if applicable: `type(scope): description`
5. Add body for complex changes explaining why
6. Execute commit

## Best Practices:

- Keep commits atomic and focused
- Write in imperative mood ("add feature" not "added feature")
- Explain why, not just what
- Split unrelated changes into separate commits

## Optional User Context:

$ARGUMENTS
