import Loader from '../components/Loader';
import { useGetQuestionWithAnswerQuery } from '../hooks/questionHook';
import { useParams } from 'react-router-dom';
import mainFrame from '../assets/main-frame.png';
import Answer from '../components/Answer';
import ScoreBox from '../components/ScoreBox';

const MainGame = () => {
    const { questionId } = useParams();
    const { data: question, isLoading } = useGetQuestionWithAnswerQuery(
        questionId!,
    );

    if (isLoading) return <Loader />;

    return (
        <div
            className="flex justify-center items-center h-screen w-screen relative bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mainFrame})` }}
        >
            <section
                className="absolute flex gap-1 w-[36.5%] h-[33.5%]"
                style={{ aspectRatio: '1 / 1' }}
            >
                {Array.from({ length: 2 }, (_, i) => (
                    <div className="flex flex-col flex-1 gap-1">
                        {Array.from({ length: 4 }, (_, j) => {
                            const answer = question?.answers[j]?.answer;
                            return (
                                <Answer
                                    key={j}
                                    value={answer || '\u00A0'}
                                    index={j + 1 + (i === 1 ? 4 : 0)}
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
