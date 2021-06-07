const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setDescription(`**Selam Knk <@${message.author.id}> **
**İlk Öncelikle Beni Kullandıgın İçin Teşekkür Ederim **
**Moderasyon Komutlarım Aşşadadır ** <a:assagiok:850817439783583834>`)   
     .setDescription(`
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!ban @kullanıcı**
> **Etiketlenen Kullanıcıyı Banlar **
<:mod:850788085511618600> **p!reklamengel aç/kapat**
> **Reklam Engel Açar Kapatır!**
<:mod:850788085511618600> **p!küfürengel aç / sıfırla /log /mesaj **
> **Küfür Engeli Açar / Kapatır / Küfür Logu Ayarlar / Küfür Engel Mesajı Ayarlar .**
<:mod:850788085511618600> **p!sa-as aç / kapat**
> **Biris \`sa\` Yazınca**
<:mod:850788085511618600> **p!sil <Sayı>**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
<:mod:850788085511618600> **p!mod-log #kanal / sıfırla**
> **Mod Log Kanalını Ayarlar Sıfırlar**
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
aliases: ['mod']



};
exports.help = {
name: "moderasyon"
};