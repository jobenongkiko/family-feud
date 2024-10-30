import axios from 'axios';
const URL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.baseURL = URL;

export const getQuestions = async () => {
  const res = await axios.get<Question[]>(`/question`);
  return res.data;
}

export const getQuestionWithAnswers = async (id: string) => {
  const res = await axios.get<QuestionWithAnswers>(`/question/${id}`);
  return res.data;
}