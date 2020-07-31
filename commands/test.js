console.log(randomMessage)

module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        const random = ["hi", "hello", "world"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        message.channel.send(`${randomMessage}`)
    }
}
