//make connection
//this socket and socket used in server file are different
var socket = io.connect('http://localhost:3001');

var handle = document.getElementById("handle"),
    msg = document.getElementById("msg"),
    btn = document.getElementById("send"),   
    typing = document.getElementById("typing"),
    output = document.getElementById("output");

    //emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: msg.value,
        handle : handle.value
    });
});

msg.addEventListener("keypress", function(){
    socket.emit('typing', handle.value);
});

//listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>'+ data.handle + ':</strong>' + data.message +'</p>'
    console.log(data.handle)
});

socket.on('typing', function(data){
    output.innerHTML += "<p>"+ data +"is typing a msg...</p>"
})