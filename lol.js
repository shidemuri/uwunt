const d = require(`discord.js`)
const client = new d.Client()
const blacklist = require(`./FODASE.json`)
const reply = require(`./teste.json`)
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

client.on(`ready`, () => client.user.setActivity(`fuck uwu thats fag shit -padero (rewritten cuz yes)`))

client.on(`message`, m => {
    if(m.author.bot) return;
    blacklist.forEach(word =>{
        if(m.content.slice(/((`){1,3}|(\*){1,3}|(~){2}|(\|){2}|^(>){1})/gmi).toLowerCase().includes(word)){
            m.delete()
            var random = Math.floor(Math.random() * reply.length)
            m.channel.send(`${m.author} ${reply[random]}`).then(mm => {sleep(2500).then(() => {if(random == 4) return; else mm.delete()})})
        }
    })
})

client.login(process.env.token)
