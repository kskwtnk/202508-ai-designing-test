# Cybernetic Prosthetics Bulk Quote Website

AI-powered design-to-implementation demonstration application

## Claude Code Language Settings

- **Thinking Language**: English (for internal processing and analysis)
- **Response Language**: Japanese (for user communication)
- **Documentation Language**: English (for broader accessibility and collaboration)

## Project Overview

A bulk quote website for fictional cybernetic prosthetic products. This project demonstrates automatic code generation from Figma designs and enables non-developers to issue implementation instructions through GitHub Issues.

## Tech Stack

- **Framework**: Next.js v15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Tailwind Variants
- **Development Tools**: ESLint
- **Design Integration**: Figma Dev Mode MCP Server (configured and ready)

## Page Structure

1. **Top Page** (`/`) - Service introduction, feature explanations, and call-to-action for applications
2. **Quote Form** (`/quote`) - Cybernetic prosthetics quote input form
3. **Complete Page** (`/complete`) - Application completion message

## Development Environment Setup

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

## MCP Configuration

### Configured MCP Servers

The project has the following MCP servers configured:

1. **Figma Dev Mode MCP Server**
   - URL: `http://127.0.0.1:3845/mcp`
   - Purpose: Code generation from Figma and design system integration

2. **Context7 MCP Server**
   - URL: `https://mcp.context7.com/mcp`
   - Purpose: Library documentation retrieval and latest information reference

### Prerequisites
- Figma Professional/Organization/Enterprise plan with Dev/Full seats
- Figma Desktop Application
- Claude Code

### Available Tools

#### Figma Dev Mode Tools:
- `get_code`: Generate code from Figma selection
- `get_variable_defs`: Extract design variables
- `get_code_connect_map`: Map Figma nodes to components

#### Context7 Tools:
- `resolve-library-id`: Resolve library names to Context7 IDs
- `get-library-docs`: Retrieve latest library documentation

### Best Practices
- Organize Figma files with clear component structure
- Use semantic layer naming
- Write specific prompts when generating code
- Break large selections into smaller parts for processing

## Component Library

Reusable UI components are located in `/src/components/`:

- **Button**: Basic button component (primary, secondary, outline, ghost variants)
- **Input**: Form input element (with label and error display functionality)
- **Select**: Select box component (supports option arrays)
- **Card**: Card-style layout (with Header, Title, Content sub-components)

### Using Tailwind Variants

All components use Tailwind Variants for type-safe variant management:

```typescript
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center...',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white...',
      secondary: 'bg-gray-100 text-gray-900...'
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
```

### Dependencies

- `tailwind-variants`: Component variant management
- `tailwind-merge`: Tailwind class conflict resolution

## Implemented Features

### Application Features
- ✅ Top Page: Cybernetic prosthetics service introduction (Hero, Features, Products, CTA sections)
- ✅ Quote Form: Detailed application form (with validation and rough estimate functionality)
- ✅ Complete Page: Application content confirmation and status display
- ✅ Responsive design support

### Technical Implementation
- ✅ TypeScript type safety ensured
- ✅ Component styling with Tailwind Variants
- ✅ Form validation
- ✅ Data persistence using LocalStorage
- ✅ Production build verified

## Future Extensions

### GitHub Actions + Claude Code Actions
- Automated implementation workflow on issue creation
- Automatic Pull Request generation
- Issue creation guide for non-developers
- Automatic component generation via Figma URL integration

## Directory Structure

```
.
├── README.md
├── CLAUDE.md
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
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

## Development Workflow

### Current Development Workflow
1. Requirements definition and design
2. Create UI components with component library
3. Page implementation (using Tailwind Variants)
4. TypeScript type checking and ESLint execution
5. Build verification

### Figma Integration Workflow (Ready)
1. Create designs in Figma
2. Generate components with Dev Mode MCP
3. Integrate with existing component library
4. Page implementation and adjustments

## Troubleshooting

### MCP Server Connection Errors
- Verify Figma Desktop Application is running
- Check if `http://127.0.0.1:3845/mcp` is accessible
- Re-check Claude Code configuration

### Build Errors
- Check type errors with `npm run type-check`
- Auto-fix lint errors with `npm run lint -- --fix`
