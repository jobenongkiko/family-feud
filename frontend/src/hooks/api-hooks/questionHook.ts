import { useQuery } from '@tanstack/react-query';
import { getQuestions, getQuestionWithAnswers } from '@/api/questionApi';

export const useGetQuestionsQuery = () => {
    return useQuery<Question[]>({
        queryKey: ['questions'],
        queryFn: getQuestions,
    });
};

export const useGetQuestionWithAnswerQuery = (id: string) => {
  return useQuery<QuestionWithAnswers>({
      queryKey: ['question', id],
      queryFn: () => getQuestionWithAnswers(id),
      enabled: !!id,
  });
};

