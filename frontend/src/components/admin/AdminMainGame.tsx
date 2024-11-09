import { SOCKETS } from '@/constants';
import { useEffect } from 'react';
import { useSocket } from '@/contexts/SocketContext';

type Props = {
    question: QuestionWithAnswers;
};

const AdminMainGame = ({ question }: Props) => {
    const socket = useSocket();
    const handleOpenAnswer: (answerId: string) => void = (answerId) => {
        socket.emit(SOCKETS.EMIT.ANSWER.OPEN_ANSWER, answerId, question.uuid);
    };

    useEffect(() => {
        socket.emit(
            SOCKETS.EMIT.ROOM.CREATE_ROOM,
            question.uuid,
            question.uuid,
        );
    }, [question]);

    return (
        <div className="flex flex-col gap-2">
            <h1 className='text-5xl text-blue-600 self-center'>{question.question}</h1>
            {question?.answers.map((answer: Answer) => (
                <button
                    key={`button-${answer.uuid}`}
                    className="text-4xl text-red-700 border"
                    onClick={() => {
                        handleOpenAnswer(answer.uuid);
                    }}
                >
                    {answer.answer}
                </button>
            ))}
        </div>
    );
};

export default AdminMainGame;
