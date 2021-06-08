const discord = require('discord.js');
exports.run = async (client, message, args) => {
  const wembed = new discord.MessageEmbed()
  .setColor("BLUE")
  .setFooter(`Pearlys`)
  .setTimestamp()
  .setDescription(`Pearlys Bot Son Mesaj Menüsü`)
.addField(``)
  message.channel.send(wembed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["son-mesaj"],
  permLevel: 0
}

exports.help = {
  name: 'sonmesaj'
};