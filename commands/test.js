const random = ["hi", "hello", "world"]
const randomMsg = random[Math.floor(Math.random() * random.length) + 1];

console.log(random)

module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        message.channel.send(`${randomMsg}`)
    }
}
