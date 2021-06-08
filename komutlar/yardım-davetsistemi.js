const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Davet Sistemi Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setTitle(`Sanırım Davet Komutlarımı Merak Ettin <a:assagiok:850817439783583834>`)   
     .setDescription(`
<a:assagiok:850817439783583834> **__Sistemi Açma ve Ayarlama Komutları__** <a:assagiok:850817439783583834>
<:davet:850789805679181844> **p!davet-kanal #kanal**
> **Davet Giriş Çıkış Kanalını Ayarlar!**
<:davet:850789805679181844> **p!davet-kanal-sıfırla**
> **Davet kanalını sıfırlar.**
<:davet:850789805679181844> **p!rütbe-ekle @rol davet**
> **Rütbe ekler.**
<:davet:850789805679181844> **p!rütbe-sıfırla**
> **Rütbeyi sıfırlar.**
<:davet:850789805679181844> **p!bonus-ekle**
> **Bonus ekler.**
<:davet:850789805679181844> **p!top**
> **Lider Tablosunu Gösterir**
<:davet:850789805679181844> **p!davetlerim**
> **Davetlerinizi gösterir.**
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
aliases: ['davet-sistemi']



};
exports.help = {
name: "davetsistemi"
};