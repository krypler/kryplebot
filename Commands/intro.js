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
    if(command === prefix + 'intro') {
        let embed =new Discord.RichEmbed()
            .setAuthor("Hey thanks for joining!")//Title
            .setDescription("Thanks for joining you can find links to tournaments and bot commands in #links-and-such also soon you can earn cool roles by participating in events and being active in the server. !earnable to see em!")//description
            .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
            message.channel.send(embed)

    }}

    module.exports.help = {
        name: "intro",//command name
            }