# Architecture — InterWorld

## Overview

InterWorld is built around a **modular handler system**. Every component type is isolated in its own directory and loaded dynamically at startup, making the codebase easy to extend without touching core logic.

---

## Project Structure

```
src/
├── commands/
│   ├── moderacion/       # Server administration commands
│   ├── roleplay/         # Character and roleplay commands
│   └── variados/         # General utility commands
├── components/
│   ├── buttons/          # Button interaction handlers
│   ├── menus/            # Select menu interaction handlers
│   ├── modals/           # Modal submit handlers
│   └── reactions/        # Message reaction handlers
└── events/               # Discord gateway event handlers

handlers/                 # Dynamic loaders for each component type
functions/                # Shared utility functions
models/                   # Mongoose schemas
```

---

## Handler System

Each component type has a dedicated handler that scans its directory and registers every file into a `Collection` on the client at startup.

```
client.commands    ← loaded from src/commands/**
client.buttons     ← loaded from src/components/buttons/
client.menus       ← loaded from src/components/menus/
client.modals      ← loaded from src/components/modals/
client.reactions   ← loaded from src/components/reactions/
client.events      ← loaded from src/events/
```

Adding a new command, menu or modal requires only creating the file — no registration code needed.

---

## Interaction Routing

All Discord interactions are routed through a single `interactionCreate` event handler that dispatches to the correct collection based on interaction type and a structured `customId` convention.

### customId Convention

```
type:system:viewerId:...extraData
```

| Segment | Description |
|---------|-------------|
| `type` | Component type: `menu`, `modal`, `button` |
| `system` | Name of the handler to invoke |
| `viewerId` | Discord user ID — used to prevent other users from triggering the interaction |
| `...extraData` | Additional context passed to the handler (targetId, charId, timestamp, etc.) |

**Example:**
```
menu:chartView:123456789:123456789:1710000000000
modal:edit_name:123456789:2
button:accept_delete:123456789:123456789:2
```

---

## Webhook Caching System

The roleplay system proxies messages through Discord webhooks so they appear as characters. To minimize API calls and stay within Discord's 15-webhook-per-channel limit, a three-layer strategy is used:

```
1. Local cache (Map)
   └── If valid (TTL 8 min) → send directly

2. Discord as source of truth
   └── Fetch channel webhooks
   └── Reuse recent bot-owned webhook if found
   └── Delete stale orphaned webhooks

3. Create new webhook
   └── Cache it with TTL timer
   └── Auto-delete on expiry
```

This ensures the system survives bot restarts without accumulating orphaned webhooks.

---

## Database Design

InterWorld uses **MongoDB** with **Mongoose**. Collections are designed to minimize redundancy and allow progressive expansion as new MVPs are implemented.

| Collection | Purpose |
|-----------|---------|
| `users` | Registered users and their economic data |
| `characters` | All characters per user, with health, social and economy data |
| `servers` | Per-server configuration, reputation and moderation data |
| `banks` | Bank institutions managing the virtual economy |

See [docs/schemas.md](schemas.md) for full schema documentation.

---

## Event Flow — Roleplay Message

```
User sends: "lexand: hello everyone"
     │
     ▼
messageCreate event fires
     │
     ▼
Regex matches "nick: text" pattern
     │
     ▼
Validate user is registered
Validate character exists and is bound to this server
     │
     ▼
Delete original message
     │
     ▼
Check webhook cache
  ├── Cache hit (valid TTL) → send via cached webhook
  ├── Cache miss → fetch Discord webhooks
  │     ├── Found recent bot webhook → re-cache and send
  │     └── Not found / stale → create new webhook, cache, send
  └── Send message as character
```

---

## Deployment

InterWorld is deployed on **Railway** with automatic deploys on push to the `main` branch. Environment variables are managed directly in Railway — never in the repository.

The development workflow uses a separate bot token and a dedicated test server to avoid interfering with the production instance.
