import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['34603022140', 'πΎπ΅π² ππΎππ°π½πΈ', true],
  ['34603022140', 'πΎπ΅π² ππΎππ°π½πΈ', true],
  ['34603022140', 'πΎπ΅π² ππΎππ°π½πΈ', true],
]
global.suittag =['34603022140']
global.mods = []
global.prems = ['34603022140'], 
global.prems = ['34603022140'],
global.APIs = { 

  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.packname = 'πππππππ-ππππ-πππ'
global.author = 'Β©α΄?α΄-Κα΄α΄ α΄Ι΄ΙͺοΉβ'

global.vs = '1.10.90'
global.version = vs

global.gt = 'πππππππ-ππππ-ππποΈ'
global.hadesbot = gt

global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt

global.ig = 'https://www.instagram'
global.hadesig = ig

global.md = 'https://github.com/OFC-YOVANI/HATSUNE-MIKU.git'
global.hadesbot = md

global.nn = 'https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0'
global.nngrupo = nn

global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ'
global.nnngrupo = nnn

global.paypal = 'https://pay'
global.donar = paypal

global.rg = '*πΚα΄sα΄Κα΄α΄α΄α΄ α΄Ι΄α΄α΄Ι΄α΄Κα΄α΄α΄β¨*'
global.resultado = rg

global.ag = '*β οΈα΄α΄α΄ α΄Κα΄α΄Ι΄α΄Ιͺα΄β οΈ*'
global.advertencia = ag

global.iig = '*πΙͺΙ΄?α΄Κα΄α΄α΄Ιͺα΄Ι΄*β¨'
global.informacion = iig

global.fg = '*βΚα΄ sα΄Ι΄α΄Ιͺα΄α΄s sα΄ Κα΄ Ι’α΄Ι΄α΄Κα΄α΄α΄ α΄Ι΄ α΄ΚΚα΄Κ α΄ α΄α΄Κα΄ α΄ ΙͺΙ΄α΄α΄Ι΄α΄α΄Κβ*'
global.fallo = fg

global.mg = '*βα΄sα΄α΄ α΄α΄α΄α΄Ι΄α΄α΄ Κα΄ Κα΄ α΄sα΄α΄α΄ ΙͺΙ΄α΄α΄ΚΚα΄α΄α΄α΄α΄α΄Ι΄α΄α΄*'
global.mal = mg

global.eeg = '*π©Λ’α΅ α΄Ώα΄±α΄Ύα΄Όα΄Ώα΅α΄± α΄΄α΄¬ Λ’α΄΅α΄°α΄Ό α΄±α΄Ίβ±½α΄΅α΄¬α΄°α΄Όπ©*'
global.envio = eeg

global.eg = '*πΚα΄sα΄Κα΄α΄α΄α΄ α΄Ι΄α΄α΄Ι΄α΄Κα΄α΄α΄β¨*'
global.exito = eg

global.wm = 'πππππππ-ππππ-πππ\nΒ©α΄?α΄-Κα΄α΄ α΄Ι΄ΙͺοΉβ'
global.igfg = 'πππππππ-ππππ-πππ'
global.wait = 'β _Cargando..._\nβ°β°β°β±β±β±β±β±β±'

global.imagen1 = fs.readFileSync('./src/Menu2.jpg')
global.imagen4 = fs.readFileSync('./src/Menuxx.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Me.jpg')

global.mods = [] 

global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π',
      exp: 'πΉοΈ'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
 
