import { RequestHandler } from 'express';
import { RoomService } from '../services/roomService';

export class RoomController {
  private roomService: RoomService = new RoomService();

  getRooms: RequestHandler = async (_, res) => {
    try {
      const result = await this.roomService.getRooms();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  addRoom: RequestHandler = async (req, res) => {
    try {
      const result = await this.roomService.addRoom(req);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}