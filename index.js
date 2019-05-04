const { Server } = require("http");

const server = new Server((req, res) => {
  res.end("Hello");
});

server.listen(8081);
