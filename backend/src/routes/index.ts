import { Router } from 'express';
import questionRoute from './questionRoute';

const router = Router();

router.use('/question', questionRoute);

export default router;
