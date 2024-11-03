// socket.js
import { Server as SocketIOServer } from 'socket.io';
import { Server } from 'http';

const setupSocket = (server: Server) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.CLIENT_BASE_URL,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`A user disconnected: ${socket.id}`);
    });

    socket.on('open-answer', (answerId) => {
      socket.broadcast.emit('answer-opened', answerId);
    });
  });

  return io;
};

export default setupSocket;
