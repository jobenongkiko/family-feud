import { useGetQuestionsQuery } from '@/hooks/api-hooks/questionHook';
import Logo from '@/assets/img/logo.svg';
import QuestionButton from '@/components/admin/QuestionButton';
import Loader from '@/components/root/Loader';

const Questions = () => {
    const { data: questions, isLoading } = useGetQuestionsQuery();

    if (isLoading) return <Loader />;

    return (
        <div className="flex justify-center">
            <section className="flex flex-col items-center justify-center">
                <img className="h-[12rem] my-12" src={Logo} alt="main logo" />
                <div className="flex flex-col items-center gap-6 max-h-[40rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[48rem] mx-2 py-2 px-6 overflow-y-scroll">
                    {questions?.map((question: Question) => (
                        <QuestionButton
                            value={question.question}
                            key={question.uuid}
                            path={`/game/question/${question.uuid}?isAdmin=true`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Questions;
