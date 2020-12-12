const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
module.exports = {
run: async(client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/pat");
    
    const embed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTitle(`${message.author.username}: There there`)
    .setImage(body.url) 
    .setFooter(`Made by ${customisation.ownername}`);
    message.channel.send({embed})
},
    aliases: [],
    description: 'There there'
}