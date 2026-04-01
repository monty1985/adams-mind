# Adams Mind — Skills Marketplace

A Claude Code plugin marketplace for the Adams Mind product. Contains internal skills for product management, development workflows, and team onboarding.

## Quick Start

```bash
# Add the marketplace
claude plugin marketplace add <git-url>

# Install a plugin
claude plugin install pm-sprint-planning@adams-mind

# Use the skill
/sprint-planning
```

## Development

Regenerate the showcase site after adding or updating plugins:

```bash
node site/build.js
```

## Categories

- **Product Management** (`pm-`) — Sprint planning, roadmaps, user stories, backlog grooming
- **Development** (`dev-`) — Code review, testing, API design, debugging
- **Onboarding** (`onboard-`) — New engineer setup, product tour, codebase walkthrough
