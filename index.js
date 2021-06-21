const express = require("express");
const app = express();
app.listen(8080);
app.get("/", function(req, res, next){
    res.end("ok");
});
app.get("/github", function(req, res, next){
    res.redirect("https://github.com/Googlefan256/Glow-ddbot");
});
const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" } } });
const config = require('./config.json')
client.login(process.env.token || config.token)
client.once('ready',()=>{
	console.log(client.user.tag)
})
setInterval(function() {
	client.user.setActivity('Glow-botのステータス', { type: 'WATCHING' });
	client.users.fetch('821033562555809824').then(a =>{
		if(a.presence.status === "offline"){client.channels.fetch('856183879828242462').then(b=>b.send('<@661028503927521295>β版bot落ちてますよ'))}
	})
	client.users.fetch('832614051514417202').then(a =>{
		if(a.presence.status === "offline"){client.channels.fetch('856183879828242462').then(b=>b.send('<@661028503927521295>bot落ちてますよ'))}
	})
}, 60000);
client.on('message',async msg=>{
	if(msg.content==='st!ping'){
		await msg.channel.send({ embed: { title: '取得中です..' , color: (3892729)} }).then(sent => {
				sent.edit({ embed: { title: 'Pong!', description: `botの応答速度: ${sent.createdTimestamp - msg.createdTimestamp}ms\ndiscordAPIの応答読度: ${client.ws.ping}ms`, color: (3892729) } });
		});
	}
})
