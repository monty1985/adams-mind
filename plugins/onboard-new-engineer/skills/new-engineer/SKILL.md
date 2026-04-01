---
name: new-engineer
description: Step-by-step onboarding for new engineers covering environment setup, codebase tour, and first PR. Use when user says "onboard engineer", "new engineer setup", or "engineer onboarding".
---

# New Engineer Onboarding

## Phase 1: Environment Setup

- Set up local development environment (Node, package manager, Docker, etc.)
- Clone all required repositories and install dependencies
- Configure environment variables from the internal secrets manager
- Verify the local dev server runs end-to-end without errors
- Set up IDE with recommended extensions and team linting config

## Phase 2: Codebase Tour

- Walk through the high-level architecture and service boundaries
- Identify the key entry points (API routes, main components, background jobs)
- Explain the folder structure and naming conventions
- Highlight the most frequently touched modules and files
- Point to internal wikis, ADRs, and design docs for deeper context

## Phase 3: First PR

- Assign a starter issue labeled "good first issue" or "onboarding"
- Pair with a buddy engineer for the first PR
- Walk through the full PR workflow: branch, commit, push, open PR, review
- Explain the CI checks and what must pass before merge
- Celebrate the merge — first PR is a milestone!
