import { Router } from 'express';
import { RoomController } from '../controllers/roomController';

const router = Router();
const roomController: RoomController = new RoomController(); 

router.get('/', roomController.getRooms);
router.get('/:roomId', roomController.getRoom);
router.post('/add', roomController.addRoom);
router.delete('/:socketId', roomController.deleteRoom);

export default router;
