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
  jobs:       [{ jobid: ObjectId }],
  properties: [{ propertyid: ObjectId, insurance: { has_insurance: Boolean, coverage_amount: Number } }],
  items:      [{ itemid: ObjectId, quantity: Number }],
  guilds:     [{ guildid: ObjectId, role: String, contribution: Number }]
}
```

---

## characters

All characters created by a user. Each user has one document containing an array of characters.

```js
{
  userid: ObjectId,         // Reference to users._id
  editors: [{ type: string }],         // Discord IDs with editing and usage access 
  chart_cant: Number,       // Total character count
  characters: [{
    chartid: String,        // Unique character ID
    nick: String,           // Roleplay invoker (used as "nick: message")
    name: String,
    icon: String,           // Avatar URL
    description: String,
    lore: String,
    born: Date,
    servers: {
      count: Number,
      serverid: [String]    // List of server IDs where character is active
    },
    health: {
      status: String,       // Enum: healthy, injured, critical, sick, etc.
      mental: Number,       // 0-100
      physical: Number,     // 0-100
      personal: Number      // 0-100
    },
    friends:       [{ friendid: String, status: Number }],
    relationships: [{ relationid: String, status: Number, couple: String, start: Date, childs: [...] }],
    items:         [{ itemid: ObjectId, quantity: Number }],
    properties:    [{ propertyid: ObjectId, insurance: { has_insurance: Boolean, coverage_amount: Number } }],
    guilds:        [{ guildid: ObjectId, role: String, contribution: Number }],
    jobs:          [{ jobid: ObjectId }],
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

Per-server configuration, reputation and moderation data.

```js
{
  serverid: String,         // Discord server ID
  prefix: String,           // Custom command prefix (default: "I!")
  notifications: {
    active: Boolean,
    channel: String
  },
  status: String,
  reputation: {
    score: Number,
    comments: [{ user_id: String, comment: String, date: Date }]
  },
  restrictions: [{ restriction: String, reason: String, timeout: Date }],
  appeals:      [{ user_id: String, username: String, appeal: String, created: Date }],
  reports:      [{ user_id: String, username: String, report: String, staff: String, created: Date }],
  warns:        [{ user_id: String, username: String, reason: String, staff: String, created: Date }]
}
```

---

## banks

Bank institutions that manage the virtual economy. Introduced in MVP 2.

```js
{
  company: String,
  name: String,
  description: String,
  insurance: String,        // Enum: none, low, high
  insurance_amount: Number, // 0-10
  icon: String,
  images: [{ url: String }],
  quantity_users: Number,
  currency: String,
  balance: Number
}
```

---

## Future Collections (MVP 3+)

| Collection | MVP | Purpose |
|-----------|-----|---------|
| `accounts` | 2 | Individual bank accounts per user/character |
| `items` | 3 | Item catalog |
| `properties` | 3 | Property catalog |
| `guilds` | 5 | Guild institutions per server |
