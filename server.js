const Aoijs = require("aoi.js")
var fs = require('fs')
const bot = new Aoijs.Bot({
    token: process.env['TOKEN'],
    prefix: "PREFIX"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
} 
bot.status({
  text: "DARKLON #CODE", // DURUMDA YAZACAĞI METİN
  type: "PLAYING", 
  status: "online/dnd/idle", // BOTUN DURUMU
  time: 12 // DURUM DEĞİŞME SÜRESİ
})
