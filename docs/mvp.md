# MVP Roadmap — InterWorld

InterWorld is developed in structured MVPs, each building on the previous without breaking existing functionality.

---

## MVP 1 — Users, Characters & Roleplay
**Status:** 🔄 In progress

Core identity system. Users register into InterWorld, create and manage characters, and interact through the webhook-based roleplay system.

**Key deliverables:**
- User registration
- Full character CRUD with interactive Discord UI
- Roleplay via webhook proxying (`nick: message`)
- Webhook cache system with TTL and restart recovery
- Character viewer with health, social and economy data
- Edit character fields via Discord modals
- Help command

---

## MVP 2 — Economy Base
**Status:** ⏳ Pending

Banking foundation. Banks exist as institutions, users and characters open accounts, and basic financial operations are enabled.

**Key deliverables:**
- Bank listing and account creation
- Deposit, withdrawal and transfer operations
- Transaction history per account
- Balance command for users and characters

---

## MVP 3 — Commerce
**Status:** ⏳ Pending

Marketplace layer. Items and properties enter the ecosystem, and users can trade freely.

**Key deliverables:**
- Item catalog and inventory management
- Property catalog with insurance support
- Buy, sell, gift, use and drop operations
- Property transfer between users

---

## MVP 4 — Financial Services
**Status:** ⏳ Pending

Advanced financial products through the bank. Introduces risk, interest rates and premium benefits.

**Key deliverables:**
- Credit lines and loans with repayment schedules
- Investment system with performance tracking
- Credit card issuance and management
- Premium subscription system with tangible benefits

---

## MVP 5 — Social
**Status:** ⏳ Pending

Social layer. Guilds, character relationships, server reputation and community moderation tools.

**Key deliverables:**
- Guild system per server
- Character relationships tracking
- Weekly server reputation voting
- Reports, warnings and appeals system
- Support ticket system

---

## MVP 6 — Events
**Status:** ⏳ Pending

Dynamic world engine. Automated random events that affect users, characters, properties and banks.

**Event categories:**
- User/character: robberies, assaults, health events, relationship changes
- Properties: theft, catastrophes, natural disaster losses
- Banks: robbery, inflation, deflation
- Global: extreme natural disasters, seasonal changes

---

## MVP 7 — Administration & Moderation
**Status:** ⏳ Pending

Full operator control. Channel configuration, logs, notifications and developer tools.

**Key deliverables:**
- Per-server channel configuration for all notification types
- Real-time movement and event logs
- Global developer notifications
- Block/unblock system for users and servers
- Server registration flow on bot join

---

## MVP 8 — Web Dashboard
**Status:** ⏳ Pending

External web application connecting to the same MongoDB database, providing a visual management interface.

**Key deliverables:**
- Discord OAuth2 authentication
- Role-based access: developer, admin, user
- Developer panel: global oversight and controls
- Admin panel: per-server management
- User panel: personal data and history
- Statistics and analytics
- Deployed on Railway as a separate service
