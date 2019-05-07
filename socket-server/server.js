const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let numberOfClients = io.engine.clientsCount;
let character; //to send the first user the opponents character

io.on("connection", socket => {
    numberOfClients ++;
    if (numberOfClients < 2) {
        socket.emit('turnSetup');
    }
    console.log('Number of online clients:', numberOfClients);
    socket.broadcast.emit('newUser');
    if (character){ //sending first user the opponents character
        socket.emit('updateCharacter', character);
    }

    socket.on('updateCharacter', function(char) {
        socket.broadcast.emit('updateCharacter', char);
        character = char
    })

    socket.on('attack', function(spell) {
        socket.broadcast.emit('attack', spell);
    })

    socket.on('defence', function(spell) {
        socket.broadcast.emit('defence', spell)
    })

    socket.on('gameOver', function() {
        socket.broadcast.emit('endGame');
    })

    socket.on('notification', function(notification) {
        io.emit('notification', notification)
    })

    socket.on('disconnect', function() {
        numberOfClients --;
        socket.broadcast.emit('disconnected')
        console.log('Number of online clients:', numberOfClients)
        socket.broadcast.emit('disconnected')
    })
});



server.listen(port, () => console.log(`Listening on port ${port}`));