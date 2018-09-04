const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'donate') {
        let embed =new Discord.RichEmbed()
            .setAuthor("You want to donate? You kind kind soul..")//Title
            .setDescription("https://www.patreon.com/kryptoniks_esports")//description
            .addField("Links" ,"[💫Join the test server](https://discord.gg/akqx8vM)  | [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
            .setFooter('Donators receive Sponsor role' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
    
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "donate",//command name
            }