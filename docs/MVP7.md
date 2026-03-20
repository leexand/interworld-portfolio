# MVP 7 — Administration & Moderation

> InterWorld's control layer. Full admin tools for server management, developer commands, logs, notifications and moderation — giving operators complete oversight of the ecosystem.

---

## Objective

Provide server administrators and InterWorld developers with the tools to manage, monitor and moderate the entire ecosystem. This MVP completes the bot's feature set before the web dashboard.

---

## Commands

### Administration
| Command | Description | Status |
|---------|-------------|--------|
| `!changename` | Change the bot's display name in the server | ⏳ |
| `!changeprefix` | Change the bot's prefix for the server | ✅ |
| `!rules` | Set the channel for InterWorld rules (global and local) | ⏳ |
| `!notifyalertsdevs` | Set the channel for developer notifications | ⏳ |
| `!notifyalerts` | Set the channel for global bot notifications | ⏳ |
| `!supporttickets` | Set the channel for developer/admin support tickets | ⏳ |
| `!servertickets` | Set the channel for server-level tickets | ⏳ |
| `!serverappeals` | Set the channel for appeals (global and local) | ⏳ |
| `!reputation` | Set the channel for server reputation points | ⏳ |
| `!adminmod` | Set the channel for admin report/warn notifications | ⏳ |
| `!usermod` | Set the channel for user-to-user report alerts | ⏳ |
| `!logevents` | Set the channel for event logs | ⏳ |
| `!logs` | Set the channel for user/character movement logs | ⏳ |
| `!report [@user]` | Report a user — local and global | ⏳ |
| `!warn [@user]` | Warn a user — local and global | ⏳ |

### Developer
| Command | Description | Status |
|---------|-------------|--------|
| `!globallogs` | Set the channel for global bot movement logs — Dev only | ⏳ |
| `!notifies` | Send notifications to all servers using InterWorld — Dev only | ⏳ |
| `!executeevent` | Manually trigger an internal event — Dev only | ⏳ |
| `!iblock [@user/server]` | Block a user or server from using the bot — Dev only | ⏳ |
| `!uniblock [@user/server]` | Unblock a user or server — Dev only | ⏳ |
| `!logbank` | Set the channel for bank activity logs — Dev only | ⏳ |

---

## Features

### Channel Configuration
- [ ] Admins can assign dedicated channels for each type of notification and log
- [ ] Configuration stored per server in the `servers` collection

### Logs
- [ ] Movement logs: character creations, edits, deletions, purchases, sales
- [ ] Event logs: all triggered events per server
- [ ] Bank logs: all bank transactions and events
- [ ] Global logs: new users, new servers, new characters — visible to devs only

### Notifications
- [ ] Developers can send global notifications to all servers
- [ ] Servers receive alerts for global events and system updates
- [ ] Notifications delivered to the configured channel per server

### Moderation Tools
- [ ] Reports can be submitted locally (server) or globally (InterWorld-wide)
- [ ] Warnings are issued by admins and logged
- [ ] Developer block/unblock system for users and servers
- [ ] Sanction history visible to developers and admins

### Server Registration
- [ ] When InterWorld joins a server, admins must accept terms and conditions
- [ ] Server is registered in the database upon acceptance
- [ ] Server participates in the global reputation and events system after registration

---

## Schemas Involved

- `servers` — Channel configuration, logs, notifications, sanctions
- `users` — Block status, warn history

---

## Completion Criteria

- [ ] All channel configuration commands work correctly
- [ ] Logs are delivered to the correct channels in real time
- [ ] Developer notification system is functional
- [ ] Block/unblock system works for users and servers
- [ ] Server registration flow works on bot join
- [ ] All admin and developer commands implemented

---

## Pending

- [ ] Server registration flow on `guildCreate` event
- [ ] All channel config commands implemented
- [ ] Global log system implemented for developers
- [ ] Block system implemented
