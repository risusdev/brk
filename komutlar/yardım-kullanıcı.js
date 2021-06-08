const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setTitle(`Sanırım Kullanıcı Komutlarımı Merak Ettin <a:assagiok:850817439783583834>`)   
     .setDescription(`
<:kullanici:850777538745729036> **p!atatürk**
> **Musatafa Kemal Atatürkün Muhteşem Fotograflarını Atar**
<:kullanici:850777538745729036> **p!kullanıcı-bilgi**
> **Etiketlediginiz Kişinin Bilgilerine Bakarsınız!**
<:kullanici:850777538745729036>**p!avatar**
> **Etiketlediginiz Kişinin Avatarına Bakarsınız**
<:kullanici:850777538745729036> **p!randompp**
> **Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.**
<:kullanici:850777538745729036> **p!öneri**
> **Botun Eksigini Fazlasını Botun Admin Ekibine Bildirirsiniz !**
<:kullanici:850777538745729036> **p!davet**
> **Botun Destek Sunucusu Ve Davet Linkine Erişirsiniz !**
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