---
name: testing-workflow
description: End-to-end testing strategy with unit, integration, and E2E test generation. Use when user says "write tests", "testing strategy", or "test plan".
---

# Testing Workflow

## Phase 1: Analysis

- Identify what needs to be tested: new features, bug fixes, or regressions
- Determine the appropriate test layers (unit, integration, E2E)
- Review existing test coverage and identify gaps
- Define the testing scope and acceptance bar for this change

## Phase 2: Unit Tests

- Write tests for individual functions, classes, and components in isolation
- Mock external dependencies (APIs, databases, file system)
- Cover the happy path, edge cases, and expected failure modes
- Aim for high coverage on business logic and utility functions

## Phase 3: Integration & E2E

- Write integration tests for module boundaries and API contracts
- Create E2E tests for critical user flows (login, checkout, key features)
- Run tests against a realistic environment (staging DB, seeded data)
- Ensure tests are deterministic and do not depend on execution order
- Add tests to CI so they run on every PR before merge
