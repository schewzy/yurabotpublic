const Discord = require("discord.js");
module.exports = {
run: async(client, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Command List`)
            .addFields({ name: 'Prefix', value: '```?```'})
            .addFields({ name: '🛠️ Moderation 🛠️', value: '```kick ban mute unmute addrole delrole addreactions editreaction prune```'})
            .addFields({ name: '🎲 Games 🎲', value: '```roll```'})
            .addFields({ name: '📚 Useful 📚', value: '```profile avatar ping neko nekogif```'})
            .addFields({ name: '😄 Roleplay 😄', value: '```cuddle hug pat kiss slap poke tickle```'})
            .addFields({ name: '🔞 NSFW 🔞', value: '```no more nsfw, stay pure kiddo!```'})
            .setColor(0xFF0000)
            message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor(0xFF0000)

        message.channel.send(embed);
    }}
},
    aliases: [],
    description: 'HELP ME'

}
