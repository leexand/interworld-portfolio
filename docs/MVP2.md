# MVP 2 — Economy Base

> Foundation of InterWorld's economic system. Introduces banks as institutions, user and character accounts, and basic financial operations (deposit, withdraw, transfers).

---

## Objective

Implement the core banking system of InterWorld. Banks act as the main conductor of all money in the ecosystem. This MVP establishes the base before building commerce, financial services, and events on top of it.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!banklist` | View the list of available banks and join one | — | ⏳ |
| `!balance` | View current cash balance and property value of a user/character | — | ⏳ |
| `!deposit [amount]` | Deposit money into your bank account | — | ⏳ |
| `!withdraw [amount]` | Withdraw money from your bank account | — | ⏳ |
| `!passmoney [@user] [amount]` | Give money to a user — Dev/Admin only | — | ⏳ |
| `!stealmoney [@user] [amount]` | Remove money from a user — Dev/Admin only | — | ⏳ |
| `!extenddeposit` | Extend the deposit limit of your bank account | — | ⏳ |

---

## Features

### Bank System
- [ ] Banks exist as institutions in the database
- [ ] Users and characters can open accounts in a bank
- [ ] Each account has an individual balance
- [ ] Deposit and withdraw operations are logged in transaction history
- [ ] Transfer between user account and character account

### Account Management
- [ ] Initial deposit limit with option to extend by paying
- [ ] Transaction history per account
- [ ] Balance visible per user and per character separately

---

## Schemas Involved

- `users` — Balance and account reference
- `characters` — Character balance and account reference
- `banks` — Bank institutions
- `accounts` *(new)* — Individual accounts linking users/characters to a bank

---

## Completion Criteria

- [ ] Banks exist and users can join one
- [ ] Users and characters each have their own account
- [ ] Deposit and withdraw work correctly with transaction logs
- [ ] Transfer between user and character account works
- [ ] Balance command shows correct data for user and character

---

## Pending

- [ ] `banks` schema finalized
- [ ] `accounts` schema created
- [ ] All commands implemented
