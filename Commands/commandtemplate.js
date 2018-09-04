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
    if(command === prefix + 'testes') {
        let embed =new Discord.RichEmbed()
            .setAuthor("title")//Title top line can also add link
            .setTitle("second title")//title second line link with .setURL()
            //.setURL("")links to setTitle field
            .setDescription("descrip")//description text appears under title field
            .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "testes",//command name
            }