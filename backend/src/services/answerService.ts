import { Request } from 'express';
import { Answer } from '../entities/answerEntity';
import { entityManager } from '../mikrorm';

export class AnswerService {
  addAnswer = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }
    const { question, answer, points } = req.body;

    const newAnswer = new Answer(question, answer, points);
    em.persist(newAnswer);
    await em.flush();
    return newAnswer;
  };
}
