export const SOCKETS: AnswerSocketConstants = {
    EMIT: {
        ROOM: {
            CREATE_ROOM: 'create-room',
            JOIN_ROOM: 'join-room',
        },
        ANSWER: {
            OPEN_ANSWER: 'open-answer',
            WRONG_ANSWER: 'wrong-answer',
        },
    },
    LISTEN: {
        ANSWER: {
            OPEN_ANSWER: 'answer-opened',
            WRONG_ANSWER: 'wrong-answer-opened',
        },
    },
};
