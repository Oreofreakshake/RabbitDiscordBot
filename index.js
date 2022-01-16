const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
    console.log("ready");
});

token = `${process.env.TOKEN}`;

client.login(token);
