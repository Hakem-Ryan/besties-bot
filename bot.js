//Require Discord
const Discord = require('discord.js');
const client = new Discord.Client();
const QuotesData = require('./public/quotes.json');

const queue = new Map();

    //connected
    client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("With javascript.. 😎", {type: "Coding"});
    });
    //Reconnecting
   client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });
   //Disconnected
   client.once('disconnect', () => {
    console.log('Disconnect!');
   });


   client.on('message', msg => {

    //Logical Build

    if(msg.content === "$help"){
        msg.reply(`Here is all the bot commands Bestie 😍 😀

            $games 🎯     $music 🎧   $chat 🥰
    
            $gifs 😄     $quote 😄     $more 😄 
    
            $more 😄     $more 😄     $more 😄 `);
    }

    if (msg.content === '$quote') {
      console.log
      msg.reply(` "${QuotesData[Object.keys(QuotesData)[Math.floor(Math.random()*Object.keys(QuotesData).length)]]}" `);
    }

    //Greetings
    const greetings = ["Hello!","Hey!!", "Sup bestiesss","'Allo","'Allo 'Allo","Aye oop","Ay up","Ahoy","G'day","Greetings","Hello","Hey there","Hey","Hi there","Hi","Hiya","How are things","How are ya","How ya doin'","How's it goin'","How's it going","How's life","Howdy","Sup","What's new","What's up","Yo"];
    const randomgreet = greetings[Math.floor(Math.random() * greetings.length)];


    if (greetings.includes(msg.content)) {
        msg.reply(randomgreet);
      }

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);