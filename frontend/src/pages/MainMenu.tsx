import Logo from '@/assets/img/logo.svg';
import PrimaryButton from '@/components/root/PrimaryButton';
import mainTheme from '@/assets/audio/main-theme.mp3';
import { usePlayAudio } from '@/hooks/client-hooks/useAudioPlayer';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    usePlayAudio(mainTheme).play();

    const navigate = useNavigate();

    return (
        <div>
            <section className="flex justify-center">
                <img
                    className="h-[37rem] select-none"
                    src={Logo}
                    alt="main logo"
                />
            </section>
            <section className="flex flex-col gap-12 lg:flex-row lg:gap-12 w-full justify-center items-center">
                <PrimaryButton
                    value="CREATE ROOM"
                    onClick={() => {
                        navigate('/question');
                    }}
                />
                <PrimaryButton
                    value="JOIN ROOM"
                    onClick={() => {
                        navigate('/join');
                    }}
                />
            </section>
        </div>
    );
};

export default MainMenu;
