const { EmbedBuilder, WebhookClient, inlineCode } = require('discord.js');
const { titleWebhookId, titleWebhookToken } = process.env;

const titleWebhook = new WebhookClient({ id: titleWebhookId, token: titleWebhookToken });

export default function handler(req, res) {
  let data;
  if (req.query.debug) {
    data = {
      "title": "title",
      "target": "dev",
      "player": "not dev",
      "action": "not added"
    }
  } else {
    data = JSON.parse(req.query.data);
  }

  
  let title = data.title;
  let target = data.target;
  let player = data.player;
  let action = data.action;


  let color
  if (action === "added") {
    color = 5763719
  } else if (action === "removed") {
    color = 15548997
  } else {
    res.status(200).send(JSON.parse(`{ \"result\": \"Action is not added or removed: ${action}\" }`))
  }

  console.log(data)

  console.log("properties made")
  console.log("embed made")

  let embed = new EmbedBuilder();
  embed.setTitle("Title Log",)
  embed.setDescription(`Title giver: ${player} \n Title receiver: ${target} \n Title Name: ${title} \n <t:${Math.floor(Date.now() / 1000)}:F>`)
  embed.setFooter({ "text": `Does this log look incorrect? Contact untold#0830 if this is the case.` })
  embed.setColor(color)

  titleWebhook.send({
    embeds: [embed]
  }).then(() => {
    res.status(200).json({ "result": "Log Created and Sent" })
  } )
}
