module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        const channel = client.channels.cache.get("926987961868890162");
        const text = `${process.env.OWNER} bought me back online!`;
        console.log("client logged in");
        channel.send(text);
    },
};
