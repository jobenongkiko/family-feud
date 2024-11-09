import Loader from '@/components/root/Loader';
import { useGetQuestionWithAnswerQuery } from '@/hooks/api-hooks/questionHook';
import { useParams, useSearchParams } from 'react-router-dom';
import { usePlayAudio } from '@/hooks/client-hooks/useAudioPlayer';
import mainTheme from '@/assets/audio/main-theme.mp3';
import PlayerMainGame from '@/components/player/PlayerMainGame';
import AdminMainGame from '@/components/admin/AdminMainGame';

const MainGame = () => {
    const { questionId } = useParams();

    const { data: question, isLoading } = useGetQuestionWithAnswerQuery(
        questionId!,
    );
    const [searchParams] = useSearchParams();
    const isAdmin = searchParams.get('isAdmin');

    usePlayAudio(mainTheme).play();

    if (isLoading && !question) return <Loader />;

    return isAdmin
        ? question && <AdminMainGame question={question} />
        : question && <PlayerMainGame question={question} />;
};

export default MainGame;
