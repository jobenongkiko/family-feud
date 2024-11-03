import axios from 'axios';
import { API_CONFIG } from '../configs';
axios.defaults.baseURL = API_CONFIG.URL;

export const getQuestions = async () => {
  const res = await axios.get<Question[]>(`/question`);
  return res.data;
}

export const getQuestionWithAnswers = async (id: string) => {
  const res = await axios.get<QuestionWithAnswers>(`/question/${id}`);
  return res.data;
}