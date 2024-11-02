import Loader from '@/components/Loader';
import { useGetQuestionWithAnswerQuery } from '@/hooks/api-hooks/questionHook';
import { useParams, useSearchParams } from 'react-router-dom';
import mainFrame from '@/assets/img/main-frame.png';
import Answer from '@/components/Answer';
import ScoreBox from '@/components/ScoreBox';
import { usePlayAudio } from '@/hooks/react-hooks/useAudioPlayer';
import mainTheme from '@/assets/audio/main-theme.mp3';

const MainGame = () => {
    const { questionId } = useParams();
    const { data: question, isLoading } = useGetQuestionWithAnswerQuery(
        questionId!,
    );
    const [searchParams] = useSearchParams();

    usePlayAudio(mainTheme).play();

    if (isLoading) return <Loader />;

    return searchParams.get('isAdmin') ? (
        <span>asd</span>
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
                            const answer =
                                question?.answers[currentIndex]?.answer;
                            return (
                                <Answer
                                    key={currentIndex}
                                    value={answer || '\u00A0'}
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
