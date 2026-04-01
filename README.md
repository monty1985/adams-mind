# Adams Mind — Skills Marketplace

A Claude Code plugin marketplace for the Adams Mind product. Contains internal skills for product management, development workflows, and team onboarding.

**[View Showcase Site](https://htmlpreview.github.io/?https://github.com/monty1985/adams-mind/blob/master/site/index.html)**

## Quick Start

```bash
# Add the marketplace
claude plugin marketplace add git+https://github.com/monty1985/adams-mind.git

# Install a plugin
claude plugin install pm-sprint-planning@adams-mind

# Use the skill
/sprint-planning
```

## Available Skills

### Product Management (`pm-`)
| Skill | Command | Description |
|---|---|---|
| Sprint Planning | `/sprint-planning` | Guided sprint planning with agendas, story pointing, capacity tracking |
| Roadmap Builder | `/roadmap-builder` | Build and maintain product roadmaps with prioritization frameworks |
| User Story Writer | `/user-story-writer` | Write user stories with acceptance criteria and edge cases |
| Backlog Grooming | `/backlog-grooming` | Structured backlog refinement with prioritization and estimation |

### Development (`dev-`)
| Skill | Command | Description |
|---|---|---|
| Code Review | `/code-review` | Systematic code review with checklist, security scan, feedback templates |
| Testing Workflow | `/testing-workflow` | End-to-end testing strategy with unit, integration, and E2E generation |
| API Design | `/api-design` | RESTful API design with OpenAPI specs, validation, documentation |
| Debugging Guide | `/debugging-guide` | Systematic debugging with root cause analysis and fix verification |

### Onboarding (`onboard-`)
| Skill | Command | Description |
|---|---|---|
| New Engineer | `/new-engineer` | Step-by-step new engineer setup — env, codebase tour, first PR |
| Product Tour | `/product-tour` | Guided product walkthrough for new team members |
| Codebase Walkthrough | `/codebase-walkthrough` | Deep dive into codebase architecture and key modules |

## Development

Regenerate the showcase site after adding or updating plugins:

```bash
node site/build.js
```

## Adding a New Skill

1. Create a plugin directory: `plugins/<category>-<name>/`
2. Add `.claude-plugin/plugin.json` with name, description, version, category, keywords
3. Add `skills/<name>/SKILL.md` with YAML frontmatter and phased instructions
4. Add the plugin entry to `.claude-plugin/marketplace.json`
5. Rebuild the site: `node site/build.js`
6. Commit and push
