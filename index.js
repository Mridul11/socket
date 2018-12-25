const express = require('express')
const socketIO = require('socket.io')

let app = express()

app.use(express.static('public'));

app.get("*", function(req,res){
    res.json({ msg: "hey there!!!" })
});

port = 3001
var server = app.listen(port, () => 
        console.log("listening on port 3001"));

//socketIO
var io = socketIO(server) // socket to work with this server .
io.on('connection', function(socket){
    console.log("made socket connection!!!", socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
        console.log(data)
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing ' ,data)
        console.log(data)
    })
});