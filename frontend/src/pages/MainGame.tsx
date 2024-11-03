import Loader from '@/components/root/Loader';
import { useGetQuestionWithAnswerQuery } from '@/hooks/api-hooks/questionHook';
import { useParams, useSearchParams } from 'react-router-dom';
import mainFrame from '@/assets/img/main-frame.png';
import Answer from '@/components/player/Answer';
import ScoreBox from '@/components/player/ScoreBox';
import { usePlayAudio } from '@/hooks/client-hooks/useAudioPlayer';
import mainTheme from '@/assets/audio/main-theme.mp3';
import { useSocket } from '@/contexts/SocketContext';
import { SOCKETS } from '@/constants';
import { useEffect } from 'react';

const MainGame = () => {
    const { questionId } = useParams();

    const { data: question, isLoading } = useGetQuestionWithAnswerQuery(
        questionId!,
    );
    const socket = useSocket();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('isAdmin')) {
            socket.emit(
                SOCKETS.EMIT.ROOM.CREATE_ROOM,
                questionId,
                questionId,
                searchParams.get('isAdmin'),
            );
        } else {
            socket.emit(
                SOCKETS.EMIT.ROOM.JOIN_ROOM,
                searchParams.get(questionId!),
            );
        }
    }, []);

    usePlayAudio(mainTheme).play();

    const handleOpenAnswer: (answerId: string) => void = (answerId) => {
        socket.emit(
            SOCKETS.EMIT.ANSWER.OPEN_ANSWER,
            answerId,
            searchParams.get('socketId'),
        );
    };

    if (isLoading) return <Loader />;

    return searchParams.get('isAdmin') ? (
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
    ) : (
        <div
            className="flex justify-center items-center h-screen w-screen relative bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mainFrame})` }}
        >
            <section
                className="absolute flex gap-1 w-[36.5%] h-[33.5%]"
                style={{ aspectRatio: '@ 1' }}
            >
                {Array.from({ length: 2 }, (_, i) => (
                    <div className="flex flex-col flex-1 gap-1" key={i}>
                        {Array.from({ length: 4 }, (_, j) => {
                            const currentIndex = j + (i === 1 ? 4 : 0);
                            const answer = question?.answers[currentIndex];
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
            <ScoreBox className="right-[19.9%]" value={100} />
            <ScoreBox className="left-[19.9%]" value={100} />
            <ScoreBox className="self-center top-[17%]" value={100} />
        </div>
    );
};

export default MainGame;
