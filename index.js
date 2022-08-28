const { Client, Intents, MessageEmbed ,MessageActionRow ,MessageSelectMenu, Permissions } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.on("messageCreate", message => {
if(message.content.startsWith(prefix + "cv")) {
let messageArray = message.content.split(" ")
let name = []
let programing = []
message.channel.send('باشە، ناوت چییە').then(msg => {
const msg_filter = (m) => m.author.id === message.author.id;
message.channel.awaitMessages({ filter: msg_filter, max: 1 })
  .then((collected) => {
   collected.first().delete()
name = collected.first().content;
  msg.edit(`لە چی دەزانی لەدیس کۆرد`).then(msg => {
const msg_filter = (m) => m.author.id === message.author.id;
message.channel.awaitMessages({ filter: msg_filter, max: 1 })
  .then((collected) => {
   collected.first().delete()
programing = collected.first().content
  msg.delete()
  message.channel.send("سوپاس بەڕێز سی ڤی تۆ نێردراوە بۆ خاوەنداریەتی")
  let embed = new MessageEmbed()
  .setTitle(`${message.guild.name}`)
  .addField("Name Sir", name.toString())
  .addField("Level Library", programing.toString())
  .addField("Tag", `<@${message.author.id}>`)
  .setFooter(`${message.guild.name}`)
  .setColor("RANDOM")
  client.users.cache.get("Id Xot").send({embeds: [embed]}).then(m => {
m.react("✅")
  });
})
}
)}
 )}
 )}})
client.login("")
