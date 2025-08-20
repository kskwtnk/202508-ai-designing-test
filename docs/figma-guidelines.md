# Figma-to-Code Generation Guidelines

## Figma Design References

### Primary Design Files

The following Figma files serve as the design reference for all UI implementation:

1. **Mockup Data (Main Design Reference)**
   - URL: https://www.figma.com/design/pjWgkDKN830oRbTGtGmGbx
   - Purpose: Primary mockup designs for all pages and components
   - Usage: Default reference for UI implementation unless otherwise specified

2. **Component Library**
   - URL: https://www.figma.com/design/HDT979jinrL3GvsAfgBd11
   - Purpose: Reusable component specifications and design system
   - Usage: Reference for component styling, variants, and behavior

### Implementation Guidelines

- **Default Behavior**: All UI implementations should reference the Mockup Data Figma file
- **Component Development**: Use the Component Library for creating reusable components
- **Design Consistency**: Maintain visual consistency with the provided Figma designs
- **MCP Integration**: Use Figma Dev Mode MCP tools ([setup details](./mcp-configuration.md))

## Best Practices

- Organize Figma files with clear component structure
- Use semantic layer naming
- Write specific prompts when generating code
- Break large selections into smaller parts for processing

## Optimal Prompting for Clean Implementation

When using Figma Dev Mode MCP to generate code, always specify these requirements:

```
"Generate a React component from this Figma component with the following requirements:

1. Minimal Markup: Avoid unnecessary wrapper elements
2. Standard Tailwind Classes: Prioritize standard values over custom values
3. Semantic HTML: Use appropriate tag selection
4. CSS Pseudo-selectors: Utilize :hover, :disabled, etc.
5. React 19 Compliance: No forwardRef usage
6. Production Quality: Type safety and accessibility considerations

Output Format: Use tailwind-variants with full TypeScript support"
```

## Implementation Constraints

- **Shadow**: Use box-shadow property, not separate div elements
- **Disabled State**: Use HTML standard disabled attribute, not custom props
- **Font**: Prefer standard classes (font-bold) over complex specifications (font-["Noto_Sans_JP"])
- **Sizing**: Prioritize standard classes (p-3) over numeric specifications (p-[13px])

## Figma Design Optimization

To generate cleaner code, design Figma components with:

1. **Minimal Layer Nesting**: Remove unnecessary wrapper layers
2. **Shadow as Property**: Set shadows on components, not as separate elements
3. **Semantic Naming**: Use meaningful layer names (Label instead of Primary Label)
4. **Standard Colors**: Align with Tailwind's standard color palette
5. **Simplified Variants**: Remove states that can be handled by CSS pseudo-selectors (disabled)
6. **Boolean Properties**: Use properties like hasSecondaryLabel for conditional elements