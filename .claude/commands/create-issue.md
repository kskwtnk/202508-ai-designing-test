---
description: Create GitHub issues from specification documents with appropriate structure and clarity
allowed-tools: [Bash, Read, Edit, TodoWrite]
---

# Smart Issue Creation

Analyze specification documents and create well-structured GitHub issues that provide clear context for implementation.

## Execution Steps

1. **Create Work Plan**
   - List necessary tasks using TodoWrite tool
   - Analyze specification documents: requirements, design, tasks
   - Plan issue structure and content
2. **Read Specification Documents**
   - Read all related specification files (requirements.md, design.md, tasks.md)
   - Extract key information: user stories, acceptance criteria, technical details
   - Identify implementation scope and dependencies
3. **Analyze Project Context**
   - Check existing codebase structure and patterns
   - Identify relevant components and files that need modification
   - Assess technical constraints and requirements
4. **Structure Issue Content**
   - Create clear, actionable title based on feature name
   - Organize content with appropriate sections
   - Include user stories and acceptance criteria
   - Add technical implementation details
   - Reference related files and components
5. **Generate GitHub Issue**
   - Use `gh issue create` command with structured content
   - Ensure issue is ready for development
6. **Verify Issue Quality**
   - Check that issue provides clear context
   - Ensure implementation steps are actionable
   - Confirm all necessary information is included

## Issue Structure Format

```markdown
# Summary

Brief description of the feature or enhancement

## User Story

AS A [user type]
I WANT [goal/desire]
SO THAT [benefit/value]

## Acceptance Criteria

- [ ] Clear, testable criteria
- [ ] Specific behavior descriptions
- [ ] Edge cases and error scenarios

## Technical Implementation

### Components to Modify/Create

- List of files and components
- Brief description of changes needed

### Dependencies

- External libraries or APIs
- Existing components to reuse

## Design Specifications

- Link to design documents
- Key styling requirements
- Responsive behavior

## Definition of Done

- [ ] Implementation complete
- [ ] Code review approved
- [ ] Documentation updated
```

## Title Format

Use clear, action-oriented titles that describe the feature:

- "Add sticky CTA component for improved user engagement"
- "Implement responsive navigation menu"
- "Create user authentication flow"

## Execution Example

```bash
# Work plan with TodoWrite
1. Read specification documents (requirements.md, design.md, tasks.md)
2. Analyze existing codebase for context
3. Structure issue content with clear sections
4. Create GitHub issue with gh CLI

# Issue creation
gh issue create \
  --title "Add sticky CTA component for improved user engagement" \
  --body-file issue-content.md
```

## Notes

- **Focus on clarity**: Issues should be understandable by any team member
- **Include context**: Reference existing code patterns and components
- **Be specific**: Avoid vague requirements or implementation details
- **Think user-first**: Start with user value before technical implementation
- **Reference specs**: Always link back to specification documents

**Starting execution...**
