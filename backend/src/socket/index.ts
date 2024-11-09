// socket.js
import { Server as SocketIOServer } from 'socket.io';
import { Server } from 'http';
import axios from 'axios';
axios.defaults.baseURL = process.env.API_BASE_URL!;

const setupSocket = (server: Server) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.CLIENT_BASE_URL,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', async (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on('create-room', async (roomName, questionId) => {
      await axios.post('room/add', {
        socketId: socket.id,
        roomName,
        questionId
      });
      socket.join(roomName);
    });

    socket.on('join-room', (room) => {
      socket.join(room);
    });

    socket.on('disconnect', async () => {
      try {
        await axios.delete(`room/${socket.id}`);
      } catch (error: any) {
        console.log(error.message);
      }
      console.log(`A user disconnected: ${socket.id}`);
    });

    socket.on('open-answer', (answerId, room) => {
      socket.to(room).emit('answer-opened', answerId);
    });
  });

  return io;
};

export default setupSocket;
