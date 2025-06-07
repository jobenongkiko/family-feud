export const SOCKETS: AnswerSocketConstants = {
    EMIT: {
        ROOM: {
            CREATE_ROOM: 'create-room',
            JOIN_ROOM: 'join-room',
        },
        ANSWER: {
            OPEN_ANSWER: 'open-answer',
            WRONG_ANSWER: 'wrong-answer',
            SINGLE_WRONG_ANSWER: 'toggle-single-wrong'
        },
    },
    LISTEN: {
        ANSWER: {
            OPEN_ANSWER: 'answer-opened',
            WRONG_ANSWER: 'wrong-answer-opened',
            SINGLE_WRONG_ANSWER: 'single-wrong-toggled'
        },
    },
};
