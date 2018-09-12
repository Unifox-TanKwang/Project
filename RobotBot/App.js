const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = '#';

client.on("ready", () => {
  console.log("Ro is comeback!!!")
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login("NDg5MjIzMTA0MTYyNDMwOTc4.DnnuYA.9_gyhJzaht5IwZfYzOUbcExZ2Jw");