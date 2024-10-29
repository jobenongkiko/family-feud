import { RequestHandler } from 'express';
import { questionService } from '../services/questionService';

export const questionController: RequestHandler = async (req, res) => {
  const result = await questionService(req);
  res.status(200).json(result);
};
