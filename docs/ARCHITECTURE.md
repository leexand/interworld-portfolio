# Architecture — InterWorld

## Overview

InterWorld is built around a **modular handler system**. Every component type is isolated in its own directory and loaded dynamically at startup, making the codebase easy to extend without touching core logic.

---

## Project Structure

```
src/
├── types/
│   └── commands/
│       ├── public/           # Public commands (listed in !help)
│       │   ├── moderacion/   # Server administration commands
│       │   ├── roleplay/     # Character and economy commands
│       │   └── variados/     # General utility commands
│       └── developers/       # Developer-only commands (hidden from !help)
├── components/
│   ├── buttons/              # Button interaction handlers
│   ├── menus/                # Select menu interaction handlers
│   ├── modals/               # Modal submit handlers
│   └── reactions/            # Message reaction handlers
└── events/                   # Discord gateway event handlers

handlers/                     # Dynamic loaders for each component type
functions/                    # Shared utility functions
│   ├── characters.js         # Server-scoped character lookup utilities
│   ├── fileload.js           # Recursive file loader with hot-reload cache clearing
│   ├── functions.js          # expireMenu utility for timed select menus
│   └── multiverse/           # Multiverse anomaly system (hidden — inactive)
│       ├── config.js         # Phase configuration and probabilities
│       ├── engine.js         # Anomaly processing engine
│       ├── handler.js        # Discord execution of anomalies
│       └── scheduler.js      # Automatic phase timeline
models/                       # Mongoose schemas
│   ├── users.js
│   ├── characters.js
│   ├── server.js
│   ├── banks.js
│   ├── accounts.js
│   ├── items.js              # MVP 3
│   ├── properties.js         # MVP 3
│   ├── guilds.js             # MVP 5
│   └── jobs.js               # MVP 4
```

---

## Handler System

Each component type has a dedicated handler that scans its directory and registers every file into a `Collection` on the client at startup.

```
client.commands    ← loaded from src/types/commands/**
client.buttons     ← loaded from src/components/buttons/
client.menus       ← loaded from src/components/menus/
client.modals      ← loaded from src/components/modals/
client.reactions   ← loaded from src/components/reactions/
client.events      ← loaded from src/events/
```

Adding a new command, menu or modal requires only creating the file — no registration code needed.

Commands in `developers/` are loaded into the same collection but marked with `developerOnly: true` and excluded from `!help` output.

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
| `...extraData` | Additional context passed to the handler (targetId, chartid, timestamp, etc.) |

**Examples:**
```
menu:chartView:123456789:123456789:1710000000000
menu:bankView:123456789
modal:edit_name:123456789:abc.123.456.789
button:accept_delete:123456789:123456789:abc.123.456.789
button:bankJoin:123456789:507f1f77bcf86cd799439011
```

---

## Webhook System

The roleplay system proxies messages through Discord webhooks so they appear as characters. One webhook per channel is maintained — the character name and avatar are passed dynamically per message.

```
1. Local cache (Map) — key: guildId-channelId
   └── If valid (TTL 8 min) → send directly with character name/avatar

2. Discord as source of truth
   └── Fetch channel webhooks owned by the bot named "InterWorld"
   └── Reuse if found → re-cache

3. Create new webhook named "InterWorld"
   └── Cache with TTL timer
   └── Auto-delete on expiry

Error handling:
   └── Unknown Webhook (10015) → clear cache → retry from step 2
```

This approach uses a single webhook per channel regardless of how many characters or users are active simultaneously, eliminating accumulation issues.

---

## Help System

The `!help` command reads categories dynamically from the filesystem using `readdirSync`. Category folder names follow a naming convention that encodes the emoji to display:

```
[a|s]_emojiName_emojiId_categoryName
```

| Segment | Description |
|---------|-------------|
| `a` / `s` | Animated or static emoji |
| `emojiName` | Emoji name from Discord |
| `emojiId` | Emoji ID from Discord |
| `categoryName` | Display name of the category |

**Example:** `a_poyito_1486448094290641158_roleplay`

This allows adding a new command category by simply creating a folder — no code changes needed.

---

## Database Design

InterWorld uses **MongoDB** with **Mongoose**. Collections use references (`ObjectId`) rather than embedding full documents to keep individual records lightweight and avoid data duplication.

| Collection | MVP | Purpose |
|-----------|-----|---------|
| `users` | 1 | Registered users and global economic data |
| `characters` | 1 | All characters per user with health, social and economy data |
| `servers` | 1 | Per-server configuration and moderation data |
| `banks` | 2 | Bank institutions managing the virtual economy |
| `accounts` | 2 | Individual bank accounts per user |
| `items` | 3 | Global item catalog |
| `properties` | 3 | Global property catalog |
| `jobs` | 4 | Global job catalog |
| `guilds` | 5 | Per-server guild institutions |

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
Check webhook cache (key: guildId-channelId)
  ├── Cache hit (valid TTL) → send with character name/avatar
  │     └── On 10015 error → clear cache → retry
  ├── Cache miss → fetch Discord webhooks
  │     ├── Found "InterWorld" bot webhook → re-cache and send
  │     └── Not found → create new "InterWorld" webhook, cache, send
  └── Message delivered as character
```

---

### Design Principles

- Modular command system
- UI routing via encoded customIds
- Server-based configuration
- Separation between logic and transport layer (Discord)
- Progressive scalability (MVP-based development)

## Deployment

InterWorld is deployed on **Railway** with automatic deploys on push to the `main` branch. Environment variables are managed directly in Railway — never in the repository.

The development workflow uses a separate bot token and a dedicated test server to avoid interfering with the production instance.
