import { Outlet } from 'react-router';
import AnimatedBackground from '@/components/AnimatedBackground';

const Root = () => {
    return (
        <main>
            <AnimatedBackground />
            <Outlet />
        </main>
    );
};

export default Root;
