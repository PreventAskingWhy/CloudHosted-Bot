module.exports = {
    name: 'maisan',
    description: "Praise Senpai!",
    execute(message, args){
        const random = ["https://tenor.com/view/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai-anime-gif-15988258", "https://preview.redd.it/77b7qnf9a6851.png?width=640&crop=smart&auto=webp&s=092f0a212b2b928f25570d0680c8be3f6fa438d2", "https://tenor.com/view/bunny-girl-senpai-cute-pretty-anime-mai-sakurajima-gif-17008133", "https://tenor.com/view/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai-smile-feed-gif-15988240", "https://tenor.com/view/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai-anime-shy-blushing-gif-15988109", "https://tenor.com/view/anime-angry-girl-sad-alone-gif-15789523", "https://external-preview.redd.it/L5GPrHRbast7y9APBbbHqY0rqxj_b0G_Rv48w0UYgMM.jpg?width=640&crop=smart&auto=webp&s=71c29dbcd39974decedfd760fceae481a742ac65", "https://preview.redd.it/zq90klxra3451.jpg?width=640&crop=smart&auto=webp&s=edc7a642f4676fc86edcc56ced7e0bf57c7dcbb1", "https://cdn.discordapp.com/attachments/709248937743089664/728554396778102844/5p2seeqnph121.png", "https://preview.redd.it/knx4viy4sf751.png?width=640&crop=smart&auto=webp&s=d97f622585cfb37c5ace0e6a01c11686d2610d00", "https://preview.redd.it/nss4kcmuwr751.jpg?width=640&crop=smart&auto=webp&s=e8767b661dfb5b2ea6a9457556c300cf0379ac6c", "https://preview.redd.it/luf2tst00l751.jpg?width=640&crop=smart&auto=webp&s=eff17761d373d83917489099128ac0a67d6a0292", "https://cdn.discordapp.com/attachments/709248937743089664/728613820586786836/maipocky.jpg", "https://cdn.discordapp.com/attachments/709248937743089664/728613880653414450/mai.png", "https://cdn.discordapp.com/attachments/709248937743089664/728614184627077180/maisanwallpaper.png", "https://cdn.discordapp.com/attachments/642263231062212608/735858067354419280/image0.png", "https://cdn.discordapp.com/attachments/709248937743089664/737181198941683712/YWRHUwK.png", "https://i.redd.it/lvw44qcfikc51.jpg", "https://i.redd.it/copj6172brb51.png", "https://i.redd.it/ogs1fn6nucb51.jpg", "https://i.redd.it/jfaasljl85b51.jpg", "https://i.redd.it/oy7bzm6vyxa51.png", "https://i.redd.it/4u3xxte6taa51.jpg", "https://i.redd.it/cvm5gy5zwk951.jpg", "https://preview.redd.it/q924ndhso3e51.jpg?width=640&crop=smart&auto=webp&s=81276d6f07f9f4c758e6ddf0ebd04a2fa838cdce", "https://external-preview.redd.it/3GTRL7TggPsKbPeddg6Ump38H_cYWD7VktDM0qwnj7o.jpg?width=640&crop=smart&auto=webp&s=33a913710a91db99703cdcea634d60eec57a246a", "https://preview.redd.it/0yzk286nwyd51.jpg?width=640&crop=smart&auto=webp&s=a5fab38da5b1b033045b50fa202c8680c40c9602", "https://preview.redd.it/ouaf499rnvd51.jpg?width=640&crop=smart&auto=webp&s=a99f258fbca8eee2117c0d5278464c40f8697a36", "https://preview.redd.it/ncp9dp4bdod51.jpg?width=640&crop=smart&auto=webp&s=821e5be5bccf016d5486fa40e59cdf0d164fa9eb", "https://external-preview.redd.it/MuuusuUQooPAk9Sa05sMPcD1A_T3k-7Hzshl_dKtaLs.jpg?width=640&crop=smart&auto=webp&s=be31b5fc6a2505f795b9f9385c5e5d3678aa2d59", "https://preview.redd.it/q9podq0deyb51.jpg?width=640&crop=smart&auto=webp&s=8cd97bdb7cd248544c386053131e2f5e3b279f47", "https://i.redd.it/duayj9ouc5351.jpg", "https://i.redd.it/31vgrgue42151.jpg", "https://cdn.discordapp.com/attachments/712681511429734412/739458801077452820/Mai-Sakurajima-official-illustration.png", "https://preview.redd.it/t4t40valcie51.jpg?width=640&crop=smart&auto=webp&s=1aac672499f36c38ce653a31e629bf0585791097", "https://tenor.com/view/anime-boop-nose-blush-manga-gif-14746195", "https://media.discordapp.net/attachments/712681511429734412/739641055372378252/image0.gif", "https://cdn.discordapp.com/attachments/706775229053009960/719857860669866044/giphy.gif", "https://external-preview.redd.it/_l0U-k1JpaHXqDPlPtA1gYw4t9hjUzorRKYyABPZ-_Y.jpg?width=640&crop=smart&auto=webp&s=c9c103b87abe1dee8c4374697fc0bde8f729e695", "https://i.redd.it/oi9uj4ova3f51.jpg", "https://preview.redd.it/h65jgfdq2be51.jpg?width=640&crop=smart&auto=webp&s=b0b806fc0b815363e5b3603ca25dce15446c6c5a", "https://external-preview.redd.it/B74SdKv674cM2k4TPDSyW0iP6El5C0MTGOq4w2GL8OY.png?width=640&crop=smart&auto=webp&s=9ac8f52c70ee2e304fac3dbb83742692fffa0bf3", "https://www.pngitem.com/pimgs/m/338-3383241_bunny-girl-senpai-freetoedit-mai-san-and-sakuta.png", "https://i.imgur.com/xPYLAxH.jpg", "https://i.imgur.com/fvGD9Cv.jpg", "https://i.imgur.com/fnPRGHu.jpg"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
