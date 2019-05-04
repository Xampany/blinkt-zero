import { Server, ServerResponse, IncomingMessage } from "http";

const server = new Server((req: IncomingMessage, res: ServerResponse) => {
  res.end(new Date().toISOString());
});

server.listen(80);
