const Discord = require('discord.js');

const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});

const prefix = '!';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send (`yooo welcome, ${member} to the official DontAskWhy serverr pls check #rules-and-info and #roles.
    https://cdn.discordapp.com/attachments/738227191828971632/738367316873445446/welcome.png`)
    
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Mai is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'salt'){
        client.commands.get('salt').execute(message, args);
    }else if(command === 'tea'){
        client.commands.get('tea').execute(message, args);
    }else if(command === 'yukino'){
        client.commands.get('yukino').execute(message, args);
    }else if(command === 'maisan'){
        client.commands.get('maisan').execute(message, args);
    }else if(command === 'prayer'){
        client.commands.get('prayer').execute(message, args);
    }else if(command === 'goodwaifu'){
        client.commands.get('goodwaifu').execute(message, args);
    }else if(command === 'chizuru'){
        client.commands.get('chizuru').execute(message, args);
    }else if(command === 'quotes'){
        client.commands.get('quotes').execute(message, args);
    }
});

letprefix = botsettings.prefix
let messageArray = message.content.split(" ")
let cmd = messageArray[0];

if(cmd === `${prefix}`){
    let embed = new Discord.messageEmbed()
    .setTitle('Reaction Roles')
    .setDescription('react to get rolesss')
    .setColor('BLUE')
    let msgEmbed = await message.channel.send(embed).
    msgEmbed.react(':mykindoflaughter:516969346833055768')
}


client.login(process.env.token);
