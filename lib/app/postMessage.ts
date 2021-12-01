import axios from "axios";
import { format, addDays } from "date-fns";

export const postMessage = async () => {
  const text = `<!channel> 【明日10時〆切】<https://ouchi.ef.cws.coop/auth/bb/login.do|おうちコープ>注文した？【${format(
    addDays(new Date(), 6),
    "M月d日お届け分"
  )}】`;

  if (process.env.SLACK_INCOMING_WEBHOOK_URL === undefined) {
    throw "Please set SLACK_INCOMING_WEBHOOK_URL";
  }

  await axios.post(process.env.SLACK_INCOMING_WEBHOOK_URL, { text });
  const response = {
    statusCode: 200,
    body: "Success",
  };
  return response;
};
