// Server Setup
const PORT = 3000;
const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Make express serve static assets
app.use(express.static(__dirname + "/public"));

server.listen(PORT, () => {
  console.log(`Local server is listening on port ${PORT}`);
});

io.on("connection", (socket) => {
  socket.on("msg-posted", (data) => {
    // We use broadcast so a message isn't displayed twice on the current socket
    socket.broadcast.emit("msg-received", data);
  });
});
