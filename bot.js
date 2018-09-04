const botSettings = require("./botsettings.json");
const Discord = require("discord.js")
const prefix = botSettings.prefix;
const bot = new Discord.Client
bot.commands = new Discord.Collection();
const fs = require("fs");

fs.readdir("./commands", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("no commands to load dummy!");
        return;
    }
    console.log('loading ' + jsfiles.length + ' commands!');
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props)
    });
});//reads commands from command folder rather thatn this file


bot.on("ready", () => {
    console.log((bot.user.username) + " is running!")
});//ready message

bot.on("message", async message => {
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    console.log(command + " " + message.author.username); 
       
   // 
    
});


bot.login(botSettings.token);
//bot token in botsettings.json