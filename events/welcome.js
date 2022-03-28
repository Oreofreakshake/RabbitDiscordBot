const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    execute(member) {
        const channel = member.guild.channels.cache.find(
            (c) => c.name === "door"
        );
        
        const memberusername = member.user.username;

        const welcomeResponses = [
            "Hope you brought some pizza, and it better not have pineapples on that shit",
            "They're here to chew ass and kick gum, and they're all out of gum",
            "Oh it's just you",
            "Nice to see you come out of your basement for once",
            "Hope you brought your sister",
            "You can hide from your responsibilities here",
        ]; 

        const randomResponse = Math.floor(
            Math.random() * welcomeResponses.length
        ); //choosing a random response

        const welcomeEmbed = new MessageEmbed()
            .setColor("#e6c366")
            .setTitle("WELCOME")
            .setAuthor({
                name: `${memberusername}`,
            })
            .setDescription(welcomeResponses[randomResponse])
            .setThumbnail(member.user.displayAvatarURL({ format: "jpg" }))

            .setTimestamp()
            .setFooter({
                text: "have fun!",
                iconURL:
                    "https://cdn.discordapp.com/icons/585411891447463952/9f859c57747e1ab7b52db277f36b8a10.webp?size=240",
            });

        channel.send({ embeds: [welcomeEmbed] });
    },
};
