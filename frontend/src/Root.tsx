import { Outlet } from 'react-router';
import SmallCircle from './assets/circle-small.svg';
import LargeCircle from './assets/circle-large.svg';

const Root = () => {
    return (
        <main>
            <img
                className="select-none animate-spin-slow ani absolute -left-36 -top-48 -z-10 h-[60%] opacity-40"
                src={SmallCircle}
                alt="small circle"
            />
            <img
                className="select-none animate-spin-slow ani absolute -right-36 -top-48 -z-10 h-[60%] opacity-40"
                src={SmallCircle}
                alt="small circle"
            />
            <img
                className="select-none animate-spin-slow ani absolute -right-36 -bottom-48 -z-10 h-[60%] opacity-40"
                src={SmallCircle}
                alt="small circle"
            />
            <img
                className="select-none animate-spin-slow ani absolute -left-36 -bottom-48 -z-10 h-[60%] opacity-40"
                src={SmallCircle}
                alt="small circle"
            />
            <img
                className="select-none animate-spin-slow ani absolute -top-60 inset-0 flex w-full self-center h-[160%] -z-10 opacity-40"
                src={LargeCircle}
                alt="large circle"
            />
            <Outlet />
        </main>
    );
};

export default Root;
