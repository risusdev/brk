const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
.setAuthor(`Pearlys Yardım Menüsü`, client.user.avatarURL())
.setColor("#09f3f3") 
  .setDescription(`**Selam Knk <@${message.author.id}> **
**İlk Öncelikle Beni Kullandıgın İçin Teşekkür Ederim **
**Komutlarım Aşşadadır ** <a:assagiok:850817439783583834>`)   
    .addField('p!kullanıcı', '<:kullanici:850777538745729036> **Kullanıcı yardım menüsünü gösterir.**', true)
    .addField('p!moderasyon', '<:mod:850788085511618600> **Moderasyon yardım menüsünü gösterir.**', true)
    .addField('p!davetsistemi', '<:davet:850789805679181844> **Davet sistemi yardım menüsünü gösterir.**', true)
    .addField('p!kayıtsistemi', '<a:kayit:850809778418221126> **Kayıt sistemi yardım menüsünü gösterir.**', true)
    .addField('p!korumasistemi', '<a:guard1:850810781012066415> **Koruma sistemi yardım menüsünü gösterir.**', true)
    .addField('p!logosistemi', '<a:logo:850814040665882664> **Logo sistemi yardım menüsünü gösterir.**', true)
    .addField('p!botlistsistemi', '<:botlist:850815022531870731> **Bot list sistemi yardım menüsünü gösterir.**', true)
    .addField('p!öneri', '<a:siyahalev:850818052308467722> **Botun Sahibine Öneride Bulunursunuz**', true)
    .addField('p!davet', '<a:siyahalev:850818052308467722> **Botun Güncel İstatistiklerini Gösterir**', true)
.setImage(`https://cdn.discordapp.com/attachments/850789768651603978/850815304989016064/standard.gif`)
.setFooter("Pearlys", message.author.avatarURL())
.setTimestamp()
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};