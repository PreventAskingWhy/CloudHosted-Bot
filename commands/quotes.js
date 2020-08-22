module.exports = {
    name: 'quotes',
    description: "Some good dank quotes",
    execute(message, args){
        const random = ['Memes are the solution to all problems: Loneliness, crippling depression, and Capitalism.', `"I have a dream, that one day people will not be judged by their skin, but by the number of accounts they botted DontAskWhy's subscribers with."-Martin Luther King Jr.`, `"If someone asks you to spell 'icup', spell it e-y-e-c-u-p. This will make sure you don't look like a weirdo.” -Steven Hawking`, `“If you put boats on your shoes, you can walk on water.” -Jesus`, `"If you add the words "Like if you agree" at the end of a comment, you will go to hell." -Jesus`, `"If you get sponsored by Raid Shadow Legends, or if you play Raid Shadow Legends, you are officially a slave." -Adolf Hitler`, `"If something gets in your way, nuke it." -Kim Jong Un`, `"Bullying kids is fun." -megopro2016`, `"If something doesn't go my way, I sue it." -DontAskWhy 2020`, `"Merry Christmas you disgusting farmer." -BeasttrollMC`, `"MaiBot is the best bot" -MaiBot`, `"I'm proud of you, son" -Imaginary Dad`, `"HOLY POGGERS" -BeasttrollMC`, `"Fun things die if they eat dog food" -Some Manga Translator`]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
