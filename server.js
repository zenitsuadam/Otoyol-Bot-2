const Aoijs = require("aoi.js")
var fs = require('fs')
const bot = new Aoijs.Bot({
    token: process.env['TOKEN'],
    prefix: "yol!"
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
  text: "hiçbir şey", // DURUMDA YAZACAĞI METİN
  type: "OYNUYOR", 
  status: "online/dnd/idle", // BOTUN DURUMU
})
