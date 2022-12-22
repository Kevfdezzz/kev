let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Este comando busca códigos postales por ciudad/búsqueda*\n\ncontoh:\n${usedPrefix + command} Lamongan`
    let res = await fetch(global.API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provincia: ${v.province}\nciudad: ${v.city}\nDistricto: ${v.subdistrict}\nUrbanizacion: ${v.urban}\ncodigo Postal: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['kodepos <kota>']
handler.tags = ['tools']
handler.command = /^kodepos$/i

handler.limit = true

module.exports = handler
