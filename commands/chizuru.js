module.exports = {
    name: 'chizuru',
    description: "Praise Chizuru!",
    execute(message, args){
        const random = ["https://i.imgur.com/8FI4lIO.jpg", "https://i.redd.it/t8vff3gp12c51.jpg", "https://preview.redd.it/m0qea4q1cde51.jpg?width=640&crop=smart&auto=webp&s=6646d5e6ba12e442533275302b5f826f910253bb"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
