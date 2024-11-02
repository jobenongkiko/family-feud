type Props = {
    className: string;
    value: number;
};

const ScoreBox = ({ className, value }: Props) => {
    return (
        <section
            className={`absolute w-[8%] h-[11%] bg-primaryBlue border-4 border-white rounded-xl text-white font-bold text-4xl flex justify-center items-center ${className}`}
        >
            {value}
        </section>
    );
};

export default ScoreBox;
