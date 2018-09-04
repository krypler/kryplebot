const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

var roll = Math.floor(Math.random() * 6) + 1;

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let reply = message.author.username;

    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'roll') {
        var roll = Math.floor(Math.random() * 6) + 1;
        let embed =new Discord.RichEmbed()
            .setAuthor("Roll")//Title
            .setDescription('@' + reply + " You rolled a " + roll)//description
            var roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send(embed)

    }}

    module.exports.help = {
        name: "roll",//command name
            }