const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    once: false,
    execute(member) {
        const channel = member.guild.channels.cache.find(
            (c) => c.name === "door"
        );

        const memberusername = member.user.username;

        const leaveResponses = [
            "They just fucking bailed",
            "Why does everyone leave me...",
            "Your loss man",
            "Guess they have commitment issues",
            "Their pizza had pineapples on it",
            "Sad to see you go, you will surely not be missed",
            "Was it something I said?",
        ];

        const randomleaveResponse = Math.floor(
            Math.random() * leaveResponses.length
        ); //choosing a random response

        const leaveEmbed = new MessageEmbed()
            .setColor("#e6c366")
            .setTitle("BYE")
            .setAuthor({
                name: `${memberusername}`,
            })
            .setDescription(leaveResponses[randomleaveResponse])
            .setThumbnail(member.user.displayAvatarURL({ format: "jpg" }))

            .setTimestamp()
            .setFooter({
                text: "hope you had fun!",
                iconURL:
                    "https://cdn.discordapp.com/icons/585411891447463952/9f859c57747e1ab7b52db277f36b8a10.webp?size=240",
            });

        channel.send({ embeds: [leaveEmbed] });
    },
};
