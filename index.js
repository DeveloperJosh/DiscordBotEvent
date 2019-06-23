const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const bot = new Discord.CLient({disableEveryone: true})
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
  console.log(`${bot.user.username} Is now online!`);
  bot.user.setActivity("To your commands!", {type: "LISTENING"})
  bot.user.setStatus("online", {type: "online"}
 });
 
 bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Joined the server!`};
  
  let welcomechannel = member.guild.channels.find(`name`, "welcome");
  welcomechannel.send(`Welcome ${member} has joined the server!, Have a wonderful time here on this server and discord itself!`)
 });
 
 bot.on("guildMemberRemove", async member => {
  
    console.log(`${member.id} left the server.`);
    
    let welcomechannel = member.guild.channels.find(`name`, "chat");
    welcomechannel.send(`${member} Has left the server. You will be missed.`)
   });
   
   bot.on("channelCreate", async channel =>{
   
    console.log(`${channel.name} has been created.`);
    
    let sChannel = channel.guild.channels.find(`name`, "logs");
    sChannel.send(`${channel}  has been created on the server! ✅`);
    
   });
   
   bot.on("channelDelete", async channel =>{
    
    console.log(`${channel.name} has been deleted.`);
    
    let sChannel = channel.guild.channels.find(`name`, "logs");
    sChannel.send(`${channel.name} has been deleted ❌`);

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);



    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setFooter("Version Beta")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created on", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Region", message.guild.region)
        .addField("Humans", memberCount)
        .addField("Total members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }




    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setTitle("Pipimi Info")
        .setFooter("Version Beta")
        .setColor("#3e15f2")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Bot description", "This bot was build off of Catnopat and an unreleased version of popuko, All Newer versions of popuko runs on here first before released to the public")
        .addField("Version", "Beta")
        .addField("Bot invite", "Pipimi doesn't have a bot invite as it's a unreleased bot")
        .addField("Support server", "https://discord.gg/Q28WvKZ");

        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}updates`){

        let uicon = bot.user.displayAvatarURL;
        let uembed = new Discord.RichEmbed()
        .setTitle("Pipimi and Popuko updates")
        .setFooter("Version beta")
        .setColor("#4d1ff2")
        .setThumbnail(uicon)
        .addField("Pipimi Updates And More", "Pipimi has changed it's status and a few more commands are getting added ")
        .addField("Popuko Updates And More", "Popuko is currenly down as it is experiencing a few problems with it's coding and also getting hosted")
        .addField("More coming soon!", "Check again later!");

        return message.channel.send(uembed);
    }

    if(cmd === `${prefix}invite`){

        let iicon = bot.user.displayAvatarURL;
        let iembed = new Discord.RichEmbed()
        .setTitle("Bot invite")
        .setFooter("Version 1.0")
        .setColor("#4d1ff2")
        .setThumbnail(iicon)
        .addField("Please note this bot is built off of github by Catツ#0001 and Blue#6268")
        .addfield("github:" "https://github.com/Catdontpat/DiscordBotEvent;

        return message.channel.send(iembed);
    }


    if(cmd === `${prefix}ping`){
        return message.channel.send("Pong")
    }

    if(cmd === `${prefix}test`){
        return message.channel.send("Test complete!")
    }

    

});

bot.login(botconfig.token);
    
    
    
    
