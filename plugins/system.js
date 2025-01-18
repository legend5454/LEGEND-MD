const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*╭──────────●●►*
*𝗗𝗥𝗢𝗩𝗘-𝗠𝗗 𝐔𝐏𝐓𝐈𝐌𝐄 𝐋𝐈𝐒𝐓↷*

*_𝐔𝐏𝐓𝐈𝐌𝐄:➠_*  ${𝐫𝐮𝐧𝐭𝐢𝐦𝐞(process.uptime())}

*_𝐑𝐀𝐌 𝐔𝐒𝐀𝐆𝐄:➠_* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*_𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄:➠_* ${𝐨𝐬.𝐡𝐨𝐬𝐭𝐧𝐚𝐦𝐞()}

*_𝐎𝐖𝐍𝐄𝐑:➠_* *𝑭𝒂𝒓𝒉𝒂𝒏*
*╰──────────●●►*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
