module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        const random = ["hi", "hello", "world"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
