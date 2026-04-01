---
name: codebase-walkthrough
description: Deep dive into codebase architecture, key modules, and design patterns. Use when user says "codebase walkthrough", "show me the code", or "architecture overview".
---

# Codebase Walkthrough

## Phase 1: High-Level Architecture

- Describe the overall system architecture (monolith, microservices, monorepo, etc.)
- Map the major services and how they communicate (REST, gRPC, events, queues)
- Explain the data flow from user action to database and back
- Identify the infrastructure layer (cloud provider, containers, CDN, CI/CD)

## Phase 2: Key Modules

- Tour the most important directories and their responsibilities
- Highlight the core domain logic and where business rules live
- Walk through the API layer: routing, middleware, controllers, validation
- Explain the data access layer: ORM, query patterns, migration strategy
- Point out shared utilities, design systems, and internal libraries

## Phase 3: Patterns & Conventions

- Explain the primary design patterns in use (MVC, repository, CQRS, etc.)
- Review coding conventions: naming, file structure, error handling, logging
- Walk through the testing strategy and where tests live
- Highlight any known technical debt and areas earmarked for refactoring
- Share links to Architecture Decision Records (ADRs) for key past decisions
