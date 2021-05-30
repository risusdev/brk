const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply(':red_square: Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "p!"
 db.delete(`westralogkanal_${message.guild.id}`);
  message.channel.send(`:red_square: Başvuru log kanalı başarıyla sıfırlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-log-kanal-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};