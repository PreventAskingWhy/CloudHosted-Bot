module.exports = {
    name:'boop',
    description: "b o o p",
    execute(message, args){
        const random = ['https://tenor.com/view/anime-boop-nose-blush-manga-gif-14746195', 'https://tenor.com/view/boop-rascal-does-not-dream-of-bunny-girl-senpai-anime-touch-nose-poke-gif-17682170']
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}