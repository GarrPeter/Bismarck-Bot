module.exports = {
	name: 'server',
	description: 'Prints the server\'s name',
	execute(message, args) {
		message.channel.send(`This servers name is ${message.guild.name}`);
	},
};