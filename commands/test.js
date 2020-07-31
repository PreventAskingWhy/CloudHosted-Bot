const { description } = require("./tea");

const messages = ["message one", "message two", "message three", "message four"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

console.log(randomMessage)

module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        message.channel.send(randomMessage)
    }
}
