# MVP 3 — Commerce

> InterWorld's marketplace. Users and characters can buy, sell and trade items and properties. The bank acts as intermediary and regulator of all transactions.

---

## Objective

Build the commerce layer on top of the banking foundation established in MVP 2. Introduce items, properties, and a marketplace where users can trade freely.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!shop` | View the store | — | ⏳ |
| `!buy [item] <amount>` | Buy an item from the store | — | ⏳ |
| `!sell [item] [price] <amount>` | Sell one or more items | — | ⏳ |
| `!use [item] <amount>` | Use or consume an item | — | ⏳ |
| `!drop [item] <amount>` | Discard an item | — | ⏳ |
| `!gift [@user] [item] <amount>` | Gift an item to another user | — | ⏳ |
| `!properlist` | View available properties for sale | — | ⏳ |
| `!propermelist` | View your own properties | — | ⏳ |
| `!properbuy [property]` | Buy a property | — | ⏳ |
| `!propersell [property] [price]` | Sell a property | — | ⏳ |
| `!changeproper [@user] [property]` | Transfer a property to another user | — | ⏳ |

---

## Features

### Item System
- [ ] Items exist in the database with name, description, category, value and quantity
- [ ] Users and characters have their own inventory
- [ ] Items can be bought, sold, gifted, used and dropped
- [ ] Transaction logged on every operation

### Property System
- [ ] Properties exist in the database with value and insurance support
- [ ] Users and characters can own properties
- [ ] Properties can be bought from the bank or from other users
- [ ] Properties can be sold back or transferred to other users
- [ ] Insurance system for properties

---

## Schemas Involved

- `users` — Inventory and properties reference
- `characters` — Inventory and properties reference
- `banks` — Acts as commerce intermediary
- `items` *(new)* — Item catalog
- `properties` *(new)* — Property catalog

---

## Completion Criteria

- [ ] Store exists and items can be browsed and purchased
- [ ] Items can be sold, gifted, used and dropped
- [ ] Properties can be listed, bought and sold
- [ ] Property transfer between users works
- [ ] All transactions are logged

---

## Pending

- [ ] `items` schema created
- [ ] `properties` schema created
- [ ] All commands implemented
