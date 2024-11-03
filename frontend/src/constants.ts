export const SOCKETS: AnswerSocketConstants = {
    EMIT: {
        ROOM: {
            CREATE_ROOM: 'create-room',
            JOIN_ROOM: 'join-room',
        },
        ANSWER: {
            OPEN_ANSWER: 'open-answer',
        },
    },
    LISTEN: {
        ANSWER: {
            OPEN_ANSWER: 'answer-opened',
        },
    },
};
