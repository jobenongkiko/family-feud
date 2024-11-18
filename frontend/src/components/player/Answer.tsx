import { useEffect, useState } from 'react';
import SmallBox from '@/assets/img/small-box.png';
import { usePlayAudio } from '@/hooks/client-hooks/useAudioPlayer';
import correctAnswer from '@/assets/audio/correct-answer.mp3';
import { useSocket } from '@/contexts/SocketContext';
import { SOCKETS } from '@/constants';
import AnswerNumber from '@/components/player/AnswerNumber';

type Props = {
    answer: Answer | undefined;
    index: number;
};

const Answer = ({ answer, index }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { play } = usePlayAudio(correctAnswer);

    const socket = useSocket();

    const handleAnswerOpened = (answerId: string) => {
        console.log(`Answer opened: ${answerId}`);
        if (answer && answerId === answer.uuid) {
            setIsOpen(true);
            play();
        }
    };

    useEffect(() => {
        socket.on(SOCKETS.LISTEN.ANSWER.OPEN_ANSWER, handleAnswerOpened);

        return () => {
            socket.off(SOCKETS.LISTEN.ANSWER.OPEN_ANSWER, handleAnswerOpened);
        };
    }, [socket, index, play]);

    return (
        <div
            className="cursor-pointer bg-cover bg-center w-full h-full text-white text-2xl border-white border-4 rounded-lg font-semibold flex items-center justify-center select-none"
            style={{
                backgroundImage: `url(${SmallBox})`,
            }}
        >
            {isOpen && answer ? (
                <span>{answer.answer}</span>
            ) : (
                <AnswerNumber isVisible={!!answer} index={index} />
            )}
        </div>
    );
};

export default Answer;
