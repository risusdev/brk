const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Pearlys Yardım Menüsü')
    .addField('p!kullanıcı', '<:kullanici:850777538745729036> **Herkesin Kullanabilecegi Komutların Menüsü**', true)
    .addField('p!yardım', '<:mod:850788085511618600> **Sunucudaki Yetkililerin Kullanabilecegi Komutlar Menüsünü**', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)

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