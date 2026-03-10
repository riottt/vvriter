import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { registerGenerateTools } from './generate.js'

export function registerTools(server: McpServer) {
  registerGenerateTools(server)
}
