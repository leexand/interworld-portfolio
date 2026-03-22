# Changelog

All notable changes to **InterWorld** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.1.0] — MVP 1 Initial

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
- Automatic webhook creation per character
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
- Character edit via Discord modals (name, nickname, description, lore)
- Character deletion with confirmation button

### Added — Infrastructure
- Environment variable system via `.env`
- Railway deployment configuration
- Startup webhook for runtime logging (Node.js version, discord.js version, uptime)

### Added — UX
- Informative embeds for errors and states
- Guided messages for unregistered users or users without characters
- Components V2 for rich interactive messages
