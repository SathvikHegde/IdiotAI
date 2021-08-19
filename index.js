const Discord = require('discord.js');
const client = new Discord.Client();

const cleverbot = require("cleverbot-free");

let precommand = [];

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    
    if(message.author.id == client.user.id) return;
    
    if(message.content == '-start') {
        return client.channels.cache.get('877421615493828628').send('Hi!');
    }
    
    if(message.channel.id != '877421615493828628') return;

    cleverbot(message.content, precommand).then(response =>{
        setTimeout(function() {
            message.channel.send(response);
        }, 3000);
        precommand.push(message.content);
        precommand.push(response);
    }); 
});

client.login(process.env.TOKEN);
