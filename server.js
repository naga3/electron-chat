var io = require('socket.io').listen(3000);
io.sockets.on('connection', function(socket) {
  socket.on('msg', function(data) {
    io.sockets.emit('msg', data);
  });
});
