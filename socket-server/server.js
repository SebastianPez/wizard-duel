const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    console.log('New client connected' + socket.id);
});

server.listen(port, () => console.log(`Listening on port ${port}`));