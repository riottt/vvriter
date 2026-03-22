import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { registerCourseTools } from './courses.js'
import { registerFrameworkTools } from './frameworks.js'
import { registerGenerateTools } from './generate.js'
import { registerProjectTools } from './projects.js'
import { registerSlidesTools } from './slides.js'
import { registerTweetTools } from './tweets.js'
import { registerVisualTools } from './visuals.js'
import { registerVoiceTool } from './voice.js'

export function registerTools(server: McpServer) {
  registerVoiceTool(server)
  registerFrameworkTools(server)
  registerTweetTools(server)
  registerVisualTools(server)
  registerProjectTools(server)
  registerCourseTools(server)
  registerGenerateTools(server)
  registerSlidesTools(server)
}
