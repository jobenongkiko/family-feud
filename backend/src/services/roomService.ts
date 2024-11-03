import { Request } from 'express';
import { Room } from '../entities/roomEntity';
import { entityManager } from '../mikrorm';

export class RoomService {
  getRooms = async () => {
    const em = entityManager();

    if ('error' in em) {
      return {};
    }

    const rooms = await em.findAll(Room, { fields: ['uuid', 'socketId'] });

    return rooms;
  };

  addRoom = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      return {};
    }

    const { socketId } = req.body;

    const newRoom = new Room(socketId);
    em.persist(newRoom);
    await em.flush();
    return newRoom;
  };
}
