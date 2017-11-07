var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)


io.on('connection', (socket) => {
  console.log('a user connected')
})

const port = parseInt(process.env.PORT, 10) || 4000

http.listen(port, () => {
  console.log(`listening on ${port}`)
})

io.on('connection', (socket) => {
  socket.on('color change', (color) => {
    io.emit('color change', { color, id })
  })
})

