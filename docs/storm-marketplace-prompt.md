# Prompt: Create a Claude Code Plugin Marketplace for Storm

Use this prompt in Claude Code with the superpowers brainstorming skill (`/superpowers:brainstorming`) to design and build a marketplace for the Storm test case generator.

---

## Prompt

I want to create a Claude Code plugin marketplace for **Storm — a Test Case Generator for Salesforce Industries**. Storm is a Claude Code skill that reads business context documents (PRDs, ERDs, test plans, design docs, mocks) and produces grounded, citation-backed hero test cases with exact steps, dependency chains, and multi-format export (HTML dashboard, CSV, DOCX, JSON).

### What Storm Does

Storm uses a 5-stage pipeline:
1. **Ingest** — Scans source documents, extracts user journeys, personas, business actions, data dependencies
2. **Clarify** — Identifies gaps, asks clarifying questions, produces approved test spec
3. **Generate** — Produces hero test cases with confidence grading (HIGH/MEDIUM/LOW) and source citations
4. **Review** — Presents cases for SME review via browser dashboard or inline text
5. **Export** — Runs Python export scripts to produce HTML dashboard, CSV, DOCX deliverables

### Storm's Architecture

Storm uses a hub-and-spoke architecture:
- `SKILL.md` — orchestrator that drives the 5-stage pipeline
- `stages/01-ingest.md` through `stages/05-export.md` — stage-specific reference files
- `framework.md` — business solution framework
- `references/domains/<domain>/` — domain knowledge packs (domain.md, guardrails.md, faq.md)
- `scripts/export/` — Python export scripts for HTML, CSV, DOCX
- `storm.config.yaml` — project-level config (domain, input docs path, output formats)

Current domains: Revenue Cloud (fully built), Health Cloud (future), Loyalty (future).

### What I Need Built

Create a **Claude Code plugin marketplace** git repo that packages Storm as an installable plugin. Focus on the plugin infrastructure, not a static showcase site.

### Plugin Marketplace Schema Reference

The marketplace uses this exact schema (validated by `claude plugin validate`):

**`.claude-plugin/marketplace.json`** (repo root):
```json
{
  "name": "marketplace-name",
  "owner": {
    "name": "Team Name"
  },
  "metadata": {
    "description": "What this marketplace provides",
    "version": "1.0.0"
  },
  "plugins": [
    {
      "name": "plugin-name",
      "description": "What the plugin does",
      "source": "./path-to-plugin-directory"
    }
  ]
}
```

Key schema rules:
- Use `source` (NOT `path`) for plugin directories
- `description` goes under `metadata` at root level (NOT as a root field)
- Each plugin entry needs `name`, `description`, and `source`

**`<plugin-dir>/.claude-plugin/plugin.json`**:
```json
{
  "name": "plugin-name",
  "description": "What it does",
  "author": {
    "name": "Team Name"
  }
}
```

Keep plugin.json minimal — `category` and `keywords` are ignored by Claude Code at load time (they're only useful if you build a showcase site).

**`<plugin-dir>/skills/<skill-name>/SKILL.md`**:
```markdown
---
name: skill-name
description: What the skill does and when to activate it. Use when user says "trigger phrase 1", "trigger phrase 2". Max 200 characters for Claude Desktop compatibility.
---

# Skill Title

Instructions Claude follows when this skill is invoked.

## Phase 1: First Step
...
```

The YAML frontmatter `name` and `description` are mandatory. The description controls when Claude activates the skill — include trigger words/phrases.

### Claude Desktop Compatibility

If you also want skills uploadable to Claude Desktop (not just Claude Code CLI), package each skill as:

**Option A — `.md` file:** The SKILL.md file itself works directly (drag-and-drop upload).

**Option B — `.zip` file:** Must have a folder as root:
```
skill-name.zip
└── skill-name/
    ├── SKILL.md
    └── references/    (optional)
```

NOT files directly in zip root — Claude Desktop rejects that structure.

### Installation Flow (for end users)

```bash
# 1. Add the marketplace
claude plugin marketplace add owner/repo-name

# 2. Install the Storm plugin
claude plugin install storm@marketplace-name

# 3. Use it
/storm
```

### Validation

Always validate manifests before pushing:
```bash
claude plugin validate .claude-plugin/marketplace.json
claude plugin validate plugins/storm/
```

### Things to Figure Out

- How to structure Storm's complex file tree (stages/, domains/, scripts/) within the plugin directory
- Whether Storm should be one plugin with everything, or split into separate plugins (core + domain packs)
- How to handle the Python export scripts (Storm needs pandas, python-docx, etc.)
- How `storm.config.yaml` interacts with the plugin system
- Whether domain packs should be installable independently

Help me design this using the superpowers brainstorming skill. Start by exploring the project structure, then ask clarifying questions one at a time.
