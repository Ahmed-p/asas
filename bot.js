const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/Ahmed');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`.help | On 1 Servers`,'https://www.twitch.tv/Ahmed');
});          


client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
