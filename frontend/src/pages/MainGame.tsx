import { useGetQuestionWithAnswerQuery } from '../hooks/questionHook';
import { useParams } from 'react-router-dom';

const MainGame = () => {
    const { questionId } = useParams();
    const { data: question, isLoading } =
        useGetQuestionWithAnswerQuery(questionId!);

    if (isLoading) return <span>Loading...</span>;
    return (
        <div>
            <h1>{question?.question}</h1>
            <section className="flex flex-col">
                {question?.answers.map((answer) => (
                    <div className="flex gap-4">
                        <span>{answer.answer}</span>
                        <span>{answer.points}</span>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MainGame;
