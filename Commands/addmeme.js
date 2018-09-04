const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let reply = message.author.username;

    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'addmeme') {
        let embed =new Discord.RichEmbed()
            .setAuthor("Thanks @" + reply)//Title
            .setDescription("meme deposited. **+xp**")//description
            .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
            console.log(reply + message)
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "addmeme",//command name
            }