# MVP 2 — Economy Base

> Foundation of InterWorld's economic system. Introduces banks as institutions, user accounts, and basic financial operations.

**Status:** 🔄 In Progress — April 2026

---

## Objective

Implement the core banking system of InterWorld. Banks act as the main conductor of all money in the ecosystem. This MVP establishes the base before building commerce, financial services, and events on top of it.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!banklist` | View the list of available banks and join one | `banks`, `banco` | ✅ |
| `!balance` | View global balance and bank account info | `bal`, `money`, `dinero` | ✅ |
| `!balance bank` | View detailed info of your associated bank | — | ✅ |
| `!deposit [amount]` | Deposit money into your bank account | `depositar`, `dep` | ✅ |
| `!withdraw [amount]` | Withdraw money from your bank account | `retirar`, `wit` | ✅ |
| `!extenddeposit [limit]` | Extend the transaction limit by paying a fee | `extender`, `extdep` | ✅ |
| `!passmoney [@user] [amount]` | Give money to a user — Dev only | `givemoney`, `addmoney` | ✅ |
| `!stealmoney [@user] [amount]` | Remove money from a user — Dev only | `removemoney`, `takemoney` | ✅ |

---

## Features

### Bank System
- [x] Banks exist as institutions in the database
- [x] Users can open accounts in a bank
- [x] Each account has an individual balance
- [x] Deposit and withdraw operations logged in transaction history
- [x] Transaction limit per bank with option to extend
- [ ] Transfer between user account and character account *(next phase)*

### Account Management
- [x] Opening deposit requirement per bank (0 = free)
- [x] Transaction limit per bank (`deposit_limit`, null = no limit)
- [x] Full transaction history per account
- [x] Balance visible per user separately from character

### Bank Creation (Developer)
- [x] `!createbank` developer command with auto-generated `bankcode`
- [x] `bankcode` format: `company.MMYYYY.HHmm` (e.g. `lexoStudio.042026.1732`)

---

## Schemas Involved

- `users` — Global balance reference
- `banks` — Bank institutions (extended with `bankcode`, `deposit_limit`, `opening_deposit`)
- `accounts` *(new)* — Individual accounts linking users to a bank

---

## Completion Criteria

- [x] Banks exist and users can join one
- [x] Users have individual bank accounts
- [x] Deposit and withdraw work correctly with transaction logs
- [x] Transaction limit per bank enforced and extendable
- [x] Balance command shows correct data for user and bank
- [ ] Transfer between user account and character account
