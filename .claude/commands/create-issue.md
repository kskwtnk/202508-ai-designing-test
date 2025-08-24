---
description: Create GitHub issues from specification documents with complete context for AI implementation
allowed-tools: [Bash, Read, Edit, TodoWrite]
---

# Create GitHub Issue from Specifications

1. Read all specification files (requirements.md, design.md, tasks.md)
2. Identify target files and related components in codebase
3. Create issue with complete specification content (no summarization)
4. Execute: `gh issue create --title "Feature Title" --body "$(cat <<'EOF'...EOF)"`

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
