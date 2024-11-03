import { Router } from 'express';
import questionRoute from './questionRoute';
import answerRoute from './answerRoute'
import roomRoute from './roomRoute'

const router = Router();

router.use('/question', questionRoute);
router.use('/answer', answerRoute);
router.use('/room', roomRoute);

export default router;
