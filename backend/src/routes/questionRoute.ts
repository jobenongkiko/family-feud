import { Router } from 'express';
import { QuestionController } from '../controllers/questionController';

const router = Router();
const questionController: QuestionController = new QuestionController(); 

router.get('/', questionController.getQuestions);
router.get('/:questionId', questionController.getQuestionWithAnswers);
router.post('/add', questionController.addQuestion);

export default router;
