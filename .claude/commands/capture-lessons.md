---
description: Automatically record implementation experiences after PR completion and update the knowledge base
allowed-tools: [Read, Write, Edit, Bash, Grep, Glob]
---

# Capture Implementation Lessons

This command extracts implementation experiences from merged PRs and updates the knowledge base in `.kiro/steering/`.

## Usage

```bash
/capture-lessons --pr-number 123
/capture-lessons --pr-number 123 --detailed  # More detailed analysis
```

## Processing Steps

1. **Analyze PR Changes**
   - Retrieve list of changed files
   - Extract implementation intent from commit messages
   - Identify issues and solutions from PR description

2. **Extract Code Patterns**
   - Newly added React components
   - Custom hooks (use\*) implementations
   - Tailwind CSS styling patterns
   - TypeScript type definition improvements

3. **Update Knowledge Base**
   - Append implementation experiences to `.kiro/steering/lessons.md`
   - Register reusable patterns in `.kiro/steering/patterns.md`
   - Record issue resolution cases in `.kiro/steering/challenges.md`

4. **Automatic Classification and Tagging**
   - Implementation difficulty level (Easy/Medium/Hard)
   - Technical domain (UI/Logic/Performance/Accessibility)
   - Project impact (Low/Medium/High)

## Output Examples

### Content Added to lessons.md

```markdown
## [2024-01-15] Scroll-following CTA Button

**Implementation Overview**: CTA button that toggles visibility based on user scroll position

**Tech Stack**: React 19 + TypeScript + Tailwind CSS + Intersection Observer API

**Key Implementation**:

- Created `useScrollTrigger` custom hook
- Performance optimization with Intersection Observer
- Responsive support (fixed positioning)

**Issues Encountered**:

1. Excessive scroll event firing
2. Display position misalignment on mobile devices
3. Animation processing optimization

**Solutions**:

1. Optimized with Intersection Observer API + throttle
2. Combined viewport units and safe-area
3. Used CSS transform and opacity for hardware acceleration

**Reusability**: High - useScrollTrigger can be adapted for other scroll-linked UI
**Difficulty**: Medium
**Tags**: [UI, Performance, Mobile, Responsive]
```

### Content Added to patterns.md

````markdown
## Scroll-linked UI Control Pattern

**Use Case**: Dynamically control UI based on scroll position

**Implementation Pattern**:

```typescript
const useScrollTrigger = (threshold = 100) => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTriggered(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${threshold}px 0px 0px 0px` },
    );

    const target = document.querySelector("#scroll-trigger-target");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [threshold]);

  return isTriggered;
};
```
````

**Usage Example**:

```tsx
const StickyHeader = () => {
  const shouldShow = useScrollTrigger(200);

  return (
    <header
      className={`fixed transition-opacity ${
        shouldShow ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header content */}
    </header>
  );
};
```

**Considerations**:

- Be careful with position: fixed behavior in Mobile Safari
- Use transform/opacity for animations (avoid reflow)
- Intersection Observer polyfill needed for older browsers

**Related Implementations**: sticky-cta, floating-navigation, scroll-progress

```

## Error Handling

- Display appropriate error messages when PR is not found
- Skip knowledge update when changes are minor
- Duplicate check functionality to prevent duplicate knowledge addition

## Future Extensions

- AI-powered automatic summarization
- Automatic detection and integration of similar implementations
- Metrics collection (implementation time, reuse rate, etc.)
```
