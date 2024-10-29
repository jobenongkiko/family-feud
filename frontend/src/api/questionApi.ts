import axios from 'axios';

export const getQuestions = async () => {
  const res = await axios.get<Question[]>('http://localhost:3000/question');
  return res.data;
}

export const getQuestionWithAnswers = async (id: string) => {
  const res = await axios.get<QuestionWithAnswers>(`http://localhost:3000/question/${id}`);
  return res.data;
}