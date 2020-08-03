module.exports = {
    name: 'chizuru',
    description: "Praise Chizuru!",
    execute(message, args){
        const random = ["https://i.imgur.com/8FI4lIO.jpg", "https://i.redd.it/t8vff3gp12c51.jpg", "https://preview.redd.it/m0qea4q1cde51.jpg?width=640&crop=smart&auto=webp&s=6646d5e6ba12e442533275302b5f826f910253bb", "https://preview.redd.it/1mwq78vn28e51.jpg?width=640&crop=smart&auto=webp&s=91d211eb34631db888cbde9d0de2afccb436b05d", "https://external-preview.redd.it/m7VHHaiAycIl5IQmv5r4fAlGsuwfmfbpOw0-D45T6aA.jpg?width=640&crop=smart&auto=webp&s=468c85622c5b2a9f1e1e7c87fd4c076ea435051b", "https://external-preview.redd.it/-e1YPYQglsLfWpgoXbnk8BYgOLLh7DeJPABc2Id22UM.png?width=640&crop=smart&auto=webp&s=527a3a7f64f87fe076d4219e5b55d7e3d6085582", "https://preview.redd.it/xwctg25m3ie51.jpg?width=640&crop=smart&auto=webp&s=576e4145f0cf505361a9c8b8ad1f97f8f3b2ca51", "https://external-preview.redd.it/IGi_DFx4RokET3rfLIO-Elo4mT56anaOcavDstHA0Gk.jpg?width=640&crop=smart&auto=webp&s=fe172906f9cd3b406598905b17b13efb7e9654f1", "https://images.alphacoders.com/109/thumb-1920-1092221.jpg"]
        const randomMessage = random[Math.floor(Math.random() * random.length)];
        console.log(randomMessage)
        message.channel.send(randomMessage)
    }
}
