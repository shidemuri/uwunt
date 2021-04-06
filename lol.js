const discord = require(`discord.js`)
const client = new discord.Client()

const lista = require(`./FODASE.json`)
const lolw = require(`./teste.json`)

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const fuckmarkdown = require(`remove-markdown`)

client.login(process.env.token)

client.on(`ready`, () => {
    console.log(`on`)
    client.user.setActivity(`fuck uwu thats fag shit -padero/paradino`);
})

/*client.on("guildMemberAdd", member => {
  if (Date.now() - member.user.createdAt < 1000*60*60*24*10) {
    if(Date.now() - member.user.createdAt < 1000*60*60*24*3){
        client.channels.cache.get(`827493108379942955`).send(`${member.id} less than 3 days old 100% sus`)
    } else {
        client.channels.cache.get(`827493108379942955`).send(`${member.id} less than 10 days old kinda sus`)
    }
  }
});
*/
client.on(`message`, (m) => {
    if(m.author.bot) return;
    lista.forEach(w =>{
        if(fuckmarkdown(`${m.content.toLowerCase().split(" ").join("")}`).includes(w)){
            if(m.deletable) m.delete()
            let e = Math.floor(Math.random() * lolw.length)
            m.channel.send(`${m.author} ${lolw[e]}`).then(ww =>{
                sleep(2500).then(() => {
                    ww.delete()
                });
            })
            console.log(`author: ${m.author.username} ${m.author.id}\nmsg: ${m.content}\n\n`)
        }
    })
})
