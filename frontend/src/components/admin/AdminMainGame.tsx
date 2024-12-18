import { SOCKETS } from '@/constants';
import { useEffect, useState } from 'react';
import { useSocket } from '@/contexts/SocketContext';
import bg from '@/assets/img/admin-answers-bg.png';
import questionBg from '@/assets/img/small-box.png';
import wrongAnswerBtnBg from '@/assets/img/admin-wrong-answer-btn-red-bg.png';
import cross from '@/assets/img/cross.png';
import grayCross from '@/assets/img/gray-cross.png';
import logo from '@/assets/img/logo.svg';
import AdminAnswerButton from './AdminAnswerButton';
import BlueFrame from '@/components/root/BlueFrame';

type Props = {
    question: QuestionWithAnswers;
};

const AdminMainGame = ({ question }: Props) => {
    const [wrongCount, setWrongCount] = useState<number>(0);

    const socket = useSocket();
    const handleOpenAnswer: (answerId: string) => void = (answerId) => {
        socket.emit(SOCKETS.EMIT.ANSWER.OPEN_ANSWER, answerId, question.uuid);
    };

    const handleWrongAnswer:
        | React.MouseEventHandler<HTMLButtonElement>
        | undefined = () => {
        socket.emit(SOCKETS.EMIT.ANSWER.WRONG_ANSWER, question.uuid);

        if (wrongCount < 4) {
            setWrongCount((prevCount) => prevCount + 1);
        } else {
            setWrongCount(1);
        }
    };

    useEffect(() => {
        socket.emit(
            SOCKETS.EMIT.ROOM.CREATE_ROOM,
            question.uuid,
            question.uuid,
        );
    }, [question, socket]);

    return (
        <div className="flex w-full justify-center">
            <div
                className="flex justify-center items-center h-screen w-screen relative bg-center bg-no-repeat bg-[length:25rem]"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="flex flex-col gap-3 items-center p-4 absolute h-[47rem] w-[24.7rem] rounded-xl">
                    <img
                        className="absolute -top-10 h-28"
                        src={logo}
                        alt="logo"
                    />
                    <BlueFrame>
                        <h1
                            className="text-sm font-semibold text-white rounded-lg border-white border-2 pt-10 pb-2 px-4 text-center uppercase bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url(${questionBg})` }}
                        >
                            {question.question}
                        </h1>
                    </BlueFrame>
                    <BlueFrame>
                        <>
                            {Array.from({ length: 8 }, (_, i) => {
                                const answer = question?.answers[i];
                                return (
                                    <AdminAnswerButton
                                        answer={answer}
                                        handleOpen={(answerId) => {
                                            handleOpenAnswer(answerId);
                                        }}
                                        index={i}
                                        key={
                                            answer
                                                ? `button-${answer.uuid}`
                                                : `empty-button-${i}`
                                        }
                                    />
                                );
                            })}
                        </>
                    </BlueFrame>
                    <section className="flex w-full justify-between gap-4 items-center">
                        <div className="flex">
                            <img
                                className="h-[4.5rem]"
                                alt="cross"
                                src={wrongCount > 0 ? cross : grayCross}
                            />
                            <img
                                className="h-[4.5rem]"
                                alt="cross"
                                src={wrongCount > 1 ? cross : grayCross}
                            />
                            <img
                                className="h-[4.5rem]"
                                alt="cross"
                                src={wrongCount > 2 ? cross : grayCross}
                            />
                        </div>
                        <div>
                            <img
                                className="h-[4.5rem]"
                                alt="cross"
                                src={wrongCount > 3 ? cross : grayCross}
                            />
                        </div>
                    </section>
                    <BlueFrame>
                        <button
                            className="relative border-2 border-white rounded-lg text-sm font-semibold uppercase h-10 text-center text-white w-full bg-center bg-no-repeat bg-cover"
                            onClick={handleWrongAnswer}
                            style={{
                                backgroundImage: `url(${wrongAnswerBtnBg})`,
                            }}
                        >
                            WRONG
                        </button>
                    </BlueFrame>
                </div>
            </div>
        </div>
    );
};

export default AdminMainGame;
