import { Request } from 'express';
import { Question } from '../entities/questionEntity';
import { Answer } from '../entities/answerEntity';
import { entityManager } from '../mikrorm';
export class QuestionService {
  getQuestions = async () => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const questions = await em.findAll(Question, { fields: ['uuid', 'question', 'category'] });

    return questions;
  };

  getQuestionWithAnswers = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const { questionId } = req.params;

    if (!questionId) {
      throw new Error('No such question');
    }

    const question = await em.findOne(
      Question,
      { uuid: questionId },
      { fields: ['uuid', 'question', 'category'] }
    );
    const answers = await em.find(
      Answer,
      { question: { uuid: questionId } },
      { fields: ['uuid', 'answer', 'points'] }
    );

    return { ...question, answers };
  };

  addQuestion = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      throw new Error(em.error);
    }

    const { question, category } = req.body;

    const newQuestion = new Question(question, category);
    em.persist(newQuestion);
    await em.flush();
    return newQuestion;
  };
}
