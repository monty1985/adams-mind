---
name: code-review
description: Systematic code review workflow with checklist, security scan, and feedback templates. Use when user says "review code", "code review", or "review PR".
---

# Code Review

## Phase 1: Overview

- Read the PR description and linked ticket before looking at the diff
- Understand the intent and scope of the change
- Check that the PR is appropriately sized (prefer small, focused PRs)
- Confirm the branch is up to date with main/trunk

## Phase 2: Review Checklist

- **Correctness:** Does the code do what the ticket/story requires?
- **Readability:** Is the code clear and well-named?
- **Tests:** Are unit and integration tests present and passing?
- **Security:** Check for SQL injection, XSS, auth bypasses, exposed secrets
- **Performance:** Flag N+1 queries, unnecessary re-renders, or heavy computations
- **Error handling:** Are edge cases and failure modes handled gracefully?
- **Documentation:** Are public APIs, complex logic, and config changes documented?

## Phase 3: Feedback

- Lead with praise for good patterns before raising concerns
- Use "nit:" prefix for non-blocking style suggestions
- Clearly mark blocking issues that must be resolved before merge
- Suggest alternatives rather than just pointing out problems
- Approve once all blocking issues are resolved
