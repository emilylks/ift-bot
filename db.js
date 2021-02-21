const Discord = require('discord.js');
const axios = require('axios').default;

// checks if the email is in the database
function checkDB(email, msg) {
  axios.get('https://ift-bot-default-rtdb.firebaseio.com/attendees.json')
       .then((res) => res.data)
       .then((data) => {
         var found = false;
         for (let i = 0; i < data.length; i++) {
           if (email == data[i]) { // success
             msg.channel.send("yay");
             found = true;
           }
         }

         if (!found) {
           msg.channel.send("boo");
           throw new Error("Email not found");
         }
       })
       .catch((err) => console.log("authentication failed"));
}

module.exports = checkDB;
