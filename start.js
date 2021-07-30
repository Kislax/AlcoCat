require('dotenv').config()
const phrase = require("./randomPhrase.json")
const { Telegraf } = require('telegraf')
var express = require('express');
var packageInfo = require('./package.json');

const bot = new Telegraf(process.env.BOT_TOKEN, {username: 'AlcoNahuibot'})
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
})
bot.start((ctx) => ctx.reply('Нехуй думать что ты самый умный'))
bot.help((ctx) => ctx.reply('да да ХЕЛП, помогите слабаку..'))
bot.on('sticker', (ctx) => {
    if (ctx.message.message_id % 3 === 0){
        return ctx.reply('💩')
    }
})
bot.use(Telegraf.session())
bot.command('joke', (ctx) => ctx.reply(`${phrase.to[getRandomIntInclusive(0,phrase.to.length-1)]}`))
bot.command('about', (ctx) => ctx.reply(`Хочу пива и спать`))
bot.hears('Алкокот привет', (ctx) => {
    if (ctx.message.message_id % 5 === 0){
        return ctx.reply(`Мне как — то по**й на твой рост, вес, возраст. Главное, чтобы человек был хороший.`)
    }
    if (ctx.message.message_id % 2 === 0){
        return ctx.reply(`Хай пес`)
    }
    return ctx.reply(`Да вы заебали!`)
})
bot.hears('АлкоКОТ пошел нахуй', (ctx) => {
    return ctx.reply(`я не понял, ты быканул что-ли??`)
})
bot.hears('АлкоКОТ извинись', (ctx) => {
    return ctx.reply(`Все свои замечания и претензии в мой адрес, запишите на листочек! Сверните в трубочку… И засуньте себе в ж*пу!!!`)
})
bot.hears('АлкоКОТ покажи свое лучше фото', (ctx) => {
    ctx.replyWithPhoto({
        url: 'https://www.zastavki.com/pictures/640x480/2015/Fantasy_Cat_with_gun_mounted_on_a_unicorn_094784_29.jpg',
        filename: 'asd.jpg'
    })
})

bot.on('text', (ctx) => {
    if (ctx.message.message_id % 12 === 0){
        return ctx.reply(`${phrase.to[getRandomIntInclusive(0,phrase.to.length-1)]}`)
    }
})


bot.launch()

var app = express();

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version, status: 'сервис работает' });
});

var server = app.listen(process.env.PORT  || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});

setInterval(() => {
  http.get("http://https://alcocat.herokuapp.com/", (res) => {})
}, 20 * 60 * 1000)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
