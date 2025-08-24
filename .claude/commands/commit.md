---
description: Review uncommitted files and create commits with appropriate granularity
allowed-tools: [Bash, Read, Edit, TodoWrite]
---

# Smart Commit Execution

Analyze uncommitted files and commit logically related changes with appropriate granularity.

## Execution Steps

1. **Create Work Plan**
   - List necessary tasks using TodoWrite tool
   - Clarify each step: quality checks, code cleanup, commit preparation
2. **Quality Check (Required Before Commit)**
   - Execute quality checks defined in the project
   - Common examples:
     - Linter/Formatter (ESLint, Prettier, ktlint, rustfmt, etc.)
     - Type checking (TypeScript, Flow, etc.)
     - Test execution (Jest, pytest, JUnit, etc.)
   - Check project-specific commands like `make lint`, `npm run check`
3. **Check Uncommitted Status**
   - List changed files with `git status`
   - Check change statistics with `git diff --stat`
   - Analyze specific changes with `git diff`
4. **Group Changes**
   - Classify logically: feature additions, bug fixes, refactoring, style fixes, etc.
   - Group related files together
   - Remove unnecessary debug code and comments
5. **Commit with Appropriate Granularity**
   - Create independent commits for each group
   - Create messages in Conventional Commits format
   - Add clear descriptions
   - Follow principle: 1 commit = 1 logical change
6. **Quality Assurance**
   - Verify commit message validation passes
   - Confirm clean state with final `git status`
7. **Consider Project Memory Updates**
   - Consider adding technical issues/solutions discovered during work to CLAUDE.md
   - New error patterns, library usage methods, configuration considerations, etc.
   - Accumulate insights that improve future development efficiency

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Execution Example

```bash
# Work plan with TodoWrite
1. Execute code Lint/Format
2. Execute type checking (if applicable)
3. Remove unnecessary comments and debug code
4. Check git status and prepare commits
5. Consider project memory updates

# Quality checks
✅ All quality check tools pass

# Commit creation examples
1. feat(auth): add user authentication feature
2. fix(api): fix response header issue
3. refactor(utils): organize common utility functions
4. test: add unit tests for authentication feature
5. docs: update API documentation
6. chore: update development environment configuration files
```

## Notes

- **Always perform quality checks** before committing
- Resolve errors and warnings as much as possible before committing
- Properly escape paths containing special characters
- Check package.json to identify project-specific tools and commands

**Starting execution...**
