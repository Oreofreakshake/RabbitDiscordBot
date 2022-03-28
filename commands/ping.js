module.exports = {
    name: "ping",
    description: "Ping!",
    execute(message, args) {
        const ping = Math.round(Date.now() - message.createdTimestamp);

        if (ping > 190) {
            message.channel.send(`ping is around ${ping}ms, It's horrible`);
        } else if (ping > 150 && ping < 190) {
            message.channel.send(`ping is around ${ping}ms, barely survivng`);
        } else if (ping > 100 && ping < 150) {
            message.channel.send(`ping is around ${ping}ms, It's fine I guess`);
        } else if (ping > 50 && ping < 100) {
            message.channel.send(`ping is around ${ping}ms, you're fine`);
        } else if (ping < 50) {
            message.channel.send(`ping is actually good, it's ${ping}ms`);
        }
        if (ping < 5) {
            message.channel.send(
                `ping is ${ping}ms, damn that's really good, get on valorant`
            );
        }
    },
};
