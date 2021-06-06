const Discord = require('discord.js');
const db = require("quick.db");
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Bu Komutu Kullanabilmek İçin Yetkiniz Bulunmamaktadır !**")
 
  if (args[0] === 'aç') {
    
    db.set(`reklamengel_${message.guild.id}`, 'aktif')
    message.channel.send(`<:mod:850788085511618600> | **Reklam engel başarı ile açıldı! <:evet:851169108262912000> **`)
 
  }

  
  if (args[0] === 'kapat') {
    
    db.set(`reklamengel_${message.guild.id}`, 'deaktif')
    message.channel.send(`Reklam engel başarı ile kapatıldı!`)

  }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamengel', 'reklam','r-e-reklam-filtre'],
  permLevel: 0,
};
 
exports.help = {
  name: 'reklam-engel'
};
