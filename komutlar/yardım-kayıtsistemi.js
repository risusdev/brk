const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Kayıt Sistemi Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setTitle(`Sanırım Kayıt Komutlarımı Merak Ettin <a:assagiok:850817439783583834>`)   
     .setDescription(`
<a:kayit:850809778418221126> **p!alınacak-rol @rol**
> **Kayıt edilen kişiden alınacak rolü ayarlar.**
<a:kayit:850809778418221126> **p!kayıt-kanal #kanal**
> **Kayıtın yapılacağı kanalı belirlersiniz.**
<a:kayit:850809778418221126> **p!kayıt-hg #kanal**
> **Kayıt hoş geldin kanalını ayarlarsınız.**
<a:kayit:850809778418221126> **p!kayıt-yetkili @rol**
> **Bir Kişiyi Kayıt Edebilecek Yetkiliyi Ayarlar**
<a:kayit:850809778418221126> **p!kayıt-yetkili @rol**
> **Bir Kişiyi Kayıt Edebilecek Yetkiliyi Ayarlar**
<a:kayit:850809778418221126> **p!kayıt-yetkili @rol**
> **Bir Kişiyi Kayıt Edebilecek Yetkiliyi Ayarlar**
<a:kayit:850809778418221126> **p!kayıt-yetkili @rol**
> **Bir Kişiyi Kayıt Edebilecek Yetkiliyi Ayarlar**

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
name: "koruma-sistemi"
};