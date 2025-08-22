# Cybernetic Prosthetics Bulk Quote Website

AI-powered design-to-implementation demonstration application

## Claude Code Language Settings

- **Thinking Language**: English (for internal processing and analysis)
- **Response Language**: Japanese (for user communication)
- **Documentation Language**: English (for broader accessibility and collaboration)

## Project Overview

A bulk quote website for fictional cybernetic prosthetic products. This project demonstrates automatic code generation from Figma designs and enables non-developers to issue implementation instructions through GitHub Issues.

## Page Structure

1. **Top Page** (`/`) - Service introduction, feature explanations, and call-to-action for applications
2. **Quote Form** (`/quote`) - Cybernetic prosthetics quote input form
3. **Complete Page** (`/complete`) - Application completion message

## Implemented Features

### Application Features
- ✅ Top Page: Cybernetic prosthetics service introduction (Hero, Features, Products, CTA sections)
- ✅ Quote Form: Detailed application form (with validation and rough estimate functionality)
- ✅ Complete Page: Application content confirmation and status display
- ✅ Responsive design support

### Technical Implementation
- ✅ TypeScript type safety ensured
- ✅ Component styling with Tailwind CSS and design token alignment
- ✅ Form validation
- ✅ Data persistence using LocalStorage
- ✅ Production build verified
- ✅ React 19 compliance (direct ref props, useId hooks)
- ✅ Figma-to-code generation pipeline with MCP integration
- ✅ Japanese language support (Noto Sans JP font)

## Future Extensions

### GitHub Actions + Claude Code Actions
- Automated implementation workflow on issue creation
- Automatic Pull Request generation
- Issue creation guide for non-developers
- Automatic component generation via Figma URL integration

## Documentation

For detailed information, please refer to the following documentation files:

- **[Development Setup](./docs/development-setup.md)** - Environment setup, tech stack, and build instructions
- **[Figma Guidelines](./docs/figma-guidelines.md)** - Figma integration and code generation guidelines
- **[Component Library](./docs/component-library.md)** - Component specifications and usage patterns
- **[MCP Configuration](./docs/mcp-configuration.md)** - MCP server setup and tool usage
