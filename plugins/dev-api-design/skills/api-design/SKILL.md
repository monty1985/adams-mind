---
name: api-design
description: RESTful API design with OpenAPI specs, validation, and documentation generation. Use when user says "design API", "API design", or "create endpoint".
---

# API Design

## Phase 1: Resource Modeling

- Identify the core resources and their relationships
- Define resource names using nouns (not verbs) in plural form
- Map out the data model for each resource (fields, types, constraints)
- Determine ownership and access control requirements

## Phase 2: Endpoint Design

- Define CRUD endpoints using standard HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Design URL structure: `/resources`, `/resources/:id`, `/resources/:id/sub-resources`
- Specify request and response schemas with clear field definitions
- Define HTTP status codes for success and each error condition
- Design pagination, filtering, and sorting for list endpoints
- Plan versioning strategy (URL path `/v1/` or header-based)

## Phase 3: Documentation

- Write an OpenAPI 3.x spec for all endpoints
- Include example requests and responses for each endpoint
- Document authentication requirements (Bearer token, API key, OAuth)
- List error codes with descriptions and recovery guidance
- Publish docs to an internal developer portal or Swagger UI
