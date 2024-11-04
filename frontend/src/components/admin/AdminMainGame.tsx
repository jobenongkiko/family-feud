import { SOCKETS } from '@/constants';
import { useSearchParams } from 'react-router-dom';
import { Socket } from 'socket.io-client';

type Props = {
    question: QuestionWithAnswers;
    socket: Socket;
};

const AdminMainGame = ({ question, socket }: Props) => {
    const [searchParams] = useSearchParams();
    const handleOpenAnswer: (answerId: string) => void = (answerId) => {
        socket.emit(
            SOCKETS.EMIT.ANSWER.OPEN_ANSWER,
            answerId,
            searchParams.get('socketId'),
        );
    };
    return (
        <div className="flex flex-col text-red-700">
            {question?.answers.map((answer: Answer) => (
                <button
                    key={`button-${answer.uuid}`}
                    className="text-4xl"
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
