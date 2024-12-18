import { Request } from 'express';
import { Room } from '../entities/roomEntity';
import { entityManager } from '../mikrorm';

export class RoomService {
  getRooms = async () => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const rooms = await em.findAll(Room, { fields: ['uuid', 'socketId', 'roomName', 'question'] });

    return rooms;
  };

  getRoom = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const { roomId } = req.params;

    if (!roomId) {
      throw new Error('Room ID requred');
    }

    const room = await em.find(Room, roomId);

    if (room.length === 0) {
      throw new Error('No such room');
    }

    return room;
  };

  addRoom = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const { socketId, roomName, questionId } = req.body;

    if (!socketId) {
      throw new Error(
        'Needs socketId'
      );
    }

    if (!roomName) {
      throw new Error(
        'Needs roomName'
      );
    }

    if (!questionId) {
      throw new Error(
        'Needs questionId'
      );
    }

    const newRoom = new Room(roomName, questionId, socketId);
    em.persist(newRoom);
    await em.flush();
    return newRoom;
  };

  deleteRoom = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const { socketId } = req.params;

    if (!socketId) {
      throw new Error('Room ID required');
    }

    const room = await em.findOne(Room, { socketId });

    if (!room) {
      throw new Error('No such room');
    }

    em.remove(room);
    await em.flush();
    return room;
  };
}
