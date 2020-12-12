const Discord = require ('discord.js');
const bot = new Discord.Client();  
const token = 'NzIyMzg3NjY4NzQyMTc2ODUw.XuiXIQ.GYUw9toMqOpotFDGPySDYutB8K4';
const PREFIX = 'yura';

bot.on('ready', () =>{
    console.log(`Hi, ${bot.user.username} is now online!`);
    
    bot.user.setPresence({
       status: "online",
       activity: {
           name: "Toru",
        type: "WATCHING"
        }
    });
})

bot.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});

bot.on('message', async message=>{

    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){
        case 'halo':
            message.reply('**Halo!**')
            break;
        case 'tasya':
            message.channel.send('Yura x Tasya selamanya ><');
            break;
        case 'tolol':
            message.reply('Hah tolol? udah punya Tasya dibilang tolol>:(');
            break;
        case 'yt':
            message.channel.send('https://www.youtube.com/channel/UCxU1zr5kfQGGKTpWNxgQhDg')
            break;
        case 'facebook':
            message.channel.send('https://www.facebook.com/yuratadashi147');
            break;
        case 'instagram':
            message.channel.send('https://www.instagram.com/yura_rcm/?hl=en')
            break;
        case 'profile':
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
            break;
        case 'ping':    
            const msg = await message.channel.send(`🏓 Pinging....`);
            
            msg.edit(`🏓 Pong! \nAPI Latency: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms \nLatency: ${Math.round(bot.ws.ping)}ms`);
            break;

            
    }

})



bot.login(token);
