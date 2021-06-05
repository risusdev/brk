const Discord = require ("discord.js")

exports.run = async (client, message, args) => {


    let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send("**İsteğini Yazar Mısın ? Örnek Kullanım; -öneri <öneri>**")



    const mesaj = new Discord.MessageEmbed()
    .setTitle("Başarılı !")
    .setDescription("**Önerin Başarıyla Sahibime İletildi !**")
    .setColor("#30FD00")
    message.channel.send(mesaj)


    const öneri = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri !")
    .addField("Öneriyi Gönderen Kullanıcı;", message.author)
    .addField("Öneri;", istek)
    client.channels.cache.get("850708521888120862").send(öneri)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istek'],
    permLevel: 0
}

exports.help = {
    name: "öneri",
    description: "Belirlediğiniz Kanala Öneri Gönderir.",
    usage: "-öneri"
} //Plasmic Code - FadeAway