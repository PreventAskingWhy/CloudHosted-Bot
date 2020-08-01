module.exports = {
    name: 'goodwaifu',
    description: "What waifu will you get?",
    execute(message, args){
        const random = ["https://cdn.discordapp.com/attachments/703844627383320586/722014446997864468/api.png", "https://tenor.com/view/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai-smile-feed-gif-15988240", "https://tenor.com/view/zero-two-002-cute-anime-wink-gif-11994868", "https://tenor.com/view/kosaki-onodera-gif-13308635", "https://tenor.com/view/cat-ears-kaguya-anime-nya-gif-14770476", "https://tenor.com/view/hey-hey-ai-hayasaaka-ai-hayasaka-hayasaka-ai-gif-17090117", "https://tenor.com/view/shiina-mashiro-gif-14721761", "https://tenor.com/view/konosuba-megumin-laughing-laugh-giggle-gif-16688519", "https://tenor.com/view/emilia-re-zero-anime-smile-gif-12793368", "https://tenor.com/view/rem-rezero-gif-5569566", "https://tenor.com/view/iroha-ore-gairu-wink-anime-gif-15249578", "https://tenor.com/view/mizuki-usami-shy-nervous-kono-bijutsubu-ni-wa-mondai-ga-aru-anime-gif-12003933", "https://cdn.discordapp.com/attachments/443007313171972097/733942855923531856/chizulisten.png"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
