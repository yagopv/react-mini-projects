const io = require('socket.io')(4200);

const users = {};
const messages = [{ name: 'Marta', message: 'WTF?', createdAt: Date.now() }];

var express = require('express');
var app = express();
var http = require('http').createServer(app);

io.on('connection', async socket => {
  console.log('New client connected');

  socket.emit('load-old-msgs', messages);

  console.log(messages);
  console.log(users);

  socket.on('new-user', name => {
    console.log('new-user:', name);
    users[socket.id] = name;
    console.log('new-user: ', name);
    socket.emit('user-connected', name);
  });

  socket.on('send-chat-message', data => {
    const message = {
      name: users[socket.id],
      message: data,
      createdAt: Date.now()
    };

    messages.push(message);

    socket.emit('chat-message', message);
    socket.broadcast.emit('chat-message', message);
  });

  socket.on('disconnect', () => {
    socket.emit('user-disconnected', users[socket.id]);
    delete users[socket.id];
  });
});
