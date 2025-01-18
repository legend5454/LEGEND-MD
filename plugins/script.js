const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Mr.Legend*

> *LEGEND-MD REPO:*
*|* *https://github.com/legend5454/LEGEND-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb33GRMEVccONRVxUR2q*
*╰──────────────●●►*

> *➥POWERED BY: Mr.Legend*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391326900797@newsletter',
      newsletterName: "🇵🇰Legend-MD🔥",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝙻𝙴𝙶𝙴𝙽𝙳-𝙼𝙳',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/legend5454/LEGEND-MD" ,
thumbnailUrl: "https://qu.ax/WkggJ.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
