const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "LzIjnYgS#nfac4158vNbTD-qcGXdZf5Z17gr_W681PQ-gUwJtM_k",
    CAPTION: process.env.CAPTION || "POWERED BY Sl𝙄𝘾𝙃𝙄𝙂𝙊☾",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bu7bs1.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM 𝐆𝐄𝐓𝐒𝐔𝐆𝐀 𝐓𝐄𝐍𝐒𝐇𝐎𝐔-MD WHATSAPP BOT 😊HAVE A NICE CHRISTMAS ♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "𝐆𝐄𝐓𝐒𝐔𝐆𝐀 𝐓𝐄𝐍𝐒𝐇𝐎𝐔࿐",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү 𝙄𝘾𝙃𝙄𝙂𝙊☾`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
