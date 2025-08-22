# Component Library

## Overview

Reusable UI components are located in `/src/components/`:

- **Button**: Basic button component with color variants and label support
- **TextField**: Form input element (with label, error display, and unit text functionality)
- **Select**: Select box component (supports option arrays, help text, and error states)
- **Card**: Card-style layout (with Header, Title, Content sub-components)
- **Header**: Application header with logo
- **Footer**: Application footer component

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

### TextField Component

The TextField component supports:
- **Input types**: All standard HTML input types
- **Label and placeholder**: Japanese language support
- **Unit text**: Display units (e.g., "円", "kg") next to input
- **Error and help text**: Conditional display of validation messages
- **React 19 compliance**: Uses direct ref prop and useId hook

Example usage:
```tsx
<TextField label="金額" placeholder="金額を入力" unitText="円" />
<TextField label="お名前" placeholder="お名前を入力" errorText="必須項目です" />
```

### Select Component

The Select component supports:
- **Options array**: Array of {value, label, disabled} objects
- **Placeholder support**: Japanese placeholder text
- **Help and error text**: Conditional display of guidance messages
- **React 19 compliance**: Uses direct ref prop and useId hook

Example usage:
```tsx
<Select 
  label="メーカー" 
  placeholder="選択してください"
  options={[
    {value: "a", label: "メーカーA"},
    {value: "b", label: "メーカーB"}
  ]}
/>
```

### Implementation Standards

- **React 19**: No forwardRef usage - use direct ref props
- **useId Hook**: Use React's useId instead of Math.random() for ID generation
- **TypeScript**: Full type safety with proper prop interfaces
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Japanese Support**: Noto Sans JP font with proper Japanese text handling

## Dependencies

- `tailwind-variants`: Component variant management
- `tailwind-merge`: Tailwind class conflict resolution

## Development Guidelines

1. **Type Safety**: Ensure full TypeScript coverage with proper interfaces
2. **Consistent API**: Follow established patterns for props and variants
3. **Performance**: Optimize for minimal re-renders and efficient variant calculations
4. **Accessibility**: Include proper ARIA attributes and semantic HTML

For code generation from Figma, see [Figma Guidelines](./figma-guidelines.md)