const { EmbedBuilder, WebhookClient, inlineCode } = require('discord.js');
const { titleWebhookId, titleWebhookToken } = process.env;

const titleWebhook = new WebhookClient({ id: titleWebhookId, token: titleWebhookToken });

export default function handler(req, res) {
  //let data = req.query.data;
 // data = JSON.parse(data);
  let data = {
    "title": "title",
    "target": "dev",
    "player": "not dev",
    "action": "added"
  }

  let title = data.title;
  let target = data.target;
  let player = data.player;
  let action = data.action;
  console.log(data)

  console.log("properties made")
  console.log("embed made")

  let embed = new EmbedBuilder();
  embed.setTitle("Title Log",)
  embed.setDescription(`Title giver: ${player} \n Title receiver: ${target} \n Title Name: ${title} \n <t:${Math.floor(Date.now() / 1000)}:F>`)
  embed.setFooter({ "text": `Does this log look incorrect? Contact untold#0830 if this is the case.` })
  embed.setColor(action === "added" ? 5763719 : 15548997)

  titleWebhook.send({
    embeds: [embed]
  }).then(() => {
    res.status(200).json({ "result": "Log Created and Sent" })
  } )
  
  //res.status(200).json({ name: 'John Doe' })
}
