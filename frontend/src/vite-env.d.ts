/// <reference types="vite/client" />

declare module '@/*';

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

interface AnswerSocketConstants {
    EMIT: {
        ANSWER: {
            OPEN_ANSWER: string;
        };
    };
    LISTEN: {
        ANSWER: {
            OPEN_ANSWER: string;
        };
    };
}
