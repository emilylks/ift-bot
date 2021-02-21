const Discord = require('discord.js');
const config = require('./config.js');

const bot = new Discord.Client();

const prefix = '!';

bot.once('ready', () => {
  console.log("IFT BOT is online!");
});

/*
 * onMessage handler for the bot
 * Purpose: verifies that prefix is correct and author is not the bot itself,
 *          reads the command
 */
bot.on('message', (message) => {
  // check if command starts with
  if (!message.content.startsWith(prefix) || message.author.bot)
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong");
  }
});

console.log(config.TOKEN);
bot.login(config.TOKEN);
