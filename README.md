# slack-cron-bot

A reminder app example to post messages to Slack periodically at fixed times.

<img src="https://i.gyazo.com/a357e1c9522343999a25f18ddae3632a.png" width="512"/>

This is composed of AWS Lambda and EventBridge, deployed by AWS CDK.

![](https://i.gyazo.com/e55767ff68ab5ed3c0619fb73a0ce6b3.png)

This project architecture is on the pattern of the reference architecture:
https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html#reference-project-architecture

## Deploy your own reminder app

1. Fork this repository
1. Edit `lib/app/postMessage.ts`
1. Go to Repository Page > Settings > Secrets and set your own `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `SLACK_INCOMING_WEBHOOK_URL`.
  <img src="https://i.gyazo.com/684a674ab0f167d05d28e3766f25b784.png" width="512"/>
1. Run the GitHub Actions job.
