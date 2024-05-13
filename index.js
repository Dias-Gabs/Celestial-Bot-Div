const fs = require("fs");
console.clear()
console.log ("Ligando O Bot De Divulgação...")
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const { Client, Util } = require("discord.js");
const { green } = require("chalk");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.login(token);
process.title = "Conectando...";

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

client.on("ready", () => {
  process.title = `Conectado em: ${client.user.username}`;
  
    console.clear() 
    console.log(`
  

    ✅  | Bot logado com Sucesso.
    ✅  | Divzada

      - Celestial RP

   `);
    
  client.user.setPresence({ game: { name: config.Status, type: "STREAMING" } });

  let status = [
    { name: `S2 A MAIS BRABA`, type: "STREAMING" },
    { name: `S2STORE Store No Topo!`, type: "STREAMING" }
    
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 10000); //10000 = 10Ms = 10 segundos
  
  const ligado = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(
      `Bot Foi Iniciado.\n\nServidores Totais: ${client.guilds.size}\nUsuários Totais: ${client.users.size}`
    )
    .setThumbnail(client.user.avatarURL)
    .setColor("LUMINOUS_VIVID_PINK");
  client.guilds
    .get("")
    .channels.get("")
    .send(ligado);
});

  client.on("guildCreate", guild => {
    const nserver = new Discord.RichEmbed()
      .setTitle(client.user.username)
      .setDescription(
        `Entrei Em Um Novo Servidor:\n\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}\nTotal De Servidores: ${client.guilds.size}\nTotal De Membros: ${client.users.size}`
      )
      .setThumbnail(
        guild.iconURL || "https://loritta.website/assets/img/unknown.png"
      )
      .setColor("LUMINOUS_VIVID_PINK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    client.channels.get("").send(nserver);
    console.log(
      `Entrei no servidor ${guild.name}\nMembros: ${guild.memberCount}\nAgora Eu Estou Em: ${client.guilds.size} servidores\nCom Total De Membros: ${client.users.size}`
    );
  });
  client.on("guildDelete", guild => {
    const nserver = new Discord.RichEmbed()
      .setTitle(client.user.username)
      .setDescription(
        `Fui Removido De Um Servidor:\n\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}\nTotal De Servidores: ${client.guilds.size}\nTotal De Membros: ${client.users.size}`
      )
      .setThumbnail(
        guild.iconURL || "https://loritta.website/assets/img/unknown.png"
      )
      .setColor("LUMINOUS_VIVID_PINK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    client.guilds
      .get("")
      .channels.get("")
      .send(nserver);
    console.log(
      `Sai do servidor ${guild.name}\nMembros: ${guild.memberCount}\nAgora Eu Estou Em: ${client.guilds.size} servidores\nCom Total De Membros: ${client.users.size}`
    );
});

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});