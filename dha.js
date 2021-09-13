const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const crypto = require('crypto')  
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const imageToBase64 = require('image-to-base64');
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const { validmove, setGame } = require("./lib/tictactoe");
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const hx = require('hxz-api')

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const game = require("./lib/game");
const { mess } = require('./message/mess')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { smsg } = require('./lib/simple')
const { msgFilter } = require('./lib/antispam')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')

hit_today = []
banChats = true
antitrol = true 
bugc = true

//***********»GAME«************\\
let buriq = []
let mtk = []
let ckl = []
let tebakbendera = []
//**********•LETNYA•*************\\
let {    
    gamewaktu,
} = require('./database/settings')


fake = 'RIU OWNER'
cr = '@Riu'
textnye = '☭UNI SOVIET☭\n'

let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antiyoutube = JSON.parse(fs.readFileSync('./database/antiyoutube.json'));
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let afk = JSON.parse(fs.readFileSync('./database/afk.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let SJ1 = JSON.parse(fs.readFileSync('./database/Star1.json'))
let antivo = JSON.parse(fs.readFileSync("./database/rioantivo.json"))
let SJ2 = JSON.parse(fs.readFileSync('./database/Star2.json'))
let SJ3 = JSON.parse(fs.readFileSync('./database/Star3.json'))
let SJ4 = JSON.parse(fs.readFileSync('./database/Star4.json'))
let SJ5 = JSON.parse(fs.readFileSync('./database/Star5.json'))
let antinsfw = JSON.parse(fs.readFileSync('./database/antinsfw.json'));
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let registercuy = JSON.parse(fs.readFileSync('./database/user/registercuy.json'))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

prefix = setting.prefix
owner = setting.owner

// Database
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))


// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addUserRegister = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        registercuy.push(obj)
          	fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
            }	


