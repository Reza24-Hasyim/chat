const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6281318130024"]

global.help = {
Menu(pushname){
  return `Hai kontol ${pushname}

Saya adalah bot WhatsApp anonymous 👋 ketik .confess untuk memulai chat.
`
}
}
