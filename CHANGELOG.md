# Changelog

All notable changes to **InterWorld** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] — MVP 2 continued

### Changed — Architecture
- Components reorganized into subfolders by domain: `buttons/banks/`, `buttons/characters/`, `buttons/economy/`

### Added — Economy
- Bank institutions as global entities managed by the developer
- `accounts` schema linking users to a bank with balance and transaction history
- `!banklist` command — interactive bank browser with select menu, bank details and account opening flow
- `!balance` command — shows global user balance and bank account info (`!balance bank` for bank details)
- `!deposit` command — transfers money from global balance to bank account with limit validation
- `!withdraw` command — transfers money from bank account to global balance with limit validation
- `!extenddeposit` command — extends the transaction limit by paying a fee (5% of new limit)
- `!passmoney` developer command — grants money to a user's global balance
- `!stealmoney` developer command — removes money from a user's global balance

### Added — Schemas
- `banks` schema extended with `bankcode`, `deposit_limit` and `opening_deposit` fields
- `accounts` schema — individual bank accounts with balance and full transaction history
- `items` schema — global item catalog with categories, effects and stock control
- `properties` schema — global property catalog with types, insurance and availability
- `guilds` schema — per-server guild institutions with levels, resources and members
- `jobs` schema — global job catalog with income cycles and requirements

### Changed — Architecture
- Command structure reorganized into `src/types/commands/public/` and `src/types/commands/developers/`
- Webhook system refactored to use one webhook per channel instead of one per character, eliminating Discord's 15-webhook-per-channel limit issues
- `charts` command now filters characters by server before displaying the select menu

### Fixed
- Webhook cache now handles `Unknown Webhook` (error 10015) gracefully — recreates webhook on failure
- Character lookup in all modals and buttons now uses `chartid` instead of array index, preventing cross-server data leaks
- `charts` select menu now only shows characters registered in the current server

---

## [0.1.0] — MVP 1 Completed — April 2026

### Added — Core
- Discord bot foundation using discord.js v14
- MongoDB connection via Mongoose
- Dynamic command handler with prefix support
- Modular event system
- Per-server configurable prefix
- User registration system
- Character creation and management system

### Added — Roleplay
- Roleplay system based on `nick: message` format
- Character ownership validation before proxying
- Server-scoped character binding
- Automatic deletion of original message to maintain immersion
- Message proxying via Discord webhooks to represent characters

### Added — Webhooks
- Automatic webhook creation per channel (one webhook per channel, not per character)
- In-memory webhook cache to minimize API calls
- Webhook reuse when a valid one already exists
- Automatic cleanup of stale webhooks to stay within Discord's 15-per-channel limit
- Configurable webhook TTL (8 minutes)
- Recovery logic using Discord as source of truth after bot restarts

### Added — Interaction System
- Dynamic handler for buttons, menus, modals and reactions
- Structured `customId` convention for interaction routing
- Cross-user interference prevention on all interactive elements
- Character viewer with health, social and economy data (Components V2)
- Character edit via Discord modals (name, nickname, description, lore, icon)
- Character icon upload with Imgur integration for persistent public URLs
- Character deletion with confirmation button

### Added — Help System
- `!help` command with category browser via select menu
- Per-command detail view (aliases, permissions, cooldown, preview image)
- Category folder naming convention with emoji support: `[a|s]_emojiName_emojiId_category`

### Added — Infrastructure
- Environment variable system via `.env`
- Railway deployment configuration
- Startup and shutdown webhooks for runtime logging
- `functions/characters.js` utility with `getCharacter()` and `getCharacterIndex()` for server-scoped lookups

### Added — UX
- Informative embeds for errors and states
- Guided messages for unregistered users or users without characters
- Components V2 for rich interactive messages
