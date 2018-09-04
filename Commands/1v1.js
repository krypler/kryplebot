const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

var v1signups = "https://challonge.com/tournaments/signup/J21a5dPTAd";
    //1v1

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

    if(!command.startsWith(prefix)) return;
    if(command === prefix + '1v1') {
        let embed =new Discord.RichEmbed()
        .setTitle('Kryptoniks Brawl Fest Registration')
        // Set the color of the embed
        .setColor(0xFF0000)
        //  set link   
        //.setURL(v1signups)
            //Set the main content of the embed
        .setDescription('the next 1v1 tourament is on September 10th sign up here! ' + v1signups)
        .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
              // Send the embed to the same channel as the message
        .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
      message.channel.send(embed);
      //message.reply('the next 1v1 tourament is on September 10th sign up here ' + v1signups );
    
    }}

    module.exports.help = {
        name: "1v1",//command name
            }