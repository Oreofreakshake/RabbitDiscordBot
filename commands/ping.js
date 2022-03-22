module.exports = {
    name: "ping",
    description: "Ping!",
    execute(message, args) {
        message.channel.send("dynamic command handling works!");
    },
};
