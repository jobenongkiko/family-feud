import { Outlet } from 'react-router';
import AnimatedBackground from '@/components/root/AnimatedBackground';

const Root = () => {
    return (
        <main>
            <AnimatedBackground />
            <Outlet />
        </main>
    );
};

export default Root;
