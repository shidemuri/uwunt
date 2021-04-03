const discord = require(`discord.js`)
const client = new discord.Client()

const lista = require(`./FODASE.json`)

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const fuckmarkdown = require(`remove-markdown`)

client.login(process.env.token)

client.on(`ready`, () => {
    console.log(`on`)
    client.user.setActivity(`fuck uwu thats fag shit -padero/paradino`);
})

client.on(`message`, (m) => {
    if(m.author.bot) return;
    lista.forEach(w =>{
        if(fuckmarkdown(`${m.content.toLowerCase().split(" ").join("")}`).includes(w)){
            if(m.deletable) m.delete()
            m.channel.send(`${m.author} fuck off`).then(ww =>{
                sleep(2500).then(() => {
                    ww.delete()
                });
            })
            console.log(`author: ${m.author.username} ${m.author.id}\nmsg: ${m.content}\n\n`)
        }
    })
})
