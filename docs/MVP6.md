# MVP 6 — Events

> InterWorld's dynamic engine. Automated and random events that affect users, characters, properties and the economy — adding realism and unpredictability to the ecosystem.

---

## Objective

Introduce the event system that makes InterWorld truly dynamic. Events are automatic processes triggered by the system that impact users, characters, properties and banks in different ways.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!executeevent [event]` | Manually trigger an internal event — Dev only | — | ⏳ |
| `!logevents` | Channel command to set the events log channel — Admin only | — | ⏳ |

---

## Features

### User & Character Events
- [ ] **Robbery** — Users or characters can be robbed, losing money or items
- [ ] **Assault/Murder** — Characters can be attacked, affecting health stats
- [ ] **Health events** — Illness, accidents or recovery that alter health values
- [ ] **Relationship changes** — Events that strengthen or damage relationships between characters

### Property Events
- [ ] **Property robbery** — Properties can be broken into and lose value or items
- [ ] **Catastrophes** — Fire, flood or other disasters can damage properties
- [ ] **Commerce events** — Property values fluctuate based on market activity
- [ ] **Natural disaster losses** — Uninsured properties suffer greater damage

### Bank Events
- [ ] **Bank robbery** — Affects all users linked to the robbed bank
- [ ] **Inflation** — Reduces the purchasing power of the currency
- [ ] **Deflation** — Increases purchasing power but reduces income

### Natural & Environmental Events
- [ ] **Extreme natural disasters** — Large-scale events affecting all servers linked to the same ecosystem
- [ ] **Seasonal changes** — Environmental events tied to the in-world calendar

### Premium Protection
- [ ] Premium users and characters have lower probability of being affected by negative events
- [ ] Insured properties receive coverage payouts when damaged

### Event Logging
- [ ] All events are logged per server in the designated events log channel
- [ ] Global events are logged in the InterWorld support server

---

## Schemas Involved

- `users` — Affected by robbery, health and economic events
- `characters` — Affected by all event types
- `banks` — Affected by bank-specific events
- `properties` — Affected by property events
- `servers` — Event logs and notifications

---

## Completion Criteria

- [ ] At least one event of each category is implemented and functional
- [ ] Events trigger automatically at random intervals
- [ ] Events can be triggered manually by developers
- [ ] Premium protection applies correctly during events
- [ ] Insurance coverage applies correctly during property events
- [ ] All events are logged in the appropriate channel

---

## Pending

- [ ] Event scheduling system designed
- [ ] Probability weights defined per event type
- [ ] Premium and insurance modifiers integrated
- [ ] All event handlers implemented
