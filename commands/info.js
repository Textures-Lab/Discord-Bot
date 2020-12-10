const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('../settings.js');

module.exports = {
	name: 'info',
	aliases: ['information'],
	description: 'displays some info of the bot',
	execute(message, args) {
		if (message.channel.type !== 'dm') {
      message.reply('please check your dm\'s!');
      const embed = new Discord.MessageEmbed()
				.setTitle('LabBot info:')
				.setThumbnail(settings.BotIMG)
        .setDescription('This is the official bot of The Textures Lab Discord server!')
				.addFields(
					{ name: '\u200B', value: '**Features:**'},
					{ name: '🔍 Image resizing', value: 'With the `/magnify` command you can resize images by a certain factor! \nKeep in mind, this feature was made for textures, other images may look weird.'},
          { name: '❗ Modping', value: 'With the `/modping` command you can let me ping all mods online on one of our servers to get help.'},
          { name: '🗺️ soon™️: Translations', value: 'Soon you can translate any message when typing `/translate *to language* *your text*` or by reacting with a flag emoji to an existing message!'},
        )
				.setFooter('\u200B \nI am completely open source! \nYou can find me here: https://github.com/Compliance-Resource-Pack/Discord-Bot');

			message.author.send(embed);
    }
		else {
			const embed = new Discord.MessageEmbed()
				.setTitle('CompliBot info:')
				.setThumbnail(settings.BotIMG)
        .setDescription('This is the official bot of The Textures Lab Discord server!')
				.addFields(
					{ name: '\u200B', value: '**Features:**'},
					{ name: '🔍 Image resizing', value: 'With the `/magnify` command you can resize images by a certain factor! \nKeep in mind, this feature was made for textures, other images may look weird.'},
          { name: '❗ Modping', value: 'With the `/modping` command you can let me ping all mods online on one of our servers to get help.'},
          { name: '🗺️ soon™️: Translations', value: 'Soon you can translate any message when typing `/translate *to language* *your text*` or by reacting with a flag emoji to an existing message!'},
        )
				.setFooter('\u200B \nI am completely open source! \nYou can find me here: https://github.com/Compliance-Resource-Pack/Discord-Bot');

			message.channel.send(embed);
		}
	}
};
