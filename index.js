//the Darth Maul Quote Bot
//will quote Darth Maul randomly
//Maybe send some GIFS

const Discord = require(`discord.js`)

const token = "MTAxOTY2ODY1Nzk5Mjg5NjU1Mg.GnNB4b.J0BC3BVCmCa4KHl_sGo8dCaZiug7TSy3UTAs8E"
  
const { GatewayIntentBits , Client, EmbedBuilder , PermissionsBitField, Permissions} = require(`discord.js`);

let msPerHour = 3600000;
  
const client = new Discord.Client({
    //stating what this bot wants to do
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ]
})
  
client.on("ready" , () =>{
      console.log(`Logged in`)
      client.user.setActivity("Nothing" , {type : "WATCHING"})
})
  
client.on("messageCreate" , (message)=>{
    if(message.author.bot) return;
    //this is how to send a gif
    //find gifs that match and send them
    // message.channel.send({files : [{attachment : "gifs/cackles-star-wars2.gif"}]})
    let randomInt = Math.floor(Math.random() * 7)
    let array = [
      "Did you ever hear the Tragedy of Darth Plagueis the Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis... was a Dark Lord of the Sith so powerful and so wise, he could use the Force to influence the midi-chlorians... to create... life. He had such a knowledge of the dark side, he could even keep the ones he cared about... from dying. He became so powerful, the only thing he was afraid of was... losing his power. Which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew. Then his apprentice killed him in his sleep. It's ironic. He could save others from death, but not himself.",
      "I am the senate",
      "Your feeble skiils are no match for the power of the dark side",
      "So be it...Jedi",
      "There is a great disturbance in the force",
      "Execute Order Sixty-Six",
      "Power! Unlimited Power"
    ]
    let timeArray = [
        72 * msPerHour , 
        12 * msPerHour , 
        24 * msPerHour ,
        20 * msPerHour ,
        36 * msPerHour , 
        8 * msPerHour , 
        10 * msPerHour ,
    ]
    setTimeout(() => {
        message.channel.send(array[0])
    }, timeArray[randomInt])
})
  
  
client.login(token) 