# MVP 2 — Economy Base

> Foundation of InterWorld's economic system. Introduces banks as institutions, user accounts, and basic financial operations.

**Status:** ✅ Completed — April 2026

---

## Objective

Implement the core banking system of InterWorld. Banks act as the main conductor of all money in the ecosystem. This MVP establishes the base before building commerce, financial services, and events on top of it.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!banklist` | View the list of available banks and join one | `banks`, `banco` | ✅ |
| `!balance` | View global balance, bank account and character balances | `bal`, `money`, `dinero` | ✅ |
| `!balance bank` | View detailed info of your associated bank | — | ✅ |
| `!deposit [amount]` | Deposit money into your bank account | `depositar`, `dep` | ✅ |
| `!withdraw [amount]` | Withdraw money from your bank account | `retirar`, `wit` | ✅ |
| `!extenddeposit [limit]` | Extend the transaction limit by paying a fee | `extender`, `extdep` | ✅ |
| `!chartransfer send [amount]` | Transfer money from bank account to a character | `ctransfer`, `chartr` | ✅ |
| `!chartransfer get [amount]` | Withdraw money from a character to bank account | `ctransfer`, `chartr` | ✅ |
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
- [x] Transfer between user account and character account

### Account Management
- [x] Opening deposit requirement per bank (0 = free)
- [x] Transaction limit per bank (`deposit_limit`, null = no limit)
- [x] Full transaction history per account (`deposit`, `withdraw`, `transfer_in`, `transfer_out`)
- [x] Balance visible per user separately from character

### Bank Creation (Developer)
- [x] `!createbank` developer command with auto-generated `bankcode`
- [x] `bankcode` format: `company.MMYYYY.HHmm` (e.g. `lexoStudio.042026.1732`)

---

## New Files (Transfer System)

| File | Description |
|------|-------------|
| `src/types/commands/public/.../chartransfer.js` | Command — resolves direction and amount, shows character selector |
| `src/components/menus/chartransferSelect.js` | Menu handler — executes the transfer on character selection |
| `src/types/commands/public/.../balance.js` | Updated — now shows server character balances in `!balance` |

---

## Schemas Involved

- `users` — Global balance reference
- `banks` — Bank institutions (extended with `bankcode`, `deposit_limit`, `opening_deposit`)
- `accounts` — Individual accounts linking users to a bank (with `transfer_in` / `transfer_out` transaction types)
- `characters` — `balance.currency` updated on character transfers

---

## Completion Criteria

- [x] Banks exist and users can join one
- [x] Users have individual bank accounts
- [x] Deposit and withdraw work correctly with transaction logs
- [x] Transaction limit per bank enforced and extendable
- [x] Balance command shows correct data for user, bank and characters
- [x] Transfer between user account and character account
