const { Client, Intents } = require('discord.js');
const { StartApp } = require('./start.js')
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const onStart = new StartApp()


onStart.listenEvent(client)
onStart.start(client)