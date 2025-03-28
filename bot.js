//kelesh tarafından kodlanmıstır
//discord illegalyasa ve labelsc 
const { Discord, MessageEmbed ,Client } = require('discord.js');
const embed = new MessageEmbed();
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const ayar = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: ayar.bot.durum, type: ayar.bot.type }, status: `${ayar.bot.statuss}` });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  let voice = client.channels.cache.get(ayar.bot.botSesKanal);
  if (voice) voice.join().catch(err => console.error("Bot Ses Kanalına Bağlandı!"));
})

client.login(ayar.bot.token).catch(() => console.log('Token eksik veya hatalı lütfen tokeni kontrol ediniz :c'))