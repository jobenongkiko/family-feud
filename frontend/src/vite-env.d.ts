/// <reference types="vite/client" />

interface Answer {
  uuid: string;
  answer: string;
  points: number;
}

interface Question {
  uuid: string;
  question: string;
  category: string;
}
interface QuestionWithAnswers {
  uuid: string;
  question: string;
  category: string;
  answers: Answer[];
}