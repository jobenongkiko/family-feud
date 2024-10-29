import axios from 'axios';
const URL = import.meta.env.VITE_AXIOS_BASE_URL;

export const getQuestions = async () => {
  const res = await axios.get<Question[]>(`${URL}/question`);
  return res.data;
}

export const getQuestionWithAnswers = async (id: string) => {
  const res = await axios.get<QuestionWithAnswers>(`${URL}/question/${id}`);
  return res.data;
}