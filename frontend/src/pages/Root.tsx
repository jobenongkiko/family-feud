import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import AnimatedBackground from '@/components/root/AnimatedBackground';
import HomeButton from '@/components/root/HomeButton';

const Root = () => {
    const location = useLocation();

    return (
        <main>
            <AnimatedBackground />
            {location.pathname !== '/' && <HomeButton />}
            <Outlet />
        </main>
    );
};

export default Root;
