# MVP 8 — Web Dashboard

> InterWorld's administration panel. A separate web application that gives administrators and developers a visual interface to manage the entire ecosystem.

---

## Objective

Build an external web dashboard that connects to the same MongoDB database used by the bot, providing a visual management interface for users, characters, servers, economy and moderation — without touching the bot's codebase.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express (or Fastify) |
| Frontend | To be defined (React recommended) |
| Auth | Discord OAuth2 |
| Database | MongoDB Atlas (shared with the bot) |
| Hosting | Railway (separate service from the bot) |
| Repo | Separate GitHub repository |

---

## Features

### Authentication
- [ ] Login with Discord OAuth2
- [ ] Role-based access: Developer, Admin, User
- [ ] Session management with JWT or cookies
- [ ] HTTPS enforced
- [ ] Rate limiting on all routes

### Developer Panel
- [ ] View all registered servers
- [ ] View all registered users
- [ ] View global logs in real time
- [ ] Send global notifications to all servers
- [ ] Block/unblock users and servers
- [ ] Trigger events manually
- [ ] View bank logs

### Admin Panel
- [ ] View and manage users in their server
- [ ] View character list per user
- [ ] View server reputation and comments
- [ ] View and manage reports and warnings
- [ ] Manage server configuration (channels, prefix)
- [ ] View server event and movement logs

### User Panel
- [ ] View own profile and characters
- [ ] View balance and transaction history
- [ ] View owned properties and items
- [ ] View active loans, credits and investments
- [ ] Submit appeals and tickets

### Statistics
- [ ] Active users per server
- [ ] Most active characters
- [ ] Economy metrics (total currency in circulation, bank balances)
- [ ] Event frequency and impact charts

---

## Security

- [ ] All API routes protected with authentication middleware
- [ ] No sensitive data exposed in API responses
- [ ] Input validation on all endpoints
- [ ] CSRF protection
- [ ] XSS prevention

---

## Schemas Involved

All existing schemas — the dashboard is read/write access to the same database used by the bot.

---

## Completion Criteria

- [ ] Discord OAuth2 login works correctly
- [ ] Role-based access control is enforced
- [ ] Developer panel shows global data and controls
- [ ] Admin panel allows server management
- [ ] User panel shows personal data
- [ ] Dashboard deployed on Railway as a separate service
- [ ] Bot and dashboard share the same MongoDB without conflicts

---

## Pending

- [ ] Repository created separately from the bot
- [ ] Express/Fastify server set up
- [ ] Discord OAuth2 configured
- [ ] Frontend framework chosen and set up
- [ ] All panels designed and implemented
