# Technology Stack

## Core Stack

- **Next.js 15** with App Router + TypeScript
- **React 19** (no forwardRef - use direct ref props)
- **Tailwind CSS 4** + tailwind-variants for component styling
- **Static export** for GitHub Pages deployment

## Component Development

- Use `tailwind-variants` for type-safe styling variants
- Use React's `useId` hook for ID generation (not Math.random)
- Color scheme: sky-600 (main), fuchsia-600 (accent)
- Japanese font: Noto Sans JP

## Development Commands

```bash
npm run dev          # Start with Turbopack
npm run build        # Production build
npm run type-check   # TypeScript validation
npm run lint         # ESLint + auto-fix
npm run format       # Prettier formatting
```

## MCP Servers

- **Figma Dev Mode**: `http://127.0.0.1:3845/mcp` (code generation)
- **Context7**: `https://mcp.context7.com/mcp` (library docs)
