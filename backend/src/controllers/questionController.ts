import { RequestHandler } from 'express';
import { QuestionService } from '../services/questionService';

export class QuestionController {
  private questionService: QuestionService = new QuestionService();

  getQuestions: RequestHandler = async (_, res) => {
    try {
      const result = await this.questionService.getQuestions();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  getQuestionWithAnswers: RequestHandler = async (req, res) => {
    try {
      const result = await this.questionService.getQuestionWithAnswers(req);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  addQuestion: RequestHandler = async (req, res) => {
    try {
      const result = await this.questionService.addQuestion(req);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}