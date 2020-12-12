module.exports = {
    run: async(client, message, args) => {
        try {
            const msg = await message.channel.send("**Pinging**");
            msg.edit(`API Latency: ${msg.createdTimestamp - message.createdTimestamp}ms \nLatency: ${Math.round(client.ws.ping)}ms`);
          } 
            catch(err) {
            console.log(err);
          }
        },
    
    aliases: [],
    description: 'Check PING'
}