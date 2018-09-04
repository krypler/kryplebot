const botSettings = require("../botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");
const challonge = require('challonge');
const client = challonge.createClient({
    apiKey: botSettings.applekey

});

module.exports.run = async (bot, message, args,) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    
    if(!command.startsWith(prefix)) return;
    if(command === prefix + 'challonge') {

        client.participants.index({
            id: 'Kryptoniks',
            callback: (err, data) => {
                console.log(err, data[5]);

                let dfd = data[5];//picks the array we want from api

                console.log(dfd.participant.name)

                //let id = Number(args[0]);
                
               // let entry = (post => post.id === id)
                //console.log(entry)

        let embed =new Discord.RichEmbed()
            .setAuthor("title")//Title top line can also add link
            .setTitle("second title")//title second line link with .setURL()
            //.setURL("")links to setTitle field
            .setDescription(data[0].name)//description text appears under title field
            .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
        //message.channel.send(data)
    }
});
    }}

    module.exports.help = {
        name: "challonge",//command name
            }