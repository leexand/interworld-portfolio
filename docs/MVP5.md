# MVP 5 — Social

> InterWorld's social layer. Guilds, character relationships, server reputation system, reports and warnings — building community and accountability into the ecosystem.

---

## Objective

Introduce the social dimension of InterWorld. Users and characters can form bonds, join guilds, and participate in a reputation system that keeps communities healthy.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!reputation` | Give a positive or negative reputation point to the server (weekly) | — | ⏳ |
| `!report [@user]` | Report a user for misconduct — local and global | — | ⏳ |
| `!warn [@user]` | Warn a user — Admin only | — | ⏳ |
| `!appeal` | Submit an appeal for a sanction | — | ⏳ |
| `!ticket` | Open a support ticket | — | ⏳ |

---

## Features

### Guild System
- [ ] Guilds exist per server with roles and contribution tracking
- [ ] Characters can join guilds and contribute resources
- [ ] Guild membership visible on character profile

### Character Relationships
- [ ] Characters can have friends, partners and children
- [ ] Relationship status tracked with a numeric value (0-100)
- [ ] Relationship history visible on character profile

### Server Reputation System
- [ ] Each server has a reputation score
- [ ] Users can assign one point (positive or negative) per week
- [ ] Users can leave a comment with their reputation vote
- [ ] Reputation history visible to server admins and developers

### Reports & Warnings
- [ ] Users can report other users locally (within a server) or globally
- [ ] Admins can warn users for rule violations
- [ ] Warnings are logged and visible to developers and admins
- [ ] Multiple warnings can escalate to sanctions

### Appeals
- [ ] Sanctioned users or servers can submit an appeal
- [ ] Appeals are reviewed by developers or high-rank admins
- [ ] Appeal outcome (accepted/rejected) is communicated to the user

### Support Tickets
- [ ] Users can open tickets to contact developers or high-rank admins
- [ ] Ticket system linked to a designated server channel

---

## Schemas Involved

- `users` — Guild membership reference
- `characters` — Friends, relationships, guild membership
- `servers` — Reputation score, reports, warns, appeals
- `guilds` *(new)* — Guild institutions per server

---

## Completion Criteria

- [ ] Guilds exist and characters can join them
- [ ] Character relationships are tracked and visible on profiles
- [ ] Server reputation system works with weekly voting
- [ ] Reports and warnings are functional locally and globally
- [ ] Appeal system is operational
- [ ] Ticket system is operational

---

## Pending

- [ ] `guilds` schema created
- [ ] Reputation weekly reset logic implemented
- [ ] All commands implemented
