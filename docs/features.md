# Features — InterWorld

Detailed breakdown of InterWorld's current and planned features.

---

## Roleplay System

The core of InterWorld. Users write messages in the format `nick: text` and the bot:

1. Deletes the original message
2. Sends it through a Discord webhook configured with the character's name and avatar

This creates a fully immersive experience where messages appear to come directly from the character, not the user.

**Technical highlights:**
- Regex-based message detection with multiline support
- Character ownership and server binding validation before proxying
- Three-layer webhook strategy: local cache → Discord source of truth → create new
- Automatic webhook cleanup to respect Discord's 15-per-channel limit
- `allowedMentions` restriction to prevent `@everyone` and `@here` abuse

---

## Character System

Each user can have multiple characters, each with:

| Field | Description |
|-------|-------------|
| Name & Nickname | Display name and roleplay invoker |
| Icon | Character avatar URL |
| Description | Short bio (max 300 chars) |
| Lore | Extended backstory (max 1000 chars) |
| Health | Physical, mental and personal stats (0-100) |
| Relationships | Friends, partners and children with status tracking |
| Inventory | Items with quantities |
| Properties | Real estate with optional insurance |
| Guilds | Guild membership with role and contribution |
| Balance | Currency and property value |
| Premium | Subscription status and level |

Characters are **server-scoped** — the same character can be active in multiple servers simultaneously.

---

## Interactive UI

InterWorld uses Discord's native UI components for all interactions:

- **Select menus** — character selection and option navigation
- **Modals** — in-app forms for editing character fields
- **Buttons** — confirmations (e.g. delete character)
- **Components V2** — rich containers with sections, separators, media galleries and text displays

All interactive elements use a structured `customId` convention to route interactions correctly and prevent cross-user interference.

---

## Economy (MVP 2–4)

A full virtual economy simulation:

**Banking**
- Multiple bank institutions per ecosystem
- Individual accounts for users and characters
- Deposit, withdraw and transfer operations
- Transaction history

**Commerce**
- Item catalog with categories and values
- Property catalog with insurance support
- Marketplace for buying, selling and trading between users

**Financial Services**
- Credit lines with interest rates
- Loans with repayment schedules
- Investment system with performance tracking
- Credit card management
- Premium subscriptions with tangible in-world benefits

---

## Events System (MVP 6)

Automated random events that make the world feel alive:

- **Personal:** robberies, health incidents, relationship changes
- **Property:** theft, fire, flood, value fluctuations
- **Banking:** bank heists affecting all linked accounts, inflation, deflation
- **Global:** natural disasters spanning multiple servers

Premium users and insured properties receive protection modifiers during negative events.

---

## Administration (MVP 7)

Complete operator toolset:

- Per-server channel routing for logs, notifications, moderation and appeals
- Real-time logs for character/user activity, events and bank operations
- Developer global notification system
- Block/unblock system for users and servers
- Server reputation system with weekly voting

---

## Web Dashboard (MVP 8)

External React + Express application:

- Discord OAuth2 login
- Role-based access control (developer / admin / user)
- Full data visibility and management per role
- Statistics and analytics
- Deployed independently from the bot on Railway
