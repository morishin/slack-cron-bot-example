import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda-nodejs";
import * as events from "@aws-cdk/aws-events";
import * as targets from "@aws-cdk/aws-events-targets";
import * as dotenv from "dotenv";

export class SlackCronBotStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    dotenv.config({ path: ".env.local" });

    const handler = new lambda.NodejsFunction(this, "post", {
      environment: {
        SLACK_INCOMING_WEBHOOK_URL:
          process.env.SLACK_INCOMING_WEBHOOK_URL ||
          "Please set SLACK_INCOMING_WEBHOOK_URL",
      },
    });

    const target = new targets.LambdaFunction(handler);
    const scheduleExpression =
      process.env.SCHEDULE_EXPRESSION || "cron(0 3 * * ? *)";
    new events.Rule(this, "rule", {
      schedule: events.Schedule.expression(scheduleExpression),
      targets: [target],
    });
  }
}
