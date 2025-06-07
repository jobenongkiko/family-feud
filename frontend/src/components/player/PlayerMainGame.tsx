import mainFrame from '@/assets/img/main-frame.png';
import Answer from '@/components/player/Answer';
import ScoreBox from '@/components/player/ScoreBox';
import { useEffect, useState } from 'react';
import { SOCKETS } from '@/constants';
import { useSocket } from '@/contexts/SocketContext';
import Cross from '@/components/player/Cross';

type Props = {
    question: QuestionWithAnswers;
};

const PlayerMainGame = ({ question }: Props) => {
    const [wrongCount, setWrongCount] = useState<number>(0);
    const [crossToggler, setCrossToggler] = useState<number>(0);
    const socket = useSocket();

    useEffect(() => {
        socket.emit(SOCKETS.EMIT.ROOM.JOIN_ROOM, question.uuid);
    }, [question, socket]);

    useEffect(() => {
        const handleSetWrongCount = () => {
            if (wrongCount < 3) {
                setWrongCount((prevCount) => prevCount + 1);
            } else {
                setWrongCount(1);
            }
        };

        socket.on(SOCKETS.LISTEN.ANSWER.WRONG_ANSWER, handleSetWrongCount);
        return () => {
            socket.off(SOCKETS.LISTEN.ANSWER.WRONG_ANSWER, handleSetWrongCount);
        };
    }, [wrongCount, socket]);

    useEffect(() => {
        const handleCrossToggler = () => {
            setCrossToggler((prevCount) => prevCount + 1);
        }

        socket.on(
            SOCKETS.LISTEN.ANSWER.SINGLE_WRONG_ANSWER,
            handleCrossToggler
        );

        return () => {
            socket.off(
                SOCKETS.LISTEN.ANSWER.SINGLE_WRONG_ANSWER,
                handleCrossToggler
            );
        };
    }, [crossToggler, socket]);

    return (
        <div
            className="flex justify-center items-center h-screen w-screen relative bg-[length:83rem] bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mainFrame})` }}
        >
            {wrongCount > 0 && <Cross count={wrongCount} />}
            {crossToggler > 0 && <Cross count={1} key={crossToggler}/>}

            <section
                className="absolute flex gap-1 w-[40.5rem] h-[19.5rem]"
                style={{ aspectRatio: '@ 1' }}
            >
                {Array.from({ length: 2 }, (_, i) => (
                    <div className="flex flex-col flex-1 gap-1" key={i}>
                        {Array.from({ length: 4 }, (_, j) => {
                            const currentIndex = j + (i === 1 ? 4 : 0);
                            const answer = question.answers[currentIndex];
                            return (
                                <Answer
                                    key={currentIndex}
                                    answer={answer}
                                    index={currentIndex + 1}
                                />
                            );
                        })}
                    </div>
                ))}
            </section>
            <div className="absolute w-[77.5rem] h-[50rem]">
                <ScoreBox className="right-[6.3%] top-[43%]" value={'-'} />
                <ScoreBox className="left-[6.3%] top-[43%]" value={'-'} />
                <ScoreBox className="right-[44.8%] top-[11%]" value={'-'} />
            </div>
        </div>
    );
};

export default PlayerMainGame;
