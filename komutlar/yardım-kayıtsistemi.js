const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(` **${WestraPrefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
 **${WestraPrefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
 **${WestraPrefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
 **${WestraPrefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
 **${WestraPrefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
 **${WestraPrefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
 **${WestraPrefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
 **${WestraPrefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
 **${WestraPrefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
 **${WestraPrefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
 **${WestraPrefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
 **${WestraPrefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
 **${WestraPrefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
 **${WestraPrefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
`)
 .setFooter(`Pearlys`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};