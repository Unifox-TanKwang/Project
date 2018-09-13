const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json');

bot.on("ready", () => {
  console.log("Ro is comeback!!!")
});

bot.on("message", (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

    if (command == "kick") {
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        })
        message.channel.send("kick");
    }
    else if (command == "ping") {
        message.channel.send("pong! \` " + bot.ping + "ms`\ ");
    }
    else if (command == "serverinfo") {
        let embed = new Discord.RichEmbed()
            .setTitle("Ro bot Infomation!")
            .setDescription("_________________________________________")
            .addField("Id", message.guild.id)
            .addField("Owner", message.guild.owner)
            .addField("Owner id", message.guild.ownerID)
            .addField("Roles", message.guild.size)
            .addField("Region", message.guild.region)
            .setThumbnail(message.guild.iconURL);

            message.channel.send(embed);
    }
    else if (command == "join") {
        message.channel.send("join");
    }
    else if (command == "play") {
        message.channel.send("play");
    }
    else if (command == "pubg_reting") {
        args[1]//user 이름
    }
});

bot.login(config.token);