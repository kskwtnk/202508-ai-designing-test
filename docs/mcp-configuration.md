# MCP Configuration

## Configured MCP Servers

The project has the following MCP servers configured:

1. **Figma Dev Mode MCP Server**
   - URL: `http://127.0.0.1:3845/mcp`
   - Purpose: Code generation from Figma and design system integration

2. **Context7 MCP Server**
   - URL: `https://mcp.context7.com/mcp`
   - Purpose: Library documentation retrieval and latest information reference

## Prerequisites

- Figma Professional/Organization/Enterprise plan with Dev/Full seats
- Figma Desktop Application
- Claude Code

## Available Tools

### Figma Dev Mode Tools

- `get_code`: Generate code from Figma selection
- `get_variable_defs`: Extract design variables
- `get_code_connect_map`: Map Figma nodes to components

### Context7 Tools

- `resolve-library-id`: Resolve library names to Context7 IDs
- `get-library-docs`: Retrieve latest library documentation

## Usage Guidelines

### Figma Dev Mode Integration

1. **Open Figma Desktop**: Ensure the Figma Desktop application is running
2. **Select Components**: Choose the component or design element in Figma
3. **Generate Code**: Use Claude Code with MCP tools to generate React components
4. **Integrate**: Copy and adapt the generated code into your project

### Best Practices

- Test MCP server connectivity before starting development sessions
- Use specific and detailed prompts (see [Figma Guidelines](./figma-guidelines.md#optimal-prompting))
- Review and refactor generated code for project consistency
- Follow established component patterns ([Component Library](./component-library.md))

## Troubleshooting

### Connection Issues

- Verify Figma Desktop Application is running
- Check if `http://127.0.0.1:3845/mcp` is accessible
- Restart Figma Desktop if connection fails
- Re-check Claude Code MCP configuration

### Code Generation Issues

- Ensure proper component selection in Figma
- Use detailed prompts with specific requirements
- Break complex components into smaller, manageable parts
- Review Figma design structure for optimization opportunities