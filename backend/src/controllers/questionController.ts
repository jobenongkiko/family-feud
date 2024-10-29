import { RequestHandler } from 'express';
import { questionService } from '../services/questionService';

export const questionController: RequestHandler = (req, res) => {
  const result = questionService(req);
  res.status(200).json(result);
};
