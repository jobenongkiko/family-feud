import SmallCircle from './assets/circle-small.svg';
import LargeCircle from './assets/circle-large.svg';

type AnimatedElementProps = {
    additionalClassNames: string;
    srcImg: string;
    alt: string;
};

const AnimatedElement = ({
    additionalClassNames,
    srcImg,
    alt,
}: AnimatedElementProps) => {
    return (
        <img
            className={`select-none animate-spin-slow absolute opacity-40 ${additionalClassNames}`}
            src={srcImg}
            alt={alt}
        />
    );
};

const AnimatedBackground = () => {
    return (
        <div className='fixed w-screen h-screen -z-10'>
            <AnimatedElement
                additionalClassNames="-left-36 -top-48 h-[60%]"
                srcImg={SmallCircle}
                alt="small circle"
            />
            <AnimatedElement
                additionalClassNames="-right-36 -top-48 h-[60%]"
                srcImg={SmallCircle}
                alt="small circle"
            />
            <AnimatedElement
                additionalClassNames="-right-36 -bottom-48 h-[60%]"
                srcImg={SmallCircle}
                alt="small circle"
            />
            <AnimatedElement
                additionalClassNames="-left-36 -bottom-48 h-[60%]"
                srcImg={SmallCircle}
                alt="small circle"
            />
            <AnimatedElement
                additionalClassNames="-top-60 inset-0 flex w-full self-center h-[160%]"
                srcImg={LargeCircle}
                alt="large circle"
            />
        </div>
    );
};

export default AnimatedBackground;
