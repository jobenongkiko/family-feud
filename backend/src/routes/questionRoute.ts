import { Router } from 'express';
import { questionController } from '../controllers/questionController';

const router = Router();

router.post('/add', questionController);

export default router;
