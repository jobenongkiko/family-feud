import { io, Socket } from 'socket.io-client';
import { API_CONFIG } from '@/configs';

let socket: Socket;

export const initSocket = () => {
    if (!socket) {
        socket = io(API_CONFIG.URL);
    }
    return socket;
};

export const getSocket = () => {
    if (!socket) {
        throw new Error("Socket not initialized. Call initSocket first.");
    }
    return socket;
};
