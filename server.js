var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs')

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html: ' + err);
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  // send some events every few seconds
  setInterval(function() {
    socket.emit('eventA', 'marco');
  }, 2000);

  // handle events sent to us
  socket.on('eventB', function (data) {
    console.log(data);
  });
});

