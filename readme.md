# Query parser middleware for <a href="https://telegraf.js.org/">Telegraf</a>

## Installation

```js
$ npm install telegraf-query-parser
```

## Example

```js
const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(require('telegraf-query-parser'))

// When user sends */start?id=13881466*
bot.start(ctx => {
  console.log(ctx.query) // returns { 'id': '13881466' }
  ctx.reply(`You were invited by user ${ctx.query.id}`)
})

bot.startPolling() 
```

*//TODO: Write examples of using query parser with inline keyboard*