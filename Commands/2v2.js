const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");
var v2signups = "https://challonge.com/tournaments/signup/DDWr5EOg4r#";
   //2v2 
module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

    if(!command.startsWith(prefix)) return;
    if(command === prefix + '2v2') {
        let embed =new Discord.RichEmbed()
        .setTitle('Kryptoniks 2v2 Brawl Fest Registration')
        // Set the color of the embed
        .setColor(0xFF0000)
        //  set link   
        //.setURL(v2signups)
        .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
        .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
        //Set the main content of the embed
        .setDescription('the next 2v2 tourament is on September 5th sign up here! ' + v2signups);
      // Send the embed to the same channel as the message
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "2v2",//command name
            }