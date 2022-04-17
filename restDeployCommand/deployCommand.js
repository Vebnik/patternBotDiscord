const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


function CreateCommand (guild) {

	this.oAuth = {
		token: process.env.TOKEN,
		clientId: process.env.APP_ID,
		guildId: guild
	}

	this.createComm = () => {

		const commands = [
			new SlashCommandBuilder().setName('testgit').setDescription('Test command').addStringOption(opt => {
				return opt.setName('input').setDescription('The input to echo back').setRequired(true)
			})
		]

		commands.map(command => command.toJSON());

		const rest = new REST({ version: '9' }).setToken(this.oAuth.token);

		rest.put(Routes.applicationGuildCommands(this.oAuth.clientId, this.oAuth.guildId), { body: commands })
			.then(() => console.log('Successfully commands.'))
			.catch(console.error);
	}

}

// Testing server id
let command = new CreateCommand(process.env.TESTING)
command.createComm()
