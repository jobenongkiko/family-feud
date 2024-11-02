import SmallBox from '../assets/small-box.png';
import { useNavigate } from 'react-router-dom';
type Props = {
    value: string;
    path: string;
};

const PrimaryButton = ({ value, path }: Props) => {
    const navigate = useNavigate();
    return (
        <button
            className="cursor-pointer bg-cover bg-center w-[20rem] h-14 text-white text-2xl border-white border-4 rounded-lg font-semibold transition-transform duration-100 ease-in-out transform hover:scale-105"
            style={{
                backgroundImage: `url(${SmallBox})`,
                boxShadow: '10px 16px 12px rgba(0, 0, 0)',
            }}
            onClick={() => navigate(path)}
        >
            {value}
        </button>
    );
};

export default PrimaryButton;
