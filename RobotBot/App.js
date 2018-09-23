const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
const config = require('./config.json');
const Youtube = require('discord-youtube-api');
const youtube = new Youtube("");
const fs = require("fs");

var servers = {};

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
        console.log(args[0]);
        console.log(args[1]);
        console.log(args[2]);
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
        if(message.member.voiceChannel) {
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Successfully Joined!");
                    })
            }
        } else {
            message.reply('failed!')
        }
    }
    else if (command == "leave") {
        if(message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        } else {
            message.reply("help! I don't leave!");
        }
    }
    else if (command == "pubg_rating") {
        //args[1]//user 이름
    }
    else if (command == "play") {
        console.log(args[0]);
        //ytdl(args[0], {filter: (format) => format.container === "mp4"})
            //.pipe(fs.createWriteStream('video.mp4'));
        var voiceChannel = message.member.voiceChannel;
        const streamOptions = {seek: 0, volume: 1};
        voiceChannel.join()
            .then(connection => {
                const stream = ytdl(args[0], {filter: "audioonly"});
                const dispatcher = connection.playStream(stream, streamOptions);
            })
            .catch(console.error);
    }
    else if (command == "skip") {
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
    }
    else if (command == "stop") {
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
});

bot.login(config.token);