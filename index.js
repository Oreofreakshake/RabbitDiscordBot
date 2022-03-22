const fs = require("fs");

const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
}); //making the client

client.commands = new Discord.Collection(); //mapping the commands setup

//--------------------------------------------
//for commands
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js")); //getting the array of the files in commmands dir

for (const file of commandFiles) {
    const command = require(`./commands/${file}`); //iterating the array

    client.commands.set(command.name, command); //setting the name for the command from the file name
}

//--------------------------------------------
//for events
const eventFiles = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

//--------------------------------------------

client.on("messageCreate", (message) => {
    //this function will run on message commands dynamically from the command dir
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    } //check for prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase(); //removing prefix and taking the command only

    if (!client.commands.has(command)) {
        return;
    }
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.log(error);
        message.reply("seems like there's an issue");
    }
});

token = `${process.env.TOKEN}`;

client.login(token);
