const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    var highlights =[
        "https://gfycat.com/gifs/detail/WeightyPoisedBluebird",
     "https://gfycat.com/gifs/detail/MemorableBetterDuck",
     "https://gfycat.com/gifs/detail/SilkyHardtofindAyeaye",
     "https://gfycat.com/gifs/detail/SpectacularJubilantAnole",
     "https://gfycat.com/gifs/detail/SmoggyBronzeDogwoodclubgall",
     "https://gfycat.com/gifs/detail/RegularPerfumedChickadee",
     "https://gfycat.com/gifs/detail/SingleEllipticalItalianbrownbear",
     "https://gfycat.com/gifs/detail/LazyEnlightenedFruitbat",
     "https://gfycat.com/gifs/detail/JauntyImprobableCivet",
     "https://gfycat.com/gifs/detail/FreeShamelessAntelope",
    
     ];
     //gifs from gfycat
    var randhighlight = highlights[Math.floor(Math.random() * highlights.length)];
    
    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'highlight') {
        let embed =new Discord.RichEmbed()
    
          // Set the title of the field
          .setTitle(' Boom Check this one out! ')
          // Set the color of the embed
          .setColor(0xFF0000)
              //Set the main content of the embed
              .setFooter('Kryptoniks ESports' , 'https://s3.amazonaws.com/challonge_app/users/images/003/045/456/large/kryptoniksavatar1x1.png?1535059896')
          .setDescription(" ");
        // Send the embed to the same channel as the message
        message.channel.send(embed);
        message.channel.send(randhighlight);
        

    }}

    module.exports.help = {
        name: "highlight",//command name
            }