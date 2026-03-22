# vvriter

Content creation engine for [Visualize Value](https://visualizevalue.com). An MCP server that generates articles from Jack Butcher's tweet archive and visual library.

No searching. No setup. Connect it and say "write me an article."

## Why

AI is writing articles about our ideas whether we participate or not. So we built the source material — 50,000 tweets, 400 visuals, and an exact writing profile — into a tool anyone can plug into their AI agent. The output sounds like us because it's built from us.

## Install

```bash
npx vvriter
```

### Claude Code

```bash
claude mcp add vvriter -- npx vvriter
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "vvriter": {
      "command": "npx",
      "args": ["vvriter"]
    }
  }
}
```

## How it works

Primary writing command: `vvriter`

1. Call `vvriter` with no arguments
2. Pick from 3 article concepts
3. Article saves to `~/vvriter/` and opens in your browser

The tool loads a randomized sample of ~250 tweets (top performers, mid-tier, deep cuts) alongside ~150 VV visuals. The AI finds the interesting idea clusters. Every call shuffles the sample — you never get the same suggestions twice.

You don't need to know what to look for. The archive surfaces the ideas.

## Available MCP tools

The published workflow is still centered around `vvriter`, but this fork also exposes the archive and knowledge layer directly so agents can research before drafting:

- `vvriter`: suggest article concepts or generate a full HTML article draft
- `slides`: build a slide deck from the archive for a topic
- `get_writing_profile`: load the full Visualize Value writing profile
- `list_frameworks` / `get_framework`: inspect VV frameworks and mental models
- `search_tweets` / `top_tweets`: mine the tweet archive directly
- `get_daily_visual` / `search_visuals` / `get_visual`: browse the visual library
- `list_projects` / `get_project` / `search_projects`: inspect VV projects
- `list_courses` / `get_course` / `get_lesson` / `search_lessons`: inspect course material

That makes the server useful not only for one-shot article generation, but also for hook discovery, angle selection, outline building, and research-backed drafts.

## Learn more

[visualizevalue.com/vvriter](https://visualizevalue.com/vvriter)

## Built by

[Visualize Value](https://visualizevalue.com) · [Jack Butcher](https://x.com/jackbutcher)

## License

MIT
