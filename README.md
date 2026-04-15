<div align="center">

<img src="assets/profile.gif" alt="InterWorld Profile" width="15%"/>

# InterWorld

**Advanced Discord bot for roleplay servers**

[![Discord](https://img.shields.io/badge/Add%20to%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/oauth2/authorize?client_id=1257775788208685187&permissions=8&integration_type=0&scope=bot)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org)

*"Your world, your rules, your story."*

</div>

---

## Overview

InterWorld is a fully-featured Discord bot designed for roleplay communities. It provides tools for character creation and management, an immersive roleplay experience via Discord webhooks, and a complete virtual economy system — all built to integrate seamlessly into any server theme.

The project follows a structured multi-MVP roadmap, from core identity systems to a full web dashboard, designed to scale progressively without breaking existing functionality.

---

## Key Features

### Roleplay System
- Character creation with custom name, nickname, icon, description and lore
- Immersive message proxying via Discord webhooks — messages appear as the character
- Webhook caching system with automatic TTL and cleanup to stay within Discord's limits
- Recovery logic after bot restarts using Discord as source of truth

### Character Management
- Full CRUD operations on characters via interactive Discord UI
- Character viewer with health stats, social data, economy and inventory
- Edit character fields through Discord modals
- Characters are server-scoped — one character can exist across multiple servers

### Economy *(in development)*
- Bank institutions with individual user and character accounts
- Deposits, withdrawals and transfers between user and character accounts
- Commerce system with items and properties
- Financial services: credit, loans, investments and premium subscriptions

### Administration
- Per-server prefix configuration
- Modular handler system for commands, events, menus, modals, buttons and reactions
- Developer-only commands and role-based access control

---

## Architecture

InterWorld is built with a fully modular architecture. Each component type (commands, events, menus, modals, buttons, reactions) has its own handler that loads files dynamically at startup.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for a detailed breakdown.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Language | JavaScript (ES2022) |
| Bot Framework | Discord.js v14 |
| Database | MongoDB + Mongoose |
| Hosting | Railway |
| Version Control | GitHub |

---

## Roadmap

InterWorld is developed in structured MVPs:

| MVP | Focus | Status |
|-----|-------|--------|
| MVP 1 | Users, Characters & Roleplay | ✅ Completed — April 2026 |
| MVP 2 | Economy Base (Banking) | ✅ Completed — April 2026 |
| MVP 3 | Commerce (Items & Properties) | 🔄 In progress |
| MVP 4 | Financial Services | ⏳ Pending |
| MVP 5 | Social (Guilds & Reputation) | ⏳ Pending |
| MVP 6 | Events (Dynamic World) | ⏳ Pending |
| MVP 7 | Administration & Moderation | ⏳ Pending |
| MVP 8 | Web Dashboard | ⏳ Pending |

See [docs/mvp.md](docs/mvp.md) for a detailed breakdown of each MVP.

---

## Documentation

| File | Description |
|------|-------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design and technical decisions |
| [docs/features.md](docs/features.md) | Detailed feature breakdown |
| [docs/schemas.md](docs/schemas.md) | Database schema documentation |
| [docs/mvp.md](docs/mvp.md) | MVP roadmap |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guidelines |

---

## ⚙️ Technical Architecture (Extract)

Below are simplified extracts of InterWorld's internal systems.
Sensitive logic and full implementations are intentionally omitted.

---

/**
 * Command detection system
 * Supports:
 * - Dynamic prefix per server
 * - Fallback prefix
 * - Bot mention (@bot command)
 */
async function handleMessage(message, client, prefix) {
    const prefixes = [prefix, 'I!'].filter(Boolean)

    // detect mention as prefix
    const mentionRegex = new RegExp(`^<@!?${client.user.id}>\\s+`)

    const used =
        prefixes.find(p => message.content.startsWith(p)) ||
        message.content.match(mentionRegex)?.[0]

    // if no valid prefix → not a command
    if (!used) return false

    const args = message.content
        .slice(used.length) // remove prefix or mention
        .trim()
        .split(/ +/)

    const commandName = args.shift()?.toLowerCase()

    // dynamic command resolution (name + aliases)
    const command =
        client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.alias?.includes(commandName))

    if (!command) return false

    await command.execute(message, args, client)

    return true
}

---

/**
 * Component routing system
 * CustomId structure:
 * type:system:userId:extraData
 */
function handleInteraction(interaction, client) {
    const [type, system, userId] = interaction.customId.split(':')

    // security: only the owner can use it
    if (userId && interaction.user.id !== userId) {
        return interaction.reply({ content: 'Not your interaction', ephemeral: true })
    }

    switch (type) {
        case 'button':
            return client.buttons.get(system)?.execute(interaction)

        case 'menu':
            return client.menus.get(system)?.execute(interaction)

        case 'modal':
            return client.modals.get(system)?.execute(interaction)
    }
}
---

/**
 * Example of controlled update in nested MongoDB structures
 */
function updateCharacterBalance(characterDoc, charId, amount) {
    const index = characterDoc.characters.findIndex(c => c.chartid === charId)
    if (index === -1) return null

    characterDoc.characters[index].balance.currency += amount

    // inform mongoose about deep changes
    characterDoc.markModified(`characters.${index}.balance.currency`)

    return characterDoc
}

---

## Add to Your Server

[![Add InterWorld](https://img.shields.io/badge/Add%20InterWorld%20to%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/oauth2/authorize?client_id=1257775788208685187&permissions=8&integration_type=0&scope=bot)

---

## License

All rights reserved. See [LICENSE.md](LICENSE.md) for details.

---

## Author

Built by **lexand** — [GitHub](https://github.com/leexand)

> This repository contains only the project documentation and architecture overview.
> The source code is maintained in a private repository.
