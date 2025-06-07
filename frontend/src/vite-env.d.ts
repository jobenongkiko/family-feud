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

interface Room {
    uuid: string;
    roomName: string;
    question: string;
    socketId: string;
}

interface AnswerSocketConstants {
    EMIT: {
        ROOM: {
            CREATE_ROOM: string;
            JOIN_ROOM: string;
        };
        ANSWER: {
            OPEN_ANSWER: string;
            WRONG_ANSWER: string;
            SINGLE_WRONG_ANSWER: string;
        };
    };
    LISTEN: {
        ANSWER: {
            OPEN_ANSWER: string;
            WRONG_ANSWER: string;
            SINGLE_WRONG_ANSWER: string;
        };
    };
}
