# MVP 1 — Users, Characters & Roleplay

> Core functional base of InterWorld. Defines the identity system of the bot: user registration and full character management, including the webhook-based roleplay system.

**Status:** ✅ Completed — April 2026

---

## Objective

Implement the core identity system of InterWorld, composed of the users module and the characters module, as a prerequisite for all future modules in the ecosystem.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!create` | Registers the user into the InterWorld system | — | ✅ |
| `!newchart` | Creates a new character linked to the user and server | — | ✅ |
| `!chart-list` | Lists characters with edit and delete options | `charts`, `characters` | ✅ |
| `!help` | General bot information and available commands | — | ✅ |

---

## Features

### Roleplay System
Triggered by writing `[nickname]: <text>`. The bot deletes the original message and resends it as the character via webhook.

- [x] Character ownership verification
- [x] Server binding verification
- [x] Local webhook cache (TTL 8 min)
- [x] Restart recovery using Discord as source of truth
- [x] Automatic cleanup of expired webhooks

---

## Schemas involved

- `users` — Users registered in the system
- `characters` — Characters linked to users and servers

---

## Completion Criteria

- [x] User can register with `!create`
- [x] User can create, view, edit and delete characters
- [x] Roleplay system detects and sends messages as the character
- [x] Webhooks operate with cache and recover after restarts
- [x] `!help` command implemented
