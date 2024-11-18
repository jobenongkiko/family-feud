import CrossIcon from '@/assets/img/cross.png';
import WrongAnswerSound from '@/assets/audio/wrong-answer.mp3';
import { usePlayAudio } from '../../hooks/client-hooks/useAudioPlayer';

type Props = {
    count: number;
};

const Cross = ({ count }: Props) => {
    usePlayAudio(WrongAnswerSound).play();

    return (
        <div className="absolute z-50 flex animate-scale-fade" key={count}>
            {Array.from({ length: count }, (_, index) => (
                <img
                    key={count + '-' + index}
                    className="size-72"
                    src={CrossIcon}
                />
            ))}
        </div>
    );
};

export default Cross;
