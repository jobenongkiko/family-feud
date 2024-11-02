import { useRef } from 'react';

export const usePlayAudio = (src: string) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const play = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(src);
        }

        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return { play, pause };
};