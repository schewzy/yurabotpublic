const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
module.exports = {
run: async(client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTitle("Here's Your Neko OwO")
    .setImage(body.neko) 
    .setFooter(`Made by ${customisation.ownername}`);
    message.channel.send({embed})
    
},
    aliases: [],
    description: 'Random nekos OwO'
}