const Discord = require('discord.js');
const config = require('./config.js');
const db = require('./db.js');

const bot = new Discord.Client();
const prefix = '!';

bot.once('ready', () => {
  console.log("IFT BOT is online!");
});

function verifyEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return (email == "" || !regex.test(email)) ? false : true;
}

/*
 * onMessage handler for the bot
 * Purpose: verifies that prefix is correct and author is not the bot itself,
 *          reads the command
 */
bot.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot)
    return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong");
  }

  if (verifyEmail(command))
    db(command, message);
});

bot.login(config.TOKEN);
