const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

var roles =[
    "@Brute*      (earned by playing >1 tournaments)" ,
    "@Brawler*      (earned by playing >3 tournaments)" ,
    "@Legend      (earned by playing >5 tournaments)" ,
    "@Titan      (earned by playing >10 tournaments)",
    "@Tournament Champ" ,

];
//earnable roles

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'earnable') {
        let embed =new Discord.RichEmbed()
            .setAuthor("**The roles you can now earn are....                                                                                                     **(roles with (*) can also be earned just by being active in the server) ')")//Title
            .setColor(0xFF0000)
                 //Set the main content of the embed
            .setDescription(roles)
    // Send the embed to the same channel as the message
    .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip

    .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
            
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "earnable",//command name
            }