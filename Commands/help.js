const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");
const jquery = require("jquery")


module.exports.run = async (bot, message, args) => {
    let patreon = href= "https://www.patreon.com/kryptoniks_esports"> 'Donate'  
    let donatelink = `${patreon}`       
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let reply = message.author.username;
    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'help') {
        let embed =new Discord.RichEmbed()
            .setAuthor('@'+ reply)//Title
            .setDescription('you can view a list of my commands in the link below, or leave a suggestion! More commands to come! ')//description
            .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
            //.setFooter(donatelink + ' | Join Test Server')
            //need to find out how to make the code above show the string but be a link
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "help",//command name
            }