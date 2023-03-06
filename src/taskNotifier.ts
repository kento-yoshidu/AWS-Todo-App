import { DynamoDB } from "aws-sdk"
import { IncomingWebhook } from "@slack/webhook"

export const handler = async () => {
  const dynamodb = new DynamoDB({
    region: "ap-northeast-1"
  })

  const result = await dynamodb.scan({
    TableName: "tasks"
  }).promise()

  const tasks = result.Items.map((item) => {
    return `✔ ${item.title.S}\n`
  })

  const slackWebhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL || "")

  await slackWebhook.send(tasks.join(""))
}
