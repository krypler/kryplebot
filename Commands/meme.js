const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");
var memes =[
    "https://i.redd.it/iajia3rdlarz.png" ,
    "https://pm1.narvii.com/6549/4a6b5fd386699c96b17623e451212faa80e22b1e_hq.jpg" ,
    "https://i.redd.it/tsnjykdk3sqy.jpg" ,
    "https://i.redditmedia.com/6KW-Pj40mnG-afd9NTrvB3vUAYQWGwXCNy3LsmZMncY.png?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=036ee43cd871dfcaeaf85cd70c480b19" ,
    "https://i.redd.it/hvul1vxioaj11.png" ,
    "https://i.redd.it/3soii8mh25j11.png" ,
    "https://media.discordapp.net/attachments/244579546253361152/485280863647432704/unknown.png?width=413&height=469" ,
    "https://cdn.discordapp.com/attachments/244579546253361152/484838206483726337/jpdt02u6am8y.png" ,
    "https://cdn.discordapp.com/attachments/244579546253361152/484838150099959818/32374047_628785247462199_2126567977607233536_n.jpg" ,
    "https://media.discordapp.net/attachments/244579546253361152/484837917651632129/images_7.jpeg" ,
   ]



module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    var memes =[
        "https://i.redd.it/iajia3rdlarz.png" ,
        "https://pm1.narvii.com/6549/4a6b5fd386699c96b17623e451212faa80e22b1e_hq.jpg" ,
        "https://i.redd.it/tsnjykdk3sqy.jpg" ,
        "https://i.redditmedia.com/6KW-Pj40mnG-afd9NTrvB3vUAYQWGwXCNy3LsmZMncY.png?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=036ee43cd871dfcaeaf85cd70c480b19" ,
        "https://i.redd.it/hvul1vxioaj11.png" ,
        "https://i.redd.it/3soii8mh25j11.png" ,
        "https://media.discordapp.net/attachments/244579546253361152/485280863647432704/unknown.png?width=413&height=469" ,
        "https://cdn.discordapp.com/attachments/244579546253361152/484838206483726337/jpdt02u6am8y.png" ,
        "https://cdn.discordapp.com/attachments/244579546253361152/484838150099959818/32374047_628785247462199_2126567977607233536_n.jpg" ,
        "https://media.discordapp.net/attachments/244579546253361152/484837917651632129/images_7.jpeg" ,
       ]
    
    var randmeme = memes[Math.floor(Math.random() * memes.length)];

    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'meme') {
        let embed =new Discord.RichEmbed()
        .setAuthor("You wanted this..?")//Title
        .setImage(randmeme)

    message.channel.send(embed)
    }}

    module.exports.help = {
        name: "meme",//command name
        author: "krypler",//authorname
            }