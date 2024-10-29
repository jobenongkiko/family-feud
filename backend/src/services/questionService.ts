import { EntityManager, RequestContext } from '@mikro-orm/core';
import { Request } from 'express';
import { Question } from '../entities/questionEntity';

export const questionService = async (req: Request) => {
  const em: EntityManager | undefined = RequestContext.getEntityManager();

  if (!em) {
    return "Entity manager not available";
  }
  const { question, category } = req.body;

  try {
    const newQuestion = new Question(question, category);
    em.persist(newQuestion);
    await em.flush();
    return newQuestion;
  } catch (error) {
    return error;
  }
};
