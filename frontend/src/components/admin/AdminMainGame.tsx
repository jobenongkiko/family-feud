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

    const handleWrongAnswer:
        | React.MouseEventHandler<HTMLHeadingElement>
        | undefined = () => {
        socket.emit(SOCKETS.EMIT.ANSWER.WRONG_ANSWER, question.uuid);
    };

    useEffect(() => {
        socket.emit(
            SOCKETS.EMIT.ROOM.CREATE_ROOM,
            question.uuid,
            question.uuid,
        );
    }, [question]);

    return (
        <div className="flex flex-col gap-2 items-center text-white">
            <h1 className="text-4xl border" onClick={handleWrongAnswer}>
                EEENGKKKK
            </h1>
            <h1 className="text-5xl">{question.question}</h1>
            {question?.answers.map((answer: Answer) => (
                <button
                    key={`button-${answer.uuid}`}
                    className="text-4xl border w-fit"
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
