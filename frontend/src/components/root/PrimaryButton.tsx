import SmallBox from '@/assets/img/small-box.png';

type Props = {
    value: string;
    onClick: () => void;
};

const PrimaryButton = ({ value, onClick }: Props) => {
    return (
        <button
            className="cursor-pointer bg-cover bg-center w-[20rem] h-14 text-white text-2xl border-white border-4 rounded-lg font-semibold transition-transform duration-100 ease-in-out transform hover:scale-105"
            style={{
                backgroundImage: `url(${SmallBox})`,
                boxShadow: '10px 16px 12px rgba(0, 0, 0)',
            }}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default PrimaryButton;
