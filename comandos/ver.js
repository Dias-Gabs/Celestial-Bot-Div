const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  message.delete();
    if ((message.author.id !== "COLOQUE SEU ID"))
      return message.reply("<a:errado:1007714007752388681> Você Não Tem Permissão Para Isso!");
  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let invisible = client.users.filter(m => m.presence.status === "offline");

  const embed = new Discord.RichEmbed()
    .setTitle(`**<a:blue_royaldiamond_icon19:1007664435684462692> Grx divs!**`)
    .setDescription(
      `**<:ServerPartnered:1007808165083107528> Servidores:** ${client.guilds.size}\n**Total:** ${client.users.size}\n\n**<:NL_on:1007807474599997560> Onlines:** ${on.size}\n** <:offmark:1007808304443035718> Ausentes:** ${ausente.size}\n**Ocupados:** ${npertube.size}\n** <:offlinestatus:1007808514208583710> Invisíveis:** ${invisible.size}`
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setColor("#36393f")
    .setTimestamp();
  message.channel.send(embed);
 message.delete(50000)
};
