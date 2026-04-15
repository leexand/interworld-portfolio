# Changelog

All notable changes to **InterWorld** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] — MVP 3 prep

---

## [0.2.0] — MVP 2 Completed — April 2026

### Added — Economy
- Bank institutions as global entities managed by the developer
- `accounts` schema linking users to a bank with balance and transaction history
- `!banklist` command — interactive bank browser with select menu, bank details and account opening flow
- `!balance` command — shows global user balance, bank account info and server character balances (`!balance bank` for full bank details)
- `!deposit` command — transfers money from global balance to bank account with limit validation
- `!withdraw` command — transfers money from bank account to global balance with limit validation
- `!extenddeposit` command — extends the transaction limit by paying a fee (5% of new limit)
- `!chartransfer send <amount>` command — transfers money from bank account to a character via interactive select menu
- `!chartransfer get <amount>` command — withdraws money from a character back to the bank account
- `!passmoney` developer command — grants money to a user's global balance
- `!stealmoney` developer command — removes money from a user's global balance
- `chartransferSelect` menu handler — executes character transfers, logs `transfer_in` / `transfer_out` to transaction history, respects bank `deposit_limit`

### Added — Schemas
- `banks` schema extended with `bankcode`, `deposit_limit` and `opening_deposit` fields
- `accounts` schema — individual bank accounts with balance and full transaction history (`deposit`, `withdraw`, `transfer_in`, `transfer_out`)
- `items` schema — global item catalog with categories, effects and stock control
- `properties` schema — global property catalog with types, insurance and availability
- `guilds` schema — per-server guild institutions with levels, resources and members
- `jobs` schema — global job catalog with income cycles and requirements

### Changed — Architecture
- Components reorganized into subfolders by domain: `buttons/banks/`, `buttons/characters/`, `buttons/economy/`, `menus/banks/`, `menus/characters/`, `menus/economia/`
- Command structure reorganized into `src/types/commands/public/` and `src/types/commands/dev/`
- Prefix system now supports multiple prefixes simultaneously: server-configured prefix, `I!` as a global fallback, and bot mention (`@InterWorld`) — all resolved in a single regex pass before command dispatch
- Webhook system refactored to use one webhook per channel instead of one per character, eliminating Discord's 15-webhook-per-channel limit issues
- `charts` command now filters characters by server before displaying the select menu
- `characters` schema — replaced global `chart_cant` counter with `server_limits[]` array tracking character count per server independently, enabling correct per-server limits
- Character creation limit is now enforced per server: 6 characters without premium, 15 with premium

### Fixed
- Webhook cache now handles `Unknown Webhook` (error 10015) gracefully — recreates webhook on failure
- Character lookup in all modals and buttons now uses `chartid` instead of array index, preventing cross-server data leaks
- `charts` select menu now only shows characters registered in the current server
- `acceptDelete` now decrements `server_limits[server].count` instead of syncing the removed global `chart_cant`
- Character creation no longer blocked by unrelated servers — limit is now scoped to the server where the command is executed

### Known issues
- `getLimit()` in `chart.js` always returns `LIMIT_DEFAULT` (6) regardless of premium status — premium path returns the wrong constant and needs to be corrected to `LIMIT_PREMIUM`

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
