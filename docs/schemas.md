# Database Schemas — InterWorld

InterWorld uses **MongoDB** with **Mongoose**. All collections are designed to be lightweight at MVP 1 and progressively extended in later MVPs without breaking existing data.

---

## users

Stores registered InterWorld users and their economic data.

```js
{
  userid: String,           // Discord user ID
  balance: {
    currency: Number,       // Cash balance
    properties_value: Number
  },
  premium: {
    status: Boolean,
    level: String,
    subscription_end: Date
  },
  guilds: [{ guildid: ObjectId, role: String, contribution: Number }]
}
```

---

## characters

All characters created by a user. Each user has one document containing an array of characters.

```js
{
  userid: ObjectId,         // Reference to users._id
  chart_cant: Number,       // Total character count (max 15)
  characters: [{
    chartid: String,        // Unique character ID (IP-format: 3.123.456.789)
    nick: String,           // Roleplay invoker ("nick: message")
    name: String,
    icon: String,           // Avatar URL (hosted on Imgur)
    description: String,    // Max 300 chars
    lore: String,           // Max 1000 chars
    born: Date,
    servers: {
      count: Number,
      serverid: [String]    // Server IDs where character is active (max 8)
    },
    health: {
      status: String,       // Enum: healthy, injured, critical, sick, recovering, exhausted, unstable, dead, poisoned
      mental: Number,       // 0-100
      physical: Number,     // 0-100
      personal: Number      // 0-100
    },
    friends:       [{ friendid: String, status: Number }],
    relationships: [{ relationid: String, status: Number, couple: String, start: Date, childs: [...] }],
    items:         [{ itemid: ObjectId, quantity: Number }],           // ref: items (MVP 3)
    properties:    [{ propertyid: ObjectId, insurance: { has_insurance: Boolean, coverage_amount: Number } }], // ref: properties (MVP 3)
    guilds:        [{ guildid: ObjectId, role: String, contribution: Number }], // ref: guilds (MVP 5)
    jobs:          [{ jobid: ObjectId }],                              // ref: jobs (MVP 4)
    balance: {
      currency: Number,
      properties_value: Number
    },
    premium: {
      status: Boolean,
      level: String,
      subscription_end: Date
    }
  }]
}
```

---

## servers

Per-server configuration and moderation data.

```js
{
  serverid: String,         // Discord server ID
  prefix: String,           // Custom command prefix (default: "I!")
  lang: String,             // Bot language per server (default: "es") — MVP 7
  notifications: {
    active: Boolean,
    channel: String
  },
  reputation: {
    score: Number
  }
}
```

---

## banks

Bank institutions that manage the virtual economy. Introduced in MVP 2.

```js
{
  company: String,          // Owner company (default: "lexoStudio")
  bankcode: String,         // Auto-generated unique code: "lexoStudio.042026.1732"
  name: String,
  description: String,
  insurance: String,        // Enum: none, low, high
  insurance_amount: Number, // 0-10
  icon: String,
  images: [{ url: String }],
  quantity_users: Number,
  currency: String,
  deposit_limit: Number,    // Max amount per transaction (null = no limit)
  opening_deposit: Number,  // Required balance to open account (0 = free)
  balance: Number           // Total bank balance
}
```

---

## accounts

Individual bank accounts per user. Introduced in MVP 2.

```js
{
  userid: ObjectId,         // Reference to users._id (unique — one account per user)
  bankid: ObjectId,         // Reference to banks._id
  balance: Number,          // Account balance
  transactions: [{
    type: String,           // Enum: deposit, withdraw, transfer_in, transfer_out
    amount: Number,
    reference: ObjectId,    // Reference to users._id (for transfers)
    date: Date
  }]
}
```

---

## items *(MVP 3)*

Global item catalog. Items are created by the developer and referenced from user/character inventories.

```js
{
  name: String,
  description: String,
  icon: String,
  category: String,         // Enum: consumable, object, belonging
  value: Number,            // Price in currency
  effects: {
    health: {
      status: String,       // Overrides health status on use
      mental: Number,       // -100 to 100
      physical: Number,     // -100 to 100
      personal: Number      // -100 to 100
    }
  },
  available: Boolean,
  limited: Boolean,
  stock: Number             // null = unlimited
}
```

---

## properties *(MVP 3)*

Global property catalog. Properties are created by the developer and referenced from user/character inventories.

```js
{
  name: String,
  description: String,
  icon: String,
  type: String,             // Enum: house, business, land
  value: Number,            // Purchase price
  insurance_available: Boolean,
  insurance_cost: Number,
  max_coverage: Number,
  available: Boolean,
  limited: Boolean,
  stock: Number             // null = unlimited
}
```

---

## guilds *(MVP 5)*

Guild institutions per server. Created by users within a server.

```js
{
  serverid: String,
  name: String,
  description: String,
  icon: String,
  tag: String,              // Short tag max 5 chars, e.g. [TAG]
  ownerid: ObjectId,        // Reference to characters._id
  admins: [ObjectId],
  level: Number,            // 1-10
  experience: Number,
  balance: Number,
  items: [{ itemid: ObjectId, quantity: Number }],
  member_limit: Number,     // Increases with level
  members: [{
    characterid: ObjectId,
    role: String,
    contribution: Number,
    joined: Date
  }],
  open: Boolean,            // true = anyone can join
  active: Boolean
}
```

---

## jobs *(MVP 4)*

Global job catalog. Jobs are created by the developer and generate income for characters.

```js
{
  name: String,
  description: String,
  icon: String,
  category: String,         // e.g. "commerce", "services", "illegal"
  income_base: Number,      // Base income per cycle
  income_bonus: Number,     // Scalable bonus
  cycle: String,            // Enum: hourly, daily, weekly
  requirements: {
    min_balance: Number,
    premium_only: Boolean
  },
  available: Boolean,
  max_workers: Number       // null = no limit
}
```
