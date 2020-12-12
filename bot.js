require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});
const PREFIX = process.env.PREFIX;
const { registerCommands, registerEvents } = require('./utils/registry');
(async () => {
    client.login(process.env.BOT_TOKEN);
client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');
})();
const activities_list = [
    "with the &help command.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ];

client.on('ready', () => {
    console.log(`${client.user.username} Online!`);
    
    
client.user.setPresence({
        status: "online",
        activity: {
            name: "𝙍𝙚𝙙𝙎𝙦𝙪𝙖𝙙 server",
         type: "WATCHING"
         }
     });
});

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName)
const checkPermissionRole = (role) => role.permissions.has('ADMINISTRATOR') || role.permissions.has('KICK_MEMBERS') || role.permissions.has('BAN_MEMBERS') || role.permissions.has('MANAGE_GUILD') || role.permissions.has('MANAGE_ROLES');
const rolldice = () => Math.floor(Math.random() * 6) + 1;
client.on('message', function(message) {
    if(message.author.bot) return;
    if(isValidCommand(message, "halo"))
        message.reply('Halo!');
    else if(isValidCommand(message, "rolldice"))
        message.reply("rolled a " + rolldice());
    else if(isValidCommand(message, "add")) {
        console.log(message.content);
        let args = message.content.toLowerCase().substring(5);
        let { cache } = message.guild.roles;
        let role = cache.find(role => role.name.toLowerCase() === args);
        console.log(cache);
        if(role) {
            if(message.member.roles.cache.has(role.id)) {
                message.channel.send("You already have this role!");
                return;
            }
            if(checkPermissionRole) {
                message.channel.send("You cannot add yourself to this role.");
            }
            else {
                message.member.roles.add(role)
                    .then(member => message.channel.send("You were added to this role!"))
                    .catch(err => {
                        console.log(err);
                        message.channel.send("Something went wrong. . . ");
                    });
            }
        }
        else {
            message.channel.send("Role not found!");
        }
    }
});
