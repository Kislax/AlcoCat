require('dotenv').config()
const phrase = require("./randomPhrase.json")
const { Telegraf } = require('telegraf')
var express = require('express');
var packageInfo = require('./package.json');

const bot = new Telegraf(process.env.BOT_TOKEN, { username: 'AlcoNahuibot' })
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
})
bot.start((ctx) => ctx.reply('Нехуй думать что ты самый умный'))
bot.help((ctx) => ctx.reply('да да ХЕЛП, помогите слабаку..'))
bot.on('sticker', (ctx) => {
    if (ctx.message.message_id % 3 === 0) {
        return ctx.reply('💩')
    }
})
bot.use(Telegraf.session())
bot.command('joke', (ctx) => ctx.reply(`${phrase.to[getRandomIntInclusive(0, phrase.to.length - 1)]}`))
bot.command('about', (ctx) => ctx.reply(`Хочу пива и спать`))
bot.hears('Алкокот привет', (ctx) => {
    if (ctx.message.message_id % 5 === 0) {
        return ctx.reply(`Мне как — то по**й на твой рост, вес, возраст. Главное, чтобы человек был хороший.`)
    }
    if (ctx.message.message_id % 2 === 0) {
        return ctx.reply(`Хай пес`)
    }
    return ctx.reply(`Да вы заебали!`)
})
bot.hears('АлкоКОТ покажи свое лучше фото', (ctx) => {
    ctx.replyWithPhoto({
        url: 'https://www.zastavki.com/pictures/640x480/2015/Fantasy_Cat_with_gun_mounted_on_a_unicorn_094784_29.jpg',
        filename: 'asd.jpg'
    })
})

bot.on('text', (ctx) => {
    let messageText = ctx.message.text.toLowerCase(),
        authorName = ctx.message.from.first_name,
        authorLastName = ctx.message.from.first_name,
        authorId = ctx.message.from.id,
        chatId = ctx.message.chat.id,
        
    
    // бойцы -461579624

    if ( chatId === -461579624){
        // Олег малег
        if ( authorId === 1313867832) {
            if (ctx.message.message_id % 7 === 0) {
                return ctx.reply(` ${authorName}, Как жизнь?`)
            }
            if (ctx.message.message_id % 10 === 0) {
                return ctx.reply(`ты хули не работаешь?`)
            }
            if (ctx.message.message_id % 5 === 0) {
                return ctx.reply(` ${authorName}, Когда на шашлыки? `)
            }
            if (ctx.message.message_id % 30 === 0) {
                return ctx.reply(` ${authorName}, ты уволен! :) `)
            }
            if (ctx.message.message_id % 11 === 0) {
                return ctx.reply(` ${authorName}, я тебе премию дам, хорошую... :) `)
            }
        }

        // Рома Яниев
        if ( authorId === 1087702713) {
            if (ctx.message.message_id % 3 === 0) {
                return ctx.reply(` ${authorName}, че по шифровальщикам?`)
            }
            if (ctx.message.message_id % 20 === 0) {
                return ctx.reply(`ты хули не работаешь?`)
            }
            if (ctx.message.message_id % 5 === 0) {
                return ctx.reply(` ${authorName}, не хочешь вернуться в БА?`)
            }
            if (ctx.message.message_id % 10 === 0) {
                return ctx.reply(` ${authorName}, че по видеомониторингу? :) `)
            }
        }

        // Стас 
        if ( authorId === 783472414) {
            if (ctx.message.message_id % 3 === 0) {
                return ctx.reply(` ${authorName}, со фласком разобрался??`)
            }
            if (ctx.message.message_id % 5 === 0) {
                return ctx.reply(` ${authorName}, не хочешь вернуться в БА?`)
            }
            if (ctx.message.message_id % 10 === 0) {
                return ctx.reply(` ${authorName}, как там видеомониторинг? :) `)
            }
        }
    }
    
    // алкаши -571851178
    if ( chatId === -571851178){    
           // Дима Федюнин
        if (authorId === 322914815) {
            if (ctx.message.message_id % 6 === 0) {
                return ctx.reply(`Нюхай бебру)))`)
            }
            if (ctx.message.message_id % 4 === 0) {
                return ctx.reply(` ${authorName}, ты все выебываешься? `)
            }
            if (ctx.message.message_id % 7 === 0) {
                return ctx.reply(` ${authorName}, Как жизнь?`)
            }
            if (ctx.message.message_id % 20 === 0) {
                return ctx.reply(`ты хули не работаешь?`)
            }
        }

        // Вася Эва
        if (authorId === 322914815) {
            if (ctx.message.message_id % 3 === 0) {
                return ctx.reply(`${authorName} сорри, майонеза нет`)
            }
            if (ctx.message.message_id % 6 === 0) {
                return ctx.reply(` ${authorName}, Тебя бабка снизу все ждет`)
            }
            if (ctx.message.message_id % 7 === 0) {
                return ctx.reply(` ${authorName}, Вискарик будешь? `)
            }
        }
        
        // Эва
        if (authorId === 205169612) {
            if (ctx.message.message_id % 10 === 0) {
                return ctx.reply(`${authorName}, тебе бухло разогреть?`)
            }
        }
    }
    if (ctx.message.message_id % 23 === 0) {
            return ctx.reply(` ${authorName}, ты все выебываешься? `)
    }
    if (ctx.message.message_id % 12 === 0) {
        return ctx.reply(`${phrase.to[getRandomIntInclusive(0, phrase.to.length - 1)]}`)
    }
    if (ctx.message.message_id % 15 === 0) {
        return ctx.reply(`${messageText.split(" ")[0]} для питухов!`)
    }
    
    // балтавтоматика
    if ((messageText.includes('балт') && messageText.includes('болт')) || messageText.includes('автомат')) {
        if (messageText.includes('девиз') || messageText.includes('Главное')) {
            return ctx.reply(`Работает, не троЖ!`)
        }
        if (messageText.includes('кто ')) {
            return ctx.reply(`${authorName} ты еще не стал техдиром в БА?`)
        }
        return ctx.reply(`Олег малег`)
    }
    
    // Алкокот
    if (messageText.includes('алкокот') || (messageText.includes('алк') && (messageText.includes('кот')))) {
        if (messageText.includes('привет') || messageText.includes('хай') || messageText.includes('дорова') || messageText.includes('даров')) {
            return ctx.reply(`${authorName} дарова!`)
        }
        if ((messageText.includes('пошел') && messageText.includes('хуй')) || (messageText.includes('гондон') || messageText.includes('тормоз') || messageText.includes('говн'))) {
            return ctx.reply(`${authorName} ты щас пиздюлей получишь!`)
        }
        if ((messageText.includes('как') && messageText.includes('дела') || messageText.includes('жизнь') || messageText.includes('ты')) || (messageText.includes('хай') || messageText.includes('дорова') || messageText.includes('даров'))) {
            return ctx.reply(`Ахуенно бля, ${authorName} ты как?`)
        }
        if ((messageText.includes('проси') && messageText.includes('прощения')) || messageText.includes('извин') || messageText.includes('извен')) {
            return ctx.reply(`${authorName} все свои замечания и претензии в мой адрес, запишите на листочек! Сверните в трубочку… И засуньте себе в ж*пу!!!`)
        }
        return ctx.reply(`че нада?`)
    }
})

bot.launch()

var app = express();

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version, status: 'сервис работает' });
});

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});

setInterval(() => {
    http.get("https://alcocat.herokuapp.com/", (res) => { })
}, 20 * 60 * 1000)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
