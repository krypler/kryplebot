const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

module.exports.run = async (bot, message, args, con) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;

    con.query(`SELECT * FROM xp WHERE id = '${target.id}'`,(err, rows) => {

    
    let xp = rows[0].xp;
    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'xp') {
        let embed =new Discord.RichEmbed()
           // .setAuthor("")//Title
            .setTitle(`@${message.author.username} you have ${xp} xp!`)
            .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
    
        message.channel.send(embed)

    }}
    )}
    module.exports.help = {
        name: "xp",//command name
            }