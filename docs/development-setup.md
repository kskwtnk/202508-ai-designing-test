# Development Environment Setup

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build & Test
```bash
npm run build
npm run lint
npm run type-check
```

## Tech Stack

- **Framework**: Next.js v15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Tailwind Variants
- **Development Tools**: ESLint
- **Design Integration**: Figma Dev Mode MCP Server ([configuration details](./mcp-configuration.md))

## Development Workflow

### Current Development Workflow
1. Requirements definition and design
2. Create UI components with component library
3. Page implementation (using Tailwind Variants)
4. TypeScript type checking and ESLint execution
5. Build verification

### Figma Integration Workflow
1. Create designs in Figma (see [Figma Guidelines](./figma-guidelines.md))
2. Generate components with Dev Mode MCP (see [MCP Configuration](./mcp-configuration.md))
3. Integrate with existing component library (see [Component Library](./component-library.md))
4. Page implementation and adjustments

## Directory Structure

```
.
├── README.md
├── CLAUDE.md
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── docs/                     # Documentation files
│   ├── figma-guidelines.md
│   ├── development-setup.md
│   ├── component-library.md
│   └── mcp-configuration.md
├── src/
│   ├── app/
│   │   ├── page.tsx          # Top page
│   │   ├── quote/
│   │   │   └── page.tsx      # Quote form
│   │   ├── complete/
│   │   │   └── page.tsx      # Complete page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── favicon.ico
│   └── components/           # Component library
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Card.tsx
│       └── index.ts
└── public/                   # Static files
    ├── next.svg
    ├── vercel.svg
    └── ...
```

## Troubleshooting

### Build Errors
- Check type errors with `npm run type-check`
- Auto-fix lint errors with `npm run lint -- --fix`

### MCP Server Issues
For MCP server connection problems, see [MCP Configuration](./mcp-configuration.md#troubleshooting)