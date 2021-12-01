import { postMessage } from "./app/postMessage";

export const handler = async (_event: any, _context: any) => {
  await postMessage();
};