const checkRegisteredUser = (sender) => {
	        let status = false
	        Object.keys(registercuy).forEach((i) => {
		    if (registercuy[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            
            const checkBintang = (sender) => {
	        let status = false
	        Object.keys(SJ5).forEach((i) => {
		    if (SJ5[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		m = smsg(dha, mek)
		global.blocked
		global.prefix
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { chats } = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const argss = body.split(/ +/g)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = dha.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiWaMe = isGroup ? antiwame.includes(from) : false
        const isRegister = checkRegisteredUser(sender)
        const isStarNya = checkBintang(sender)
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isAntiNsfw = isGroup ? antinsfw.includes(from) : false
        const isAntiLinkYoutube = isGroup ? antiyoutube.includes(from) : false
		const isVote = isGroup ? voting.includes(from) : false
        const isOwner = ownerNumber.includes(sender)
        
               dha.chatRead(from, "read")

        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
// here fake
miku = fs.readFileSync('miku.jpg')
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      dha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await dha.relayWAMessage(
        dha.prepareMessageFromContent(
          target,
          dha.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      dha.sendMessage(target, teks, "conversation");
    };
    //  Ucapan
    

	//=======================Tanggal========================\\
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
	
            var ase = new Date();
                        var waktunyasu = ase.getHours();
                        switch(waktunyasu){
                case 0: waktunyasu = `Malam ${pushname}🌌`; break;
                case 1: waktunyasu = `Malam ${pushname}🌌`; break;
                case 2: waktunyasu = `Malam ${pushname}🌌`; break;
                case 3: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 4: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 5: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 6: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 7: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 8: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 9: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 10: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 11: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 12: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 13: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 14: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 15: waktunyasu = `Sore ${pushname}🌆`; break;
                case 16: waktunyasu = `Sore ${pushname}🌆`; break;
                case 17: waktunyasu = `Sore ${pushname}🌆`; break;
                case 18: waktunyasu = `Malam ${pushname}🌃`; break;
                case 19: waktunyasu = `Malam ${pushname}🌃`; break;
                case 20: waktunyasu = `Malam ${pushname}🌃`; break;
                case 21: waktunyasu = `Malam ${pushname}🌃`; break;
                case 22: waktunyasu = `Malam ${pushname}🌃`; break;
                case 23: waktunyasu = `Malam ${pushname}🌃`; break;
            }
            var ucapan = '' + waktunyasu;
  
  var asu = new Date();
                        var waktunyamek = asu.getHours();
                        switch(waktunyamek){
                case 0: waktunyamek = `Malam🌌`; break;
                case 1: waktunyamek = `Malam🌌`; break;
                case 2: waktunyamek = `Malam??`; break;
                case 3: waktunyamek = `Pagi🌄`; break;
                case 4: waktunyamek = `Pagi🌄`; break;
                case 5: waktunyamek = `Pagi🌄`; break;
                case 6: waktunyamek = `Pagi🌄`; break;
                case 7: waktunyamek = `Pagi🌄`; break;
                case 8: waktunyamek = `Pagi🌄`; break;
                case 9: waktunyamek = `Pagi🌄`; break;
                case 10: waktunyamek= `Pagi🌄`; break;
                case 11: waktunyamek = `Siang🏞️`; break;
                case 12: waktunyamek = `Siang🏞️`; break;
                case 13: waktunyamek= `Siang🏞️`; break;
                case 14: waktunyamek= `Siang🏞️`; break;
                case 15: waktunyamek= `Sore🌆`; break;
                case 16: waktunyamek= `Sore🌆`; break;
                case 17: waktunyamek= `Sore🌆`; break;
                case 18: waktunyamek= `Malam🌃`; break;
                case 19: waktunyamek= `Malam🌃`; break;
                case 20: waktunyamek= `Malam🌃`; break;
                case 21: waktunyamek= `Malam🌃`; break;
                case 22: waktunyamek= `Malam🌃`; break;
                case 23: waktunyamek= `Malam🌃`; break;
            }
  var ucapnya = '' + waktunyamek;
//time
let d = new Date();
          let locale = "id";
          let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime()
          let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
          var ase = new Date();
          
    const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapan}`,
                    jpegThumbnail: miku
                          }
                        }
                      }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
        flink = {
"title": `ǀtz.me/Riu`,
"body": `No Hentai No Life`,
"previewType": "PHOTO",
"thumbnailUrl": `https://wa.me/62814622392081`,
"thumbnail": miku,
"sourceUrl": `-`
}
       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(from, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "0@s.whatsapp.net"  }, "message": {orderMessage: {itemCount: 0,status: 200, thumbnail: fs.readFileSync('image/100.jpg'), surface: 200, message: `Bio : ${ucapnya}\nJam : ${tampilJam}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 
                     const fvideo = {
	 key: { 
	      participant: '62814622392081@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"RIU GANZ",
                 "h": `Hmm`, 
                 'seconds': '2000', 
                 'caption': textnye,
                 'jpegThumbnail': fs.readFileSync('./image/109.jpg')
                        }
                       }
	                  }
const fakegroup = (teks) => {
            dha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
        const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/106.jpg`), thumbnail: fs.readFileSync(`image/107.jpg`),sendEphemeral: true}}}  
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
const kick = function (from, orangnya) {
      for (let i of orangnya) {
        dha.groupRemove(from, [i]);
      }
    };
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
dha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: miku, contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
        const isImage = (type === 'imageMessage')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
    
for (let xoxo of mentionUser) {
                if (afk.hasOwnProperty(xoxo.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[xoxo.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[xoxo.split('@')[0]]
                    }
                    reply(ini_txt)
                   dha.sendMessage(xoxo, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nIn Group : ${groupName}\nPesan : ${chats}`, { quoted : mek })
                }
            }
//-------- [ GAME ] ---------\\
game.cekWaktuSA(dha, buriq)
if (game.isSiapaAku(from, buriq)){
if (budy.toLowerCase().includes(game.getJawabanSA(from, buriq))){
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, buriq)}\n\nIngin bermain lagi? kirim *${prefix}siapaaku*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}siapaaku`, buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
buriq.splice(game.getSAPosi(from, buriq), 1)
}
}

game.cekWaktuTB(dha, tebakbendera)
     if (game.isTebakBendera(from, tebakbendera)){       
if (budy.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}tebakbendera`, buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}

game.cekWaktuCkl(dha, ckl)
if (game.isCkl(from, ckl)){
if (budy.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawab = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCkl(from, ckl)}\n\nIngin bermain lagi? kirim pencet dibawah ini`
let ge = await dha.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `${jawab}`,
"buttons": [
{buttonId: 'caklontong', buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
dha.relayWAMessage(ge)
ckl.splice(game.getCklPosi(from, ckl), 1)
}
}

game.cekWaktuMtk(dha, mtk)
            if (game.isMtk(from, mtk)){
if (budy.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n\nIngin bermain lagi? kirim *${prefix}math*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}math easy`, buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}


            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
      
             if (isGroup && m.mtype == 'viewOnceMessage'){
var msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('ViewOnce detected!')
dha.copyNForward(from, msg)
}

if (isGroup && !isGroupAdmins && isBotGroupAdmins) {
                if (isImage) {
                        var filePath = await dha.downloadAndSaveMediaMessage(msg);
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=HIRO`, {...options })
                        fs.unlinkSync(filePath)
                        var get_resulttt = get_result.result
                        var is_nsfw = "No"
                        if (Number(get_resulttt.replace("%", "")) >= 60) var is_nsfw = "Yes"
                        if (is_nsfw === "Yes") {
		        reply(`Gambar NSFW Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                dha.groupRemove(from, [sender])
              }
                }
          }
    
         if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
dha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`Gua mau kick tapi gua bukan admin 🤙`) })
dha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
dha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}


if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply('Fake Troli Detected \n\n' + require('util').format(m.key))
await dha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
         
          
if (budy.length > 3500) {
    if (!isGroup) return
    if (!isAntiVirtex) return
    if (isGroupAdmins) return
    reply(`「 *VIRTEX DETEKSI* 」\nKamu mengirimkan virtex, maaf kamu di kick dari grup :(`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    dha.groupRemove(from, [sender])
    }

const pw = [
"165310", 
"177978", 
"211759",  
"212643", 
"229540", 
"111074",
"211519", 
"256097", 
"163478", 
"91505", 
"79280", 
"260629", 
"128051", 
"239536",
"121310",
"202019",
"250029"]

/*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "yes" ||
               budy.toLowerCase() == "ya"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Tictactoe Game 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    dha.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    dha.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    dha.sendMessage(
                         from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    dha.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               dha.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*?? Tictactoe Game 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               dha.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
     
     // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
      
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           case 'creator':
           miku = fs.readFileSync('miku.jpg')
              ow = "62814622392081@s.whatsapp.net"
              teksnye = `
@${ow.split('@')[0]}

~RiuNiiSan`
              dha.sendMessage(from, miku, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teksnye })
              break    
              case 'tebakbendera':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/bendera?apikey=HIRO`)
                let anih = anu.result.name.toLowerCase()
                game.addtebakbendera(from, anih, gamewaktu, tebakbendera)
                const petunjuk = anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(`Nama Negara Dari Simbol ${anu.result.flag}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`)
            }
                break
              case "ttp":
              if (args.length == 0) return reply(`Example: ${prefix + command} Textnya`)
              query = args.join(" ")
              buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&APIKEY=91e9b333684574e2&text=${query}`)
              dha.sendMessage(from, buffer, sticker, { quoted: mek })
              break;
              case 'ppcouple':
				 const data = ['https://i.ibb.co/HGZqdzb/9b8278060e2d.jpg', 'https://i.ibb.co/NFPKcPj/6d61f9c4cede.jpg', 'https://i.ibb.co/yQzxptw/7faabc24c6ff.jpg']
				const data2 = ['https://i.ibb.co/V3kX3Cv/bf29432e6e21.jpg', 'https://i.ibb.co/FwRqPDn/206818911fdd.jpg', 'https://i.ibb.co/2Yk4P2B/47fd82f61fd1.jpg', 'https://i.ibb.co/j37Sc7X/a9600c228a8b.jpg', 'https://i.ibb.co/LQ4WJMR/f13a01cc7301.jpg', 'https://i.ibb.co/4Z5rJrn/465bf6b56d86.jpg', 'https://i.ibb.co/M9B742X/f608cecc4265.jpg', 'https://i.ibb.co/CWx3NYc/8ad244372d8f.jpg']
				num = `${sender.split("@")[0]}@s.whatsapp.net`
				kont = `Caouple Cowonya\n*@${num.split('@')[0]}*`
				kint = `Couple Cewenya\n*@${num.split('@')[0]}*`
                jsonData = JSON.parse(data);
                jsonData2 = JSON.parse(data2);
                 randindex = Math.floor(Math.random() * jsonData.length);
                 randkey = jsonData[randindex];
                 fremaleindex = Math.floor(Math.random() * jsonData2.length);
                 frankey = jsonData[randindex];
                 ini_image = randkey.result.male
                ini_laki = await getBuffer(ini_image)

                ini_foto = frankey.result.famale
                ini_cewe = await getBuffer(ini_foto)
				dha.sendMessage(from, ini_laki, image, {quoted: floc, caption: kont })
				dha.sendMessage(from, ini_cewe, image, {quoted: floc, caption: kint })
				break
        case 'owner':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}`
               buttons = [{buttonId: `${prefix}creator`,buttonText:{displayText: 'CREATOR'},type:1},{buttonId:`${prefix}infoig`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'Jangan Gombal Dia Ya!', buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: freply })
               dha.relayWAMessage(prep)
               break
               case 'menu':
               case 'help':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               mednya = `https://youtu.be/dQw4w9WgXcQ`
                 thumbUrl = `https://telegra.ph/file/6214e25384b4bf8c96f44.jpg`
      thambnel = `https://telegra.ph/file/6214e25384b4bf8c96f44.jpg`
     const inu = fs.readFileSync('image/senyamiku.jpg')
               num = `${sender.split("@")[0]}@s.whatsapp.net`
               mani = fs.readFileSync('ayanokoji.jpg')
               hai = `Hai Kak *@${num.split('@')[0]}*\n _Saya Ryuu Bot Yang Akan Membantu Kakak Untuk Bersenang Senang_ `
             gbutsanguy = [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'📝MENU'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}, {buttonId: `${prefix}saus`, buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1}]
     mhan1 = await dha.prepareMessage(from, mani, image)
          gbuttonan = {
imageMessage: mhan1.message.imageMessage,
    contentText: `${hai}`,
    footerText: "Riu",
    buttons: gbutsanguy,
    headerType: 4
}             
               await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
       thumbnail: thumbUrl,
        caption: `${hai}`,
        "contextInfo": {
            mentionedJid: [hai, num],
            "externalAdReply": {
                "title": `${ucapan}`,
                "body": `ItsMeRiu`,
                "mediaType": 2,
                "previewType": thambnel,
                "thumbnail": inu,
                "mediaUrl": mednya,
                "sourceUrl": ""
            }},
			quoted: 
   ftroli})
               break
               case 'daftarnya':
               if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
               powe = pw[Math.floor(Math.random() * pw.length)];

               const munir = fs.readFileSync('ayanokoji.jpg')

               verif = `Jangan Berikan Kode Ke Siapapun!\n${powe}`

               dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, munir, image, {quoted: floc, caption: verif })

               reply('Kode Verifikasi Sudah Terkirim\nReply Pesan Ini Untuk Memasukan Kode Verifikasi')

               break
      case 'listmenu':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
      num = `${sender.split("@")[0]}@s.whatsapp.net`
    ow = "62814622392081@s.whatsapp.net"
      gambar = fs.readFileSync('Maid.jpg')
      thumbUrl = `https://telegra.ph/file/fca8686d08906eda9f1d3.png`
      thambnel = `https://telegra.ph/file/6214e25384b4bf8c96f44.jpg`
     const ibtu = fs.readFileSync('image/110.jpg')
      menunya =
`Hallo kak 👋\n*@${num.split('@')[0]}*\n\n*⚔️MY COMMAND LIST⚔️*\n\n👨‍💻Created By: @${ow.split('@')[0]}\n
───────────────
_*STICKER MENU💾*_

🌹 *attp*\n🌹 *exif*\n🌹 *sticker*\n🌹 *toimg*\n🌹 *tovideo*\n🌹 *telesticker*
───────────────

───────────────
_*🎶DOWNLOAD MENU🎶*_

🌹 *youtubedl*\n🌹 *play*\n🌹 *igdl*\n🌹 *igstory*\n🌹 *tiktokdl*\n🌹 *mediafire*\n🌹 *facebook*\n🌹 *nhdl*\n🌹 *playstore*
───────────────

───────────────
_*🎞STICKER CMD🎞*_

🌹 *setcmd*\n🌹 *delcmd*\n🌹 *listcmd*
───────────────

───────────────
_*🔍SEARCH MENU🔎*_

🌹 *chara*\n🌹 *playstore*\n🌹 *image*\n🌹 *google*\n🌹 *ytsearch*\n🌹 *pinterest*\n🌹 *ytdesc*\n🌹 *animesearch*\n🌹 *spekhp*\n🌹 *igstory*
───────────────

───────────────
_*💸SESSION MENU💸*_ ( PREMIUM )\n
🌹 *jadibot*\n🌹 *stopjadibot*\n🌹 *listjadibot*
───────────────

───────────────
_*✳️FUN MENU✳️*_

🌹 *tictactoe*\n🌹 *stickerwa*\n🌹 *slot*\n🌹 *meme*\n🌹 *darkjoke*\n🌹 *asupan*\n🌹 *afk*\n🌹 *bisakah*\n🌹 *kapankah*\n🌹 *apakah*\n🌹 *truth*\n🌹 *dare*\n🌹 *bagaimanakah*\n🌹 *quotesanime*\n🌹 *rate*\n🌹 *ganteng*\n🌹 *cantik*\n🌹 *jadian*\n🌹 *pacaran*\n🌹 *lolivid*\n🌹 *storyanime*\n🌹 *vtuber*\n🌹 *slot*
───────────────

───────────────
_*🎵AUDIO MENU🎵*_

🌹 *nc*\n🌹 *tempo*\n🌹 *imut*
───────────────

───────────────
_*🎥VIDEO MENU🎥*_

🌹 *reversevideo*\n🌹 *video* ( judul )
───────────────

───────────────
_*🖼IMAGE MENU🖼*_

🌹 *waifu*\n🌹 *loli*\n🌹 *husbu*\n🌹 *milf*\n🌹 *cosplay*\n🌹 *wallml*\n🌹 *nsfw*\n🌹 *harcos*\n🌹 *harta*\n🌹 *jenisanim*\n🌹 *dadu*
───────────────

───────────────
_*🚫ANTILINK MENU🚫*_

🌹 *antilink* 1/0\n🌹 *antiwa* 1/0\n🌹 *antiyoutube* 1/0\n🌹 *antivirtex* 1/0\n🌹 *antibug* on/off
───────────────

───────────────
_*⚠️INFO⚠️*_

🌹 *owner*\n🌹 *runtime*\n🌹 *speed*
───────────────

───────────────
_*🔰GROUP MENU🔰*_

🌹 *leaveall*\n🌹 *hidetag*\n🌹 *culik*\n🌹 *add*\n🌹 *hetshot*\n🌹 *promote*\n🌹 *demote*\n🌹 *promoteall*\n🌹 *demoteall*\n🌹 *vote*\n🌹 *devote*\n🌹 *voting*\n🌹 *culik*\n🌹 *totag*\n🌹 *tospam*
───────────────`
  mhan1 = await dha.prepareMessage(from, gambar, image)
gbutsan = [
  {buttonId: `${prefix}ratting`, buttonText: {displayText: '🌟RATE'}, type: 1},
  {buttonId: `${prefix}owner`, buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},
  {buttonId:`${prefix}partner`,buttonText:{displayText:'💓PARTNER'},type:1}, 
]
 gbuttonan = {
imageMessage: mhan1.message.imageMessage,
    contentText: `${menunya}`,
    footerText: `0814622392081`,
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: thumbUrl,
        caption: `${menunya}`,
        "contextInfo": {
            text: 'HelloWorld',
            mentionedJid: [menunya, ow, num],
            "externalAdReply": {
                "title": `${ucapan}`,
                "body": `ItsMeRiu`,
                "previewType": thambnel,
                "thumbnail": ibtu,
                "sourceUrl": "https://wa.me/message/L3KZC5MDUYCXC1"
            }},
			quoted: 
   ftroli})
   break
               //------------------< Anti Link Menu >-------------------
               case 'antilink':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mengaktifkan antilink digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mematikan antilink digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'math':{
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}`)
//	const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
	}
break
					case 'saus':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					sour = `Nih Scnya\n https://www.mediafire.com/download/eajki98w6tbmep3`
					fakegroup(sour)
					break
					case 'quotesanime':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=HIRO`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                    case 'truth':
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
					case 'bisakah':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (isRegister) return ("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					caption = `pertanyaan: ${query}\njawaban: ${keh}`
					reply(caption)
					break
					case 'listnsfw':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST MENU NSFW*",
"description": `\nList Menu Nya Kak!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "NSFW LIST",
      "rows" :[
        {
          "title": "ecchi",
          "rowId": `${prefix}ecchi`
        },
        { 
          "title": "hentai",
          "rowId": `${prefix}hentai`
        },
{ 
          "title": "cum",
          "rowId": `${prefix}cum`
        },
{ 
          "title": "yuri",
          "rowId": `${prefix}yuri`
        },
{ 
          "title": "wallpaper",
          "rowId": `${prefix}wallpaper`
        },
{ 
          "title": "blowjob",
          "rowId": `${prefix}blowjob`
        },
{ 
          "title": "pussy",
          "rowId": `${prefix}pussy`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
case 'listanime':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST MENU ANIME*",
"description": `\nList Anime Nya Kak!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "ANIME LIST",
      "rows" :[
        {
          "title": "korea\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan1`
        },
        { 
          "title": "Jepang\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan2`
        },
{ 
          "title": "Kazuma\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan3`
        },
{ 
          "title": "L Lawliet\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan4`
        },
{ 
          "title": "Light Yagami\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan5`
        },
{ 
          "title": "Aqua\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan6`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
case 'ratting':
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST RATTING BOT*",
"description": `\nYuk Beri Ulasan Ke Pada Bot Agar Developer Dapat Mengembangkan Bot Dengan Lebih Baik Lagi!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "YUK BERI RATE BOT!",
      "rows" :[
        {
          "title": "🌟",
          "rowId": `${prefix}⭐`
        },
        { 
          "title": "🌟🌟",
          "rowId": `${prefix}⭐⭐`
        },
{ 
          "title": "🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐`
        },
{ 
          "title": "🌟🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐⭐`
        },
{ 
          "title": "🌟🌟🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐⭐⭐`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
		case 'kapankah':
		if (isRegister) return ("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					caption = `pertanyaan: ${query}\njawaban: ${koh}`
					reply(caption)
					break
					case 'afk':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await dha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    dha.sendMessage(from, pp_riu, image, { quoted: floc, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		case 'apakah':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					caption = `pertanyaan: ${query}\njawaban: ${kah}`
					reply(caption)
					break
		case 'bagaimanakah':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		query = args.join(" ")
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					caption = `pertanyaan: ${query}\njawaban: ${mana}`
					reply(caption)
					break
		case 'rate':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		query = args.join(" ")
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					caption = `pertanyaan: ${query}\njawaban: ${te}`
					reply(caption)
					break
		case 'dare':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
					case 'cantik':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jdoo = groupMembers
					const kposs = groupMembers
					const akii = jdoo[Math.floor(Math.random() * jdoo.length)]
					teks = `yang cantik adalah:\n@${akii.jid.split('@')[0]}`
					jds.push(akii.jid)
					mentions(teks, jds, true)
					break
					case 'ganteng':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jodoh = groupMembers
					const kpops = groupMembers
					const akiii = jodoh[Math.floor(Math.random() * jodoh.length)]
					teks = `yang ganteng adalah:\n@${akiii.jid.split('@')[0]}`
					jds.push(akiii.jid)
					mentions(teks, jds, true)
					break
              case 'ulasan':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              youke = fs.readFileSync('./image/109.jpg')
		      buttons = [{buttonId: `THANKS RATENYA👋`,buttonText:{displayText: `THANKS RATENYA👋`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./image/109.jpg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
              contentText:`Berikut Adalah Data Yang Sudah Di Simpan Oleh Bot, Silahkan Di Lihat.\n\n⭐ ${SJ1.length}\n⭐⭐ ${SJ2.length}\n⭐⭐⭐ ${SJ3.length}\n⭐⭐⭐⭐ ${SJ4.length}\n⭐⭐⭐⭐⭐ ${SJ5.length}\n\nData Ini Di Peroleh Dari Developer Hingga Pada Tanggal *${tampilHari}*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc})
              dha.relayWAMessage(prep)
              break
              case '⭐':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ1.push(sender)
fs.writeFileSync('./database/Star1.json', JSON.stringify(SJ1))
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ2.push(sender)
fs.writeFileSync('./database/Star2.json', JSON.stringify(SJ2))
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ3.push(sender)
fs.writeFileSync('./database/Star3.json', JSON.stringify(SJ3))
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ4.push(sender)
fs.writeFileSync('./database/Star4.json', JSON.stringify(SJ4))
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ5.push(sender)
fs.writeFileSync('./database/Star5.json', JSON.stringify(SJ5))
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case 'partner':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
hard = `Ini Kak Kontak Partner Saya 😇`
             let ini_list = []
   {
  ini_list.push({
            "displayName": 'Rio ( Gay )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Rio\nitem1.TEL;waid=6285664770042:6285664770042\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'Hafiz ( Temen Gay😍 )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Hafiz\nitem1.TEL;waid=79659304176:+79659304176\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'Lolhuman ( My Mastah )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Lolhuman(2nd Number)\nitem1.TEL;waid=62895418200111:62895418200111\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          }
          )
  }
  hehex = await dha.sendMessage(from, {
        "displayName": `100 kontak`,
        "contacts": ini_list
        }, 'contactsArrayMessage', { quoted: floc })
        reply(hard)
        break
					case 'jadian':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const blok = groupMembers
					const ayos = groupMembers
					const bakiii = blok[Math.floor(Math.random() * blok.length)]
					teks = `cie yang baru jadian\n@${bakiii.jid.split('@')[0]}\nSemoga Langgeng😍`
					jds.push(bakiii.jid)
					mentions(teks, jds, true)
					break
					case 'pacaran':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jodohnya = groupMembers
					const pasangannya = groupMembers
					bokiiii = pasangannya[Math.floor(Math.random() * pasangannya.length)]
					const akiiii = jodohnya[Math.floor(Math.random() * jodohnya.length)]
					teks = `Suttt!!, ada yg lagi pacaran!\n@${akiiii.jid.split('@')[0]} 💞  @${bokiiii.jid.split('@')[0]} \nCIE CIE😍`
					jds.push(akiiii.jid, bokiiii.jid)
					mentions(teks, jds, true)
					break
					case 'totag':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
					case 'culik':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("KHUSUS GRUP!")
					if (!isGroupAdmins) return reply("KHUSUS ADMIN GRUP!")
					if (!isBotGroupAdmins) return reply("JADIIN ADMIN DULU TOMLOL")
					if (args.length < 1) return reply('YG MAU DI ADD SIAPA?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dha.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'antivirtex':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antivirtex 1`)
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('Sudah Aktif Kak')
						antivirtex.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('_Success mengaktifkan antivirtex digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('_Success mematikan antivirtex digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'playstore':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'sider':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
            case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
            case 'reversevideo':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = dha.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
            case 'reverseaudio':
            if (!isQuotedAudio) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from,  audio, { mimetype: 'audio/mp3', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'pilihan2':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            dha.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
					case 'antiyoutube':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antiyoutube 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLinkYoutube) return reply('Sudah Aktif Kak')
						antiyoutube.push(from)
						fs.writeFileSync('./database/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('_Success mengaktifkan antiyoutube digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkYoutube) return reply('Sudah Mati Kak')
						var ini = antiyoutube.indexOf(from)
						antiyoutube.splice(ini, 1)
						fs.writeFileSync('./database/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('_Success mematikan antiyoutube digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antiwa':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antiwa 1`)
					if (Number(args[0]) === 1) {
						if (isAntiWaMe) return reply('Sudah Aktif Kak')
						antiwame.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('_Success mengaktifkan antiwa digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiWaMe) return reply('Sudah Mati Kak')
						var ini = antiwame.indexOf(from)
						antiwame.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('_Success mematikan antiwa digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
              case 'py1':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply("eror")
                        }
                   break      
                   case 'dadu':
                   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			dha.sendMessage(from, damdu, sticker, {quoted: floc})
			break
              case 'imut':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
	encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
	media = await dha.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
dha.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
       case 'delcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
              case  'tictactoe':
              case 'ttc':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game ??*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         dha.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *#tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game
     
     _[ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan_ 
     `;
                    dha.sendMessage(from, strChat, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
               case  'delttc':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    // if(!isOwner && !mek.key.fromMe) return vean.sendMessage(id, yan, MessageType.text);
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }
                    break
       case 'listcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Public/Self >-------------------
        case 'public':            
          	if (!mek.key.fromMe) return 
          	if (banChats === false) return 
          	banChats = false
          	fakegroup(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return 
          	if (banChats === true) return
          	uptime = process.uptime()
          	banChats = true
          	fakegroup(`「 *SELF-MODE* 」`)
          	break
//------------------< Downloader/Search/Anime >-------------------
case 'clearall':
					if (!isOwner) return reply('KHUSUS OWNER')
					anu = await dha.chats.all()
				dha.setMaxListeners(25)
					for (let _ of anu) {
						dha.deleteChat(_.jid)
					}
					reply('SUKSES')
					break
       case 'igdl':
       case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              const data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: miku})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igstory': 
              if(!q) return reply('Usernamenya?')
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              dha.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              dha.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
              break
              case 'caklontong':{
if (!isGroup) return reply(mess.only.group)
if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let anih = anu.data.result.jawaban.toLowerCase()
game.addckl(from, anih, gamewaktu, ckl)
	}
break
       case 'image':
       case 'googleimage':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: fvn, thumbnail: miku, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
             case 'gimage':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=HIRO&query=${query}`)
                    dha.sendMessage(from, ini_buffer, image, { quoted: fvideo })
                    break
             case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
            case 'slot':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : ?? : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n?? : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'tiktokdl':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `🚹 *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n📭 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📝 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `🎥Mp4`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎶Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'MAKE DOANG NYEWA KAGAK', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'open':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
dha.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
dha.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'buttons6':   
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				dha.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break  
					case 'delchat':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus Admin!")
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                dha.modifyChat(from, ChatModification.delete)
                break
					case 'tospam':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await dha.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await dha.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await dha.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
dha.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: miku}, MessageType.liveLocation, {quoted:floc})
break
					case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
					case 'buttonst7':   
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				reply("wait bro")
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				dha.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				dha.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				break
				
case 'restart':
             if (!isOwner) return 
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             reply(mess.wait)
             exec(`node main`)
             fakegroup('_Restarting Bot Success_')
             break
             case 'herolist':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
            case 'group':
case 'grup':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
        
        txtt =`Hai Kak ${pushname}\nPilih Di bawah`

               buttons = [{buttonId: `${prefix}open ${q}`,buttonText:{displayText: 'open'},type:1},{buttonId:`${prefix}close ${q}`,buttonText:{displayText:'close'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Pilih open : Untuk Membuka\nPilih close : Untuk Menutup',
               buttons: buttons,
               headerType: 1
}

          prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               dha.relayWAMessage(prep)
               break
            
      case 'youtubedl':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
*Title* : ${res[0].judul}
*Type* : mp3/mp4
*Durasi* : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `*Videonya*\n\n~RiuNiiSan`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'*Audionya*\n\n~RiuNiiSan'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: miku})).message.imageMessage
              buttonsMessage = {footerText:'Pilih salah satu di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
       case 'nhentaipdf':
       case 'nhdl':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (!q) return reply('kodenya?')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
             ini_image = await getBuffer(get_result.result.image[0])
             data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(data.result)
             dha.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
             break
             case 'py1':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'py2':
                   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
      case 'buttons1':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
              case 'playdl':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://dha-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}py1 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}py2 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await dha.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{})

dha.relayWAMessage(prep)
break
     case 'buttons2':
     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
       case 'buttons3': 
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
             ini_video = await getBuffer(data.result.link)
             dha.sendMessage(from, ini_video, video, { quoted: mek })
             break
   case 'buttonts4':
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
     case 'antibug':
     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
          if (!mek.key.fromMe && !isOwner && !isCoOwner) return
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih on atau off')
          }
          break
    case 'google':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=HIRO&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'mediafire':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `*MediaFire Downloader*
               
*Nama* : ${res[0].nama}
*Ukuran* : ${res[0].size}
*Link* : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
      case 'fb':
      case 'facebook':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=a10523bcf6`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
             case 'nuliskiri':
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                    dha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak.`})
                break
                case 'nulis':
                sendFileFromUrl(from, `https://api.zeks.xyz/api/nulis?apikey=apivinz&text=${q}`, 'Jangan mager kak:v', mek)
                break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'ytdesc':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
             teks = args.join(' ')
             res = await yts(teks)
             reply(res.all[0].description)
             break
    case 'chara':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await dha.sendMessage(from,li,image,{quoted: mek})
            break
            case 'pilihan1':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=HIRO&query=Manhua`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'pilihan3':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=HIRO&query=Kazuma`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'pilihan4':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=HIRO&query=L Lawliet`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'pilihan5':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=HIRO&query=Light Yagami`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'pilihan6':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=HIRO&query=Aqua Konosuba`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
            case 'stickerwa':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Patrick`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=HIRO&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=HIRO&img=${x}`)
                        await dha.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'harcos':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=HIRO&text=${body.slice(7)}`)
					cap = `${query}`
					dha.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
					case 'linkwa':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
		case 'harta':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=HIRO&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				dha.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				break
       case 'waifu':
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: miku})).message.imageMessage
              buttonsMessage = {footerText:'MengBaBu', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'bug':
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await dha.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
					case 'detikvn':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await dha.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
              case 'nsfw':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu Dibawah Ini!`
              buttons = [{buttonId:`${prefix}hentai`,buttonText:{displayText:'Hentai'},type:1},{buttonId:`${prefix}ecchi`,buttonText:{displayText:'Ecchi'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'NSFW MENU',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: ftroli , contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
             case 'detikvn':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await dha.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break  
               case 'jenisanim':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu Dibawah Ini!`
              buttons = [{buttonId:`${prefix}pilihan1`,buttonText:{displayText:'China\n\n~RiuNiiSan'},type:1},{buttonId:`${prefix}pilihan2`,buttonText:{displayText:'Jepang\n\n~RiuNiiSan'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'DONASI LAH MASA MAKE DOANG KNTL',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
        case 'play':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if (args.length < 1) return reply('Apa Yang Mau Dicari?')
               teks = args.join(' ')
               reply(mess.wait)
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               reply('_Error Judul Yang Anda Masukan Tidak Ada_')
})
               reply(`Playing ${res.all[0].title}`)
               let thumbInfo = `*Youtube Audio Downloader*
               
*Judul* : ${res.all[0].title}
*Type* : mp3
*ID* : ${res.all[0].videoId}
*Publikasi* : ${res.all[0].ago}
*Ditonton* : ${res.all[0].views}
*Durasi* : ${res.all[0].timestamp}
*Channel* : ${res.all[0].author.name}
*Link* : ${res.all[0].author.url}

*_Harap tunggu_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: miku, caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('_ Error Saat Memasuki Web Y2mate_')
})
               sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               reply('_Error Judul Yang Anda Masukan Tidak Ada_')
})
               reply(`♬ Playing ${res.all[0].title} ♬`)
               let thumbInfo = `*Youtube Audio Downloader*
               
*Judul* : ${res.all[0].title}
*Type* : mp3
*ID* : ${res.all[0].videoId}
*Publikasi* : ${res.all[0].ago}
*Ditonton* : ${res.all[0].views}
*Durasi* : ${res.all[0].timestamp}
*Channel* : ${res.all[0].author.name}
*Link* : ${res.all[0].author.url}

*_Harap tunggu sebentar*`

               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: miku, caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('_ Error Saat Memasuki Web Y2mate_')
})
               sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
               break
               case 'harcos':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=HIRO&text=${body.slice(7)}`)
					cap = `${query}`
					dha.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
					case 'tempo':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'nc':
				if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
		case 'harta':
				if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=HIRO&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				dha.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				
				break
case 'hetshot':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupRemove(from, mentioned)
			reply("SUKSES")
			break
			case 'promote':
			if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupMakeAdmin(from, mentioned)
			reply("SUKSES")
			break
			case 'promoteall':
			if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
					members_id = []
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					dha.groupMakeAdmin(from, members_id)
					reply("sukses")
					break
					case 'demoteall':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
					members_id = []
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					dha.groupDemoteAdmin(from, members_id)
					reply("sukses")
					break
					case 'demote':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupDemoteAdmin(from, mentioned)
			reply("SUKSES")
			break
			case 'add':
			if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupAdd(from, mentioned)
			reply("SUKSES")
			break
         case 'pinterest':
         if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await dha.sendMessage(from,di,image,{quoted: mek})
            break
       case 'yts':
       case 'ytsearch':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
Title : ${i.title}
Views : ${i.views}
Upload : ${i.ago}
Durasi : ${i.timestamp}
Channel : ${i.author.name}
Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: miku, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await dha.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'telesticker': 
       case 'telestiker':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              dha.sendMessage(from, ini_buffer, sticker, {})
}
              break
              case 'take':
    case 'colong':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await dha.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `X - Dev Team`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, dha, mek, from)
			break
			case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await dha.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             dha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             
             case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                const dataa = fs.readFileSync('./lib/tebakgambar.js');
                 jsonData = JSON.parse(dataa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 ini_image = randKey.result.soal
                    jawaban = randKey.result.jawaban
                    ini_buffer = await getBuffer(ini_image)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: fkontak, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
              //        sleep(30000)
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
             case 'getdeskgc':
				if (!isGroup) return reply("Khusus Grup!")
					anu = from
			   metadete = await dha.groupMetadata(anu.jid)
				reply(metadete)
				  break
					case 'getbio':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await dha.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = dha.contacts[ambl] != undefined ? dha.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : dha.contacts[ambl].notify || dha.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
case 'delete':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'chat':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dha.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
             case 'suit':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
       case 'attp':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length == 0) return reply(`Example: ${prefix + command} YUDHA`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              dha.sendMessage(from, buffer, sticker, { quoted: mek })
              break
              case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
       case 'sticker':
       case 'stiker':
       case 's':
       case 'stickergif':
       case 'stikergif':
       case 'sgif':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await dha.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('WA')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              dha.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await dha.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('WA')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              dha.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
      case 'tovideo':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
               case "spekhp":
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (args.length == 0) return reply(`Example: ${prefix + command} Redmi 5A`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsmarena?apikey=HIRO&query=${query}`)
get_result = get_result.result
ini_txt = `❏「 *INFORMATION* 」❏\n\n`
ini_txt += `◪› Title : ${get_result.phone_name}\n`
spek = get_result.specification
ini_txt += `◪› Jaringan :\n`
ini_txt += `3G : ${spek.network.net3g}\n`
ini_txt += `4G : ${spek.network.net4g}\n`
ini_txt += `5G : ${spek.network.net5g}\n`
ini_txt += `Speed : ${spek.network.speed}\n\n`
ini_txt += `◪› Meluncurkan :\n`
ini_txt += `Tahun : ${spek.launch.year}\n`
ini_txt += `Status : ${spek.launch.status}\n\n`
ini_txt += `◪› Tubuh :\n`
ini_txt += `Dimensi : ${spek.body.dimensions}\n`
ini_txt += `Berat : ${spek.body.weight}\n`
ini_txt += `Build : ${spek.body.build}\n`
ini_txt += `Sim : ${spek.body.sim}\n`
ini_txt += `Body other : ${spek.body.bodyother}\n\n`
ini_txt += `◪› Display :\n`
ini_txt += `Tipe : ${spek.display.displaytipe}\n`
ini_txt += `Size : ${spek.display.displaysize}\n`
ini_txt += `Resolution : ${spek.display.displayresolution}\n`
ini_txt += `Protection : ${spek.display.displayprotection}\n\n`
ini_txt += `◪› Display :\n`
ini_txt += `Tipe : ${spek.display.displaytipe}\n`
ini_txt += `Size : ${spek.display.displaysize}\n`
ini_txt += `Resolution : ${spek.display.displayresolution}\n`
ini_txt += `Protection : ${spek.display.displayprotection}\n\n`
ini_txt += `◪› Platform :\n`
ini_txt += `OS : ${spek.platform.os}\n`
ini_txt += `Chipset : ${spek.platform.chipset}\n`
ini_txt += `Cpu : ${spek.platform.cpu}\n`
ini_txt += `Gpu : ${spek.platform.gpu}\n\n` 
ini_txt += `◪› Memory :\n`
ini_txt += `Slot memori : ${spek.memory.memoryslot}\n`
ini_txt += `Internal : ${spek.platform.internalmemory}\n`
ini_txt += `Memory other : ${spek.platform.memoryother}\n\n`
ini_txt += `◪› Suara :\n`
ini_txt += `Optional : ${spek.sound.optionalother}\n`
ini_txt += `◪› Komunikasi :\n`
ini_txt += `WLAN : ${spek.comms.wlan}\n`
ini_txt += `Bluetooth : ${spek.comms.bluetooth}\n`
ini_txt += `GPS : ${spek.comms.gps}\n`
ini_txt += `Radio : ${spek.comms.radio}\n`
ini_txt += `USB : ${spek.comms.usb}\n\n`
ini_txt += `◪› Fitur :\n`
ini_txt += `Sensor : ${spek.features.sensors}\n\n`
ini_txt += `◪› Baterai :\n`
ini_txt += `Baterai : ${spek.battery.batdescription1}\n\n`
ini_txt += `◪› Lain-lain :\n`
ini_txt += `Warna : ${spek.misc.colours}\n`
ini_txt += `Model : ${spek.misc.models}\n`
ini_txt += `Harga : ${spek.misc.price}\n`
thamnel = await getBuffer(get_result.phone_image)
await dha.sendMessage(from, thamnel, image, { quoted: mek, caption: ini_txt, thumbnail: miku})
break;
               case 'teks1':
              textnya = `
Hai Saya Ryuu👋
Saya Akan Membantu
Anda Jika Kesusahan`
buttons = [{buttonId:`${prefix}prefixnofound`,buttonText:{displayText:'⋮☰ MASALAH PREFIX'},type:1},{buttonId:`${prefix}fiturnofound`,buttonText:{displayText:'⋮☰ FITUR TIDAK ADA'},type:1},{buttonId:`${prefix}sk`,buttonText:{displayText:'S&K'},type:1}]
               buttonsMessage = { contentText: `${textnya}`, footerText: 'PILIH SALAH SATU DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
      case 'toimg':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!isQuotedSticker) return reply('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
              case 'animesearch':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=HIRO&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Judul : ${get_result.title.romaji}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Durasi : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Awal Rilis : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `Akhir Rilis : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nSinopsis : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
              case 'fiturnofound':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
gyoro = `Sepertinya Kak @${num.split('@')[0]} Mengalami Masalah Pada Fitur Perintah Ya?, Sebaiknya Kak @${num.split('@')[0]} Melihat Menu Bot Atau Menanyakan Owner Tentang Fitur2 Dalam Bot.`
buttons = [{buttonId:`${prefix}owner`,buttonText:{displayText:'⋮☰ OWNER'},type:1}]
               buttonsMessage = { contentText: `${gyoro}`, footerText: 'PILIH DIBAWAH UNTUK MENANYAKAN COMMAND/FITUR PADA OWNER',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
               case 'prefixnofound':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
gyoro = `Prefix Bot Adalah ${prefix} Kak @${num.split('@')[0]}`
buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}]
               buttonsMessage = { contentText: `${gyoro}`, footerText: 'JIKA SUDAH TAU PREFIX BOT PENCET DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nMerespon dalam ${latensie.toFixed(4)} Sec `)
              break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = dha.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
             case "meme":
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             num = `${sender.split("@")[0]}@s.whatsapp.net`
             
v2 = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}meme`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Memenya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo,contextInfo: { mentionedJid: [num]}})
   break
                    case "asupan": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH ASUPAN" })
                    break
                    case "storyanime": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH STORY ANIMENYA" })
                    break;
                    case "vtuber": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/vtuber?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH STORY ANIMENYA" })
                    break;
   case "darkjoke":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}darkjoke`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Darkjoke\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvn, contextInfo: { mentionedJid: [num]}})
   break
   case "hentai":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}hentai`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Hentainya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
         
   case "yuri":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}yuri`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Yurinya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "pussy":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}pussy`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Pussynya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "blowjob":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://nekos.life/api/v2/img/blowjob`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}blowjob`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Pussynya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "cum":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}cum`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Cumnya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case 'siapaaku':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (game.isSiapaAku(from, buriq)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/siapaaku?apikey=HIRO`)
                let anih = anu.result.answer.toLowerCase()
                game.addburiq(from, anih, gamewaktu, buriq)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`)
            }
            break
   case "wallpaper":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}wallpaper`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Wallpapernya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "trap":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}trap`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Trapnya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
  case "ecchi":
  if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=HIRO`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}ecchi`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Ecchiny\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
    case 'shutdown':
             if (!isOwner) return 
             reply(`Sayonara:)`)
             await sleep(3000)
             process.exit()
             break
      case 'leaveall':
             if (!isOwner) return  
             let totalgroup = dha.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, '[ LEAVE ALL GROUP ]\n\nBye Bye', null)
             await sleep(3000)
             dha.groupLeave(id)
}
             break
       case 'setprefix':
              if (!isOwner) return
              teks = args.join('') 
              prefix = teks
              reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
              break
      case 'hidetag':
             try {
             	if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await dha.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
        case 'searchmsg':  //by ANU TEAM
               if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apa?\nContoh : ${prefix + command} halo|10`)
               teks = arg
               if (teks.includes("|")) { 
               try {
               var ve = teks.split("|")[0]
               var za = teks.split("|")[1]
               sampai = `${za}`
               if (isNaN(sampai)) return reply('Harus berupa Angka!')
               batas = parseInt(sampai) + 1
               if (batas > 30) return reply('Maks 30!')
               reply(mess.wait)
               cok = await dha.searchMessages(`${ve}`, from, batas,1) 
               if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
               if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
               for (i=1;i < cok.messages.length;i++) {
               if (cok.messages[i].message) {
               dha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
               } catch (e) {
               return reply(String(e))
}
               } else {
               reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
               break
        case 'lolkey':
        case 'cekapikey':
               if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
               anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
               teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
               dha.sendMessage(from, teks, text, {quoted: mek})
               break
              case 'sk':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              miku = fs.readFileSync('miku.jpg')
              syarat = ` 
              
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *menu* untuk memulai!`
              dha.sendMessage(from, miku, image, {quoted: fkontak, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: syarat })
       case 'infoig':
              reply(`IG: Fanzz_666`)
              break
       case 'jadibot':
              if (!isOwner) return
              jadibot(reply,dha,from)
              break
       case 'stopjadibot':
             stopjadibot(reply)
             break
      case 'listbot':
      case 'listjadibot':
             let text = '「 *LIST JADIBOT* 」\n\n'
             for(let i of listjadibot) {
             text += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
            reply(text)
            break
default:
if (budy.includes("https://youtu.be")) {
				if (!isGroup) return
				if (!isAntiLinkYoutube) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK YT DETECTOR 」*\nKamu mengirimkan link youtube, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
        if (body.startsWith(`${prefix}${command}`)) {
		num = `${sender.split("@")[0]}@s.whatsapp.net`
comd = `Halo @${num.split('@')[0]}\nCommand: *${prefix}${command}*\nTidak AdA Di Menu\nJika Bermasalah Pencet Dibawah Ini\n`
buttons = [{buttonId:`${prefix}teks1`,buttonText:{displayText:'⋮☰ PANDUAN'},type:1}]
               buttonsMessage = { contentText: `${comd}`, footerText: 'PILIH DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
				  }
        if (budy.includes("wa.me")) {
				if (!isGroup) return
				if (!isAntiWaMe) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 WA.ME DETECTOR 」*\nKamu mengirimkan link wa, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }

if (budy.includes("165310")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("211759")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("212643")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}

if (budy.includes("229540")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("250029")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("211519")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("256097")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("163478")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("91505")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("79280")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("260629")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("128051")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("239536")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
        if (budy.includes("121310")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("202019")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("250029")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
                    if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			
if (!isOwner) return
if (budy.startsWith('> ')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



