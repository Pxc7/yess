const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let dha = new WAConnection()
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))

require('./dha.js')
nocache('./dha.js', module => console.log(`${module} is now updated!`))

const starts = async (dha = new WAConnection()) => {
    dha.logger.level = 'warn'
    dha.version = [2, 2119, 6] 
    console.log(banner.string)
    dha.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })

    fs.existsSync('./YUDHA LORD.json') && dha.loadAuthInfo('./YUDHA LORD.json')
    dha.on('connecting', () => {
        start('2', 'Subscribe YT ZEEONE OFC')
    })
    dha.on('open', () => {
        success('2', 'Connected')
    setTimeout( () => {
	    	console.log(color(`⚪ SUBSCRIBE YOUTUBE ZEEONE OFC`, 'aqua'))
	    	}, 1000)    		    	     	
         	}) 
         await dha.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./YUDHA LORD.json', JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

    dha.on('chat-update', async (message) => {
        require('./dha.js')(dha, message)
    })
    
	dha.on('group-participants-update', async (anu) => {
		try {
		  falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "dhabot", 
"caption": `Made With Riu🛐`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
			const mdata = await dha.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await dha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				try {
                    var pp_group = await dha.getProfilePicture(anu.jid)
	            } catch (e) {
	                var pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
	            }
				uptime = process.uptime()
let ge = await dha.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `Hai Kak @${num.split('@')[0]} selamat datang di grup\nDesk GC: \n${mdata.desc}`,
"buttons": [
{buttonId: 'Halo👋', buttonText: {displayText: 'Halo👋'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
dha.relayWAMessage(ge)
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				ini_gua = dha.contacts[num]
				group_info = await dha.groupMetadata(anu.jid)
				try {
					ppimg = await dha.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				uptime = process.uptime()
let gek = await dha.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `Selamat tinggal @${num.split('@')[0]} semoga sehat selalu ❤`,
"buttons": [
{buttonId: 'Bye👋', buttonText: {displayText: 'Bye👋'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
dha.relayWAMessage(gek)
		
			} else if (anu.action == 'promote') {
			const mdata = await dha.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await dha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}`
			dha.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await dha.groupMetadata(anu.jid)
			try {
					ppimg = await dha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}`
			dha.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num]}, quoted: falfa})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

dha.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "dhabot", "caption": `Made With Riu🛐`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await dha.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    dha.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
