# Component Library

## Overview

Reusable UI components are located in `/src/components/`:

- **Button**: Basic button component with color variants and label support
- **Input**: Form input element (with label and error display functionality)
- **Select**: Select box component (supports option arrays)
- **Card**: Card-style layout (with Header, Title, Content sub-components)

## Using Tailwind Variants

All components use Tailwind Variants for type-safe variant management:

```typescript
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex gap-1 items-center justify-center p-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none',
  variants: {
    color: {
      main: 'bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-300',
      accent: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-lg shadow-purple-300'
    }
  },
  defaultVariants: {
    color: 'main'
  }
})
```

## Component Specifications

### Button Component

The Button component supports:
- **Color variants**: `main` (sky blue) and `accent` (fuchsia)
- **Label system**: `primaryLabel` (required) and optional `secondaryLabel`
- **Standard HTML button attributes**: All standard button props are supported
- **React 19 compliance**: Uses direct ref prop instead of forwardRef

Example usage:
```tsx
<Button primaryLabel="Submit" />
<Button primaryLabel="Apply" secondaryLabel="Free" color="accent" />
```

### Implementation Standards

- **React 19**: No forwardRef usage - use direct ref props
- **TypeScript**: Full type safety with proper prop interfaces
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Performance**: Minimal re-renders with optimized variant calculations

## Dependencies

- `tailwind-variants`: Component variant management
- `tailwind-merge`: Tailwind class conflict resolution

## Development Guidelines

1. **Type Safety**: Ensure full TypeScript coverage with proper interfaces
2. **Consistent API**: Follow established patterns for props and variants
3. **Performance**: Optimize for minimal re-renders and efficient variant calculations
4. **Accessibility**: Include proper ARIA attributes and semantic HTML

For code generation from Figma, see [Figma Guidelines](./figma-guidelines.md)