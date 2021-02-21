module.exports = {
	name: 'args-info',
	description: 'Prints info about some args',
	args: true,
	usage: '<user> <role>',
	guildOnly: true,
	cooldown: 5,
	aliases: ['arg', 'inf'],
	execute(message, args) {
		message.channel.send(`Command name: ${this.name}\nArguments: ${args}`);
	},
};