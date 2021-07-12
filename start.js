require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.use(Telegraf.session())
bot.on('text', (ctx) => {
    ctx.session.counter = ctx.session.counter || 0
    ctx.session.counter++
    return ctx.reply(`Message counter:${ctx.session.counter}`)
  })
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()