import { Server } from "http";

const server = new Server((req, res) => {
  res.end(new Date().toISOString());
});

server.listen(80);
