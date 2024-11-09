import mainFrame from '@/assets/img/main-frame.png';
import Answer from '@/components/player/Answer';
import ScoreBox from '@/components/player/ScoreBox';
import { useEffect } from 'react';
import { SOCKETS } from '@/constants';
import { useSocket } from '@/contexts/SocketContext';

type Props = {
    question: QuestionWithAnswers;
};

const PlayerMainGame = ({ question }: Props) => {
    const socket = useSocket();

    useEffect(() => {
        socket.emit(SOCKETS.EMIT.ROOM.JOIN_ROOM, question.uuid);
    }, [question]);

    return (
        <div
            className="flex justify-center items-center h-screen w-screen relative bg-[length:83rem] bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mainFrame})` }}
        >
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
                <ScoreBox className="right-[6.3%] top-[43%]" value={100} />
                <ScoreBox className="left-[6.3%] top-[43%]" value={100} />
                <ScoreBox className="right-[44.8%] top-[11%]" value={100} />
            </div>
        </div>
    );
};

export default PlayerMainGame;
