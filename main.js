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
    }
});

var emojiname = [":chizu:739077537824637001"],
    rolename = ["&739076195609477130"];

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("message", e => {
    if (e.content.startsWith(prefix + "reaction")) {
        if (!e.channel.guild) return;
        for (let o in emojiname) {
            var n = [e.guild.emojis.find(e => e.name == emojiname[o])];
            for (let o in n) e.react(n[o])
        }
    }
});

client.on("messageReactionAdd", (e, n) => {
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).addRole(i).catch(console.error)
            }
});

client.on("messageReactionRemove", (e, n) => {
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).removeRole(i).catch(console.error)
            }
});


client.login(process.env.token);
