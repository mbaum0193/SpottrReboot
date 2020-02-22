//const websock = require("ws")

const app = require('./server').app;

const http = require('http').Server(app)
const io = require('socket.io')(http)

const SOCK_PORT = 8001

var socketclients = {}

io.on('connection', function connection(ws) {
    console.log('new client')
})

exports.broadcastSockMsg = (channel, msg) => {
    io.sockets.emit(channel, msg)
}

http.listen(SOCK_PORT, () => {console.log(`listening on port ${SOCK_PORT}`)})