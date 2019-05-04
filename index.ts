import { Server } from "http";

const server = new Server((req, res) => {
  res.end("Hello");
});

server.listen(80);
