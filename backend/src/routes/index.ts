import { Router } from 'express';
import questionRoute from './questionRoute';
import answerRoute from './answerRoute'

const router = Router();

router.use('/question', questionRoute);
router.use('/answer', answerRoute);

export default router;
