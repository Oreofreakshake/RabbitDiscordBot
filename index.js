const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
    const channel = client.channels.cache.get("926987961868890162");
    const text = `<@!442629841716772864> bought me back online!`;
    console.log("ready");
    channel.send(text);
});

token = `${process.env.TOKEN}`;

client.login(token);
