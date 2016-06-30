/**
 * Created by sm on 24/06/16.
 */



export default class Server {

  constructor() {
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    server.listen(3000);

    app.get('/', function (req, res) {
      console.log(__dirname);
      res.sendFile(__dirname + '/index.html');
    });

    // TODO Static routes

    io.on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });
    });
  }
}
