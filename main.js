const Discord = require('discord.js');
const fs = require('fs');
//const jsonfile = require('jsonfile');

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});


const prefix = '!';

 
client.commands = new Discord.Collection();
 
client.on("guildMemberAdd", member => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Welcomeee")
        .setDescription(`yooo ${member} just joinedd`)
        .setColor("1f2bad")
        .addField("Reminder", "Make sure to check #rules-and-info and #roles")
        .setImage("https://cdn.discordapp.com/attachments/738227191828971632/738367316873445446/welcome.png")
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send({embed});
    
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Mai is online!');
});

var stats = {};
//if (fs.existsSync('stats.json')) {
    //stats = jsonfile.readFileSync('stats.json');
//}

client.on('message', message =>{
    if (message.author.id == client.user.id)
        return;

    if (message.guild.id in stats === false) {
        stats[message.guild.id] = {};
    }
    
    const guildStats = stats[message.guild.id];
    if (message.author.id in guildStats === false){
        guildStats[message.author.id] = {
            xp: 0,
            level: 0,
            last_message: 0
        };
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    const userStats = guildStats[message.author.id];
    userStats.xp += getRandomInt(15, 25);

    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100; 
    if (userStats.xp >= xpToNextLevel) {
        userStats.level++;
        userStats.xp = userStats.xp - xpToNextLevel;
        //message.channel.send(gg);
    }

    //jsonfile.writeFileSync('stats.json', stats);

    //console.log(message.author + ' now has ' + userStats.xp)
    //console.log(xpToNextLevel + ' XP needed to next level. ');

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
    }else if(command === 'boop'){
        client.commands.get('boop').execute(message, args);
    }
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    
    let prefix = '!'
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd === `${prefix}reactions`){
        let embed = new Discord.MessageEmbed()
        .setTitle('Reaction Roles')
        .setDescription('React to not see any weeb or anime things')
        .setColor('BLUE')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react(':wewin:687298611352043552')
    }
})

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();

    if (user.client) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "720171619414310953") {
        if (reaction.emoji.name === ':wewin:687298611352043552'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("709234594465054781")
        }
    } 
})


client.login(process.env.token);
