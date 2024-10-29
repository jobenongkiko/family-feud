import { Request } from 'express';
import { Question } from '../entities/questionEntity';
import { Answer } from '../entities/answerEntity';
import { entityManager } from '../mikrorm';
export class QuestionService {
  getQuestions = async () => {
    const em = entityManager();

    if ('error' in em) {
      return {};
    }

    const questions = await em.findAll(Question, { fields: ['uuid', 'question', 'category'] });

    return questions;
  };

  getQuestionWithAnswers = async (req: Request) => {
    const em = entityManager();

    if ('error' in em) {
      return {};
    }

    const { questionId } = req.params;

    if (!questionId) {
      return {};
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
      return {};
    }

    const { question, category } = req.body;

    const newQuestion = new Question(question, category);
    em.persist(newQuestion);
    await em.flush();
    return newQuestion;
  };
}
