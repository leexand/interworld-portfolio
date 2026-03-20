# MVP 4 — Financial Services

> Advanced financial layer. Users gain access to credit, loans, investments, credit cards and premium subscriptions — all managed through their associated bank.

---

## Objective

Expand the banking system from MVP 2 with advanced financial products. This MVP introduces risk, interest rates and premium benefits, making the economy more dynamic and realistic.

---

## Commands

| Command | Description | Alias | Status |
|---------|-------------|-------|--------|
| `!credit` | Validate and/or apply for a credit line | — | ⏳ |
| `!loans` | Validate and/or request a loan | — | ⏳ |
| `!investments` | Invest money through your bank | — | ⏳ |
| `!creditcard` | Apply for a credit card | — | ⏳ |
| `!viewloans` | View your active loan information | — | ⏳ |
| `!viewcredit` | View your active credit information | — | ⏳ |
| `!viewinvestments` | View your active investments | — | ⏳ |
| `!viewbank` | View details of your associated bank | — | ⏳ |
| `!premium` | View premium plans, benefits and pricing | — | ⏳ |

---

## Features

### Credit & Loans
- [ ] Users can apply for credit lines with interest rates
- [ ] Users can request loans with defined repayment schedules
- [ ] Payment history tracked per credit and loan
- [ ] Missed payments have consequences on the user's financial status

### Investments
- [ ] Users can invest money and earn returns over time
- [ ] Investment performance tracked with history
- [ ] Returns depend on market conditions within InterWorld

### Credit Cards
- [ ] Users can apply for a credit card linked to their bank account
- [ ] Transactions tracked per card
- [ ] Credit limit and balance due managed per card

### Premium
- [ ] Premium plans exist with different levels and benefits
- [ ] Benefits include: lower chance of being robbed, better event outcomes, property protection, exclusive discounts
- [ ] Premium subscriptions have an expiration date
- [ ] Premium available for both users and characters

---

## Schemas Involved

- `users` — Premium, jobs reference
- `characters` — Premium reference
- `banks` — Financial products provider
- `accounts` — Credit, loans, investments and card data

---

## Completion Criteria

- [ ] Users can apply for and manage credit lines
- [ ] Users can request and repay loans
- [ ] Investments exist and generate returns over time
- [ ] Credit cards can be issued and used
- [ ] Premium plans are visible and purchasable
- [ ] Premium benefits apply correctly to users and characters

---

## Pending

- [ ] All financial product schemas finalized in `accounts`
- [ ] Premium logic integrated with users and characters
- [ ] All commands implemented
