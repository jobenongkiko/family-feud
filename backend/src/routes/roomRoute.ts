import { Router } from 'express';
import { RoomController } from '../controllers/roomController';

const router = Router();
const roomController: RoomController = new RoomController(); 

router.get('/', roomController.getRooms);
router.post('/add', roomController.addRoom);

export default router;
