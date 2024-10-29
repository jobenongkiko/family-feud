import { RequestHandler } from 'express';
import { AnswerService } from '../services/answerService';

export class AnswerController {
  private answerService: AnswerService = new AnswerService();

  addController: RequestHandler = async (req, res) => {
    try {
      const result = await this.answerService.addAnswer(req);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
