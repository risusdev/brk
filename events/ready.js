const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../config.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"Pearlys Bot Yeniden",
"p!yardım & p!moderasyon",
"İstek - Öneri - Şikayet İÇin Destek Sunucuna gelmeyi Unutmayın [p!öneri]",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'WATCH' ,  url: '' })
}, 1000);
    console.log(`Pearlys Aktif Giriş yapıldı!`);
}