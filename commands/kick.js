module.exports = {
	name: 'kick',
	description: 'This is a command to kick someone.',
 execute(message, args){
	 const member = message.mentions.users.first()
	 if(member){
		 const memberTarget = message.guild.members.cache.get(member.id)
		 memberTarget.kick()
		 message.channel.send(`${member} has been kicked.`)
	 }else{
		 message.channel.send('You could not kick that member')
	 }
 }
}
