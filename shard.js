const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const ayarlar = require('./config.json');
const captain = new Discord.ShardingManager('./bot.js', {
    totalShards: 2,
    token: (process.env.token)
});

captain.on('shardCreate', shard => {
  console.log(`${shard.id+1} IDli Başlatıldı ve Kullanıma Hazır.`)
    const webhook = new Discord.WebhookClient("850734190957690910","https://discord.com/api/webhooks/850734550124724225/raRMQ4yI1bpFBuM7HCDMk8Fx3G4kUynjvCYl0Aw0C-nG4m_CSfuczEpUYOp0yV2nt44Z")
    webhook.send(`Shard **${shard.id+1}/${shard.id+1} [Bağlanılıyor]** :bekle: \n Pearlys Discord'a Bağlanıyor.`)
    setTimeout(() => {
  const webhook = new Discord.WebhookClient("850734190957690910","https://discord.com/api/webhooks/850734550124724225/raRMQ4yI1bpFBuM7HCDMk8Fx3G4kUynjvCYl0Aw0C-nG4m_CSfuczEpUYOp0yV2nt44Z")
  webhook.send(`Shard **${shard.id+2}/${shard.id+2} [Bağlanıldı]** :tamam: \nPearlys Discord'a Bağlandı ve Hazır.`)
  }, 3000)
});
// WebHook Oluşturup ID ve token gir
setTimeout(() => {
    captain.broadcastEval("process.exit()");
}, 8600000);
captain.spawn();