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
    if(command === prefix + 'register') {

        client.participants.create({
            id: 'kryptoniks3',
            participant: {
                name: args[0],
                email: args [1]
                
                
            },
            callback: (err, data) => {
                console.log(err, data);

                //let dfd = data[2];
               // let btw = dfd
              //  console.log(dfd.tournament.signUpUrl)

                //let id = Number(args[0]);
                
               // let entry = (post => post.id === id)
                //console.log(entry)
                
        let embed =new Discord.RichEmbed()
            //.setAuthor("title")//Title top line can also add link
            .setTitle("Kryptoniks Brawlfest #3")//title second line link with .setURL()
            //.setURL("")links to setTitle field
            .setDescription(`You're signed up with the username **${args[0]}** and the Email address **${args[1]}**! Make sure you check your email for the confirmation link! The tournament starts Sept 10th! You can find the bracket here! (subject to change) https://challonge.com/kryptoniks3.svg `)//description text appears under title field
           // .setImage(btw)
            .addField("Links" ,"[🌎Donate](https://www.patreon.com/kryptoniks_esports)  |  [💫Join the test server](https://discord.gg/akqx8vM)  |  [❗command list](https://pastebin.com/uSAaNTBE)")//name first then descrip
        message.channel.send(embed)
    }
});
    }}

    module.exports.help = {
        name: "register",//command name
            }