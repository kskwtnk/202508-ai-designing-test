---
description: Create GitHub issues from specification documents with complete context for AI implementation
allowed-tools: [Bash, Read, Edit, TodoWrite]
---

# Create GitHub Issue from Specifications

1. Read all specification files (requirements.md, design.md, tasks.md)
2. Identify target files and related components in codebase
3. **Enhanced with past knowledge**: Automatically reference relevant lessons and patterns
4. Create issue with complete specification content (no summarization)
5. Execute: `gh issue create --title "Feature Title" --body "$(cat <<'EOF'...EOF)"`

## Knowledge Integration

This command now automatically enhances specifications with:

- Relevant implementation patterns from `.kiro/steering/patterns.md`
- Past lessons learned from `.kiro/steering/lessons.md`
- Common challenges and solutions from `.kiro/steering/challenges.md`

Use `--enhance` flag to enable automatic knowledge integration:

```bash
/create-issue sticky-navigation --enhance
```

## Issue Format

```markdown
## Specification Details

### Requirements

[Complete requirements.md content]

### Design

[Complete design.md content]

### Implementation Tasks

[Complete tasks.md content]

## Related Files

- Target: `src/components/File.tsx`
- Related: `src/components/Related.tsx`
```
