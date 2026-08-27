const express = require('express');
const app = express();
const mineflayer = require('mineflayer');

app.get('/', (req, res) => {
    res.send('Mera Minecraft Bot chal raha hai!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Web server start ho gaya.');
});

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Suraj_gupta12.aternos.me', // YAHAN APNI SMP KI IP DAALEIN
        port: 52211,                 // Port change karein agar zaroorat ho
        username: '24x7_AFK_Bot',    
        version: '1.20.4'            // Apna server version daalein
    });

    bot.on('login', () => console.log('Bot server me join ho gaya!'));
    
    bot.on('end', () => {
        console.log('Disconnect hua. Reconnecting...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', err => console.log('Error:', err));
}

createBot();
