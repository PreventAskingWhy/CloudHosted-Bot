module.exports = {
    name: 'commands',
    description: "list of commands",
    execute(message, args){
        message.channel.send('**List of commands:**\n!boop\n!chizuru\n!waifu\n!maisan\n!prayer\n!quotes\n!salt\n!tea');
    }
}