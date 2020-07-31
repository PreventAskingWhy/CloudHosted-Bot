const random = ["hi", "hello", "world"]
const randomMessage = random[Math.floor(Math.random() * messages.length)];

console.log(`${randomMsg}`)

module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        message.channel.send(`${randomMsg}`)
    }
}
