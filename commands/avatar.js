const Discord =  require('discord.js');
const customisation = require('../customisation.json');
module.exports = {
    run: async(client, message, args) => {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (message.mentions.users.size > 0) {
          const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle(`Avatar for ${message.mentions.users.first().username}:`)
            .setImage(`${avatar}`)
            .setFooter(`Made by ${customisation.ownername}`);
            message.channel.send({embed});
        } else {
          const embed = new Discord.MessageEmbed()
          .setColor(0xFF0000)
          .setTitle(`Avatar for ${message.author.username}:`)
          .setImage(`${avatar + "?size=2048"}`)
          .setFooter(`Made by ${customisation.ownername}`);
          message.channel.send({embed});
        }
       
 },
    aliases: [],
    description: 'Show user avatar'

}
