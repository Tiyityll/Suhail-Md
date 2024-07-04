const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708748472";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_39_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3MlRQYy9RWmhTOVozRkMyOHp1b1FMazBRVDMzckFLMHFyTm9VSkhzVGxRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwODc0ODQ3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTM0ODc4NTVGQjhFREIyRTJBMDEzMDFCNTQ1NzQxNjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDkzMTg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA4NzQ4NDcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2Q0FCNTYxQTRDQjExOENCMUY2ODY4RjBDNkJDQjBGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwOTMxODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWdIRngxZGxTSk9PWTNiM21IOTc1UVwiLFxuICBcInBob25lSWRcIjogXCI1MDE1NTZmNS1lY2RiLTQwNTYtODZiZS01YjlhODgxNWMzMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgNDUsXG4gICAgICAyMCxcbiAgICAgIDExMixcbiAgICAgIDE0NyxcbiAgICAgIDQxLFxuICAgICAgMjYsXG4gICAgICA2NyxcbiAgICAgIDE3MCxcbiAgICAgIDExMSxcbiAgICAgIDEwMixcbiAgICAgIDIyMixcbiAgICAgIDM5LFxuICAgICAgMzIsXG4gICAgICAxMjIsXG4gICAgICA5LFxuICAgICAgNTEsXG4gICAgICA1MCxcbiAgICAgIDE3MSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjI3LFxuICAgICAgOTQsXG4gICAgICAyMDUsXG4gICAgICAyMTIsXG4gICAgICAyMCxcbiAgICAgIDE0NyxcbiAgICAgIDEzLFxuICAgICAgMTEsXG4gICAgICAyNTAsXG4gICAgICAzMyxcbiAgICAgIDM4LFxuICAgICAgMjA3LFxuICAgICAgMTkxLFxuICAgICAgMjMyLFxuICAgICAgNTQsXG4gICAgICAxMzMsXG4gICAgICA0MyxcbiAgICAgIDE5MCxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTR1FLRlg3QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA4NzQ4NDcyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzI1ODkzNjg0OTIxMzc6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUnVraWXwn5KZXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmFwNnBJR0VQdVRtclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxZ29yc3lPK3dlbWlPNEk5bGFPUjJxMFRybngvSEs4STBEU0FtUXF3TURBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNYOTBLNEs1Smo3UkFUQjhGNkZsZjNKM0tDSDlPRGRVTG1SV285NWdvWUdKNkU4eXVlSE9NZE5WNnhLQWxwZjlneFExUjZQRDdmNWhkbnNFOWpYQUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYvZGpGc2xraVFRNy9XOEdURUc5eWE3ZndrWUx1ZmlZMHFMcFVSOStoV3NCcUJqL1ZoTWVYc21RRWlQc1JUckFGVi9qTGlVV2R2NDloaXhCMTV4aUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODc0ODQ3MjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDkzMTgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDFsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4R25JTkdmN3pLUjg2OXB2cnhxOGJCbC85Nk9jL0xmaWtlUENVUGc2Z1J3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTAxMDM0NDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Rukky",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
