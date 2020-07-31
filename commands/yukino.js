module.exports = {
    name: 'yukino',
    description: "Praise Yukino!",
    execute(message, args){
        const random = ["https://i.redd.it/myz0gso6o7d51.jpg", "https://cdn.discordapp.com/attachments/703844627383320586/722014446997864468/api.png", "https://cdn.discordapp.com/attachments/703844627383320586/722012598106718228/4d05bb09-c46d-4916-8c7f-0294c280ef15.png"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
