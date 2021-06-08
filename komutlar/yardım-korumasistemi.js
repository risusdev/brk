const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Koruma Sistemi Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setTitle(`Sanırım Kullanıcı Komutlarımı Merak Ettin <a:assagiok:850817439783583834>`)   
     .setDescription(`
<a:guard1:850810781012066415> **p!ban-koruma #kanal**
> **Ban koruma sistemini açar.**
<a:guard1:850810781012066415> **p!kanal-koruma #kanal**
> **Kanal koruma sistemini açar.**
<a:guard1:850810781012066415> **p!rol-koruma #kanal**
> **Rol koruma sistemini açar.**
<a:guard1:850810781012066415> **p!spam-koruma**
> ** Spam koruma sistemini açar.**

<a:assagiok:850817439783583834> **__Sıfırlamak İçin__** <a:assagiok:850817439783583834>

<a:guard1:850810781012066415> **__Bir Komutu Sıfırlamak İçin p!<komut>-sıfırla Örnegin : p!rol-koruma-sıfırla Şeklinde Sıfırlıyabilirsiniz !__**
> **Bi Koruma Sistemini Nasıl Sıfırlayabileceginiz Anlatılır.**
`)   
.setImage(`https://cdn.discordapp.com/attachments/850789768651603978/850815304989016064/standard.gif`)
.setFooter("Pearlys", message.author.avatarURL())
.setTimestamp()
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['koruma']



};
exports.help = {
name: "korumasistemi"
};