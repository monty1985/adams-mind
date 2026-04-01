---
name: debugging-guide
description: Systematic debugging workflow with root cause analysis and fix verification. Use when user says "debug", "fix bug", "troubleshoot", or "root cause".
---

# Debugging Guide

## Phase 1: Reproduce

- Confirm the bug is reproducible in a local or staging environment
- Identify the exact steps to trigger the issue
- Note the actual vs. expected behavior
- Check logs, error messages, and stack traces for initial clues
- Narrow down the affected environment (browser, OS, version, config)

## Phase 2: Isolate

- Form a hypothesis about the root cause
- Use binary search / bisect to isolate the offending code or commit
- Add targeted logging or breakpoints to validate the hypothesis
- Rule out external factors: network, third-party APIs, environment variables
- Identify whether the bug is new (regression) or pre-existing

## Phase 3: Fix & Verify

- Implement the minimal fix that addresses the root cause
- Write a regression test that would have caught this bug
- Verify the fix resolves the issue without breaking related functionality
- Review the fix with a teammate before merging
- Document the root cause and resolution in the issue tracker
