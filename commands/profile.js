const Discord = require ('discord.js');

module.exports = {
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
                .setTitle(`_${message.author.tag}_`)
                .addField('Username', message.author, true)
                .addField('ID', message.author.id, true)
                .addField('Account Created',  `${message.author.createdAt}`)
                .addField('Playing/Watching/Streaming', message.author.presence.activities)
                .addField('Status', message.author.presence.status)
                .setColor(0xFF0000)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter('Made by Toru | Subscribe to Yura Tadashi')
                message.channel.send(embed);
    },

    aliases: [],
    description: 'Show user profile'
}
