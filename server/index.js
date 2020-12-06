const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5050;
const router = require('./router');

const app = express();
const server =  http.createServer(app);
const io = socketio(server);
// client side socket addition
io.on('connection',(socket)=> {
    console.log('we have a new connection!!')
    socket.on('disconnected',()=>{
        console.log('User')
    })
})
app.use(router);
server.listen(PORT,() => console.log(`Server has started on port ${PORT}`));