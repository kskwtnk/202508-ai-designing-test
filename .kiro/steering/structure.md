# Project Structure

## Directory Layout

```
src/
├── app/                   # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── quote/page.tsx     # Quote form
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Tailwind imports
├── components/            # UI Component library
│   ├── Button.tsx         # Color variants + label system
│   ├── Footer.tsx         # Global footer
│   ├── Header.tsx         # Global header
│   ├── LinkButton.tsx     # Link-styled button component
│   ├── Logo.tsx           # Brand logo component
│   ├── Select.tsx         # Options array + help text
│   ├── TextField.tsx      # Input with unit text support
│   └── index.ts           # Barrel exports
└── utils/
    └── asset-path.ts      # GitHub Pages helper
```

## Component Standards

- **Default exports** with barrel file re-exports
- **TypeScript interfaces** for all props
- **tailwind-variants** for styling variants
- **React 19 patterns**: direct ref props, useId hook

## Naming Conventions

- Components: PascalCase (Button.tsx)
- Utils: kebab-case (asset-path.ts)
- Assets: descriptive names (main-visual.webp)

## Import Organization

1. React/Next.js imports
2. Local components via `@/components`
3. Utilities via `@/utils`
