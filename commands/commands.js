module.exports = {
    name: 'commands',
    description: "list of commands",
    execute(message, args){
        message.channel.send('!boop\n!chizuru\n!goodwaifu\n!maisan\n!prayer\n!quotes\n!salt\n!tea\n!yukino');
    }
}