import { Router } from 'express';
import { AnswerController } from '../controllers/answerController';

const router = Router();
const answerController: AnswerController = new AnswerController();

router.post('/add', answerController.addController);

export default router;
