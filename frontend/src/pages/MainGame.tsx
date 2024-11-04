import Loader from '@/components/root/Loader';
import { useGetQuestionWithAnswerQuery } from '@/hooks/api-hooks/questionHook';
import { useParams, useSearchParams } from 'react-router-dom';

import { usePlayAudio } from '@/hooks/client-hooks/useAudioPlayer';
import mainTheme from '@/assets/audio/main-theme.mp3';
import { useSocket } from '@/contexts/SocketContext';
import { SOCKETS } from '@/constants';
import { useEffect } from 'react';
import PlayerMainGame from '@/components/player/PlayerMainGame';
import AdminMainGame from '@/components/admin/AdminMainGame';

const MainGame = () => {
    const { questionId } = useParams();

    const { data: question, isLoading } = useGetQuestionWithAnswerQuery(
        questionId!,
    );
    const socket = useSocket();
    const [searchParams] = useSearchParams();
    const isAdmin = searchParams.get('isAdmin');

    useEffect(() => {
        if (isAdmin) {
            socket.emit(
                SOCKETS.EMIT.ROOM.CREATE_ROOM,
                questionId,
                questionId,
                isAdmin,
            );
        } else {
            socket.emit(
                SOCKETS.EMIT.ROOM.JOIN_ROOM,
                searchParams.get(questionId!),
            );
        }
    }, []);

    usePlayAudio(mainTheme).play();

    if (isLoading && !question) return <Loader />;

    return isAdmin
        ? question && <AdminMainGame question={question} socket={socket} />
        : question && <PlayerMainGame question={question} />;
};

export default MainGame;
