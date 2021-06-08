const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setTitle(`Sanırım Kullanıcı Komutlarımı Merak Ettin <a:assagiok:850817439783583834>`)   
     .setDescription(`
<a:logo:850814040665882664> **p!davet**
> **Botun Destek Sunucusu Ve Davet Linkine Erişirsiniz !**
<a:logo:850814040665882664>**p!avatar**
> **Etiketlediginiz Kişinin Avatarına Bakarsınız**
<a:logo:850814040665882664> **p!randompp**
> **Yeşil şeklinde logo yapar.**
<a:logo:850814040665882664> **p!graffiti**
> **Graffiti şeklinde logo yapar.**
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
aliases: ['kullanıcı']



};
exports.help = {
name: "kullanıcı"
};