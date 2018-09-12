const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
let prefix = '#';

client.on("ready", () => {
  console.log("Ro is comeback!!!")
});

client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "kick")) {
        message.channel.send("kick");
    }
    else if (message.content.startsWith(config.prefix + "join")) {
        message.channel.send("join");
    }
    else if (message.content.startsWith(config.prefix + "play")) {
        message.channel.send("play");
    }
    else if (message.content.startsWith(config.prefix + "pubg_rating")) {
        message.channel.send("pubg_rating");
    }
});

client.login(config.token);