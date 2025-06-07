import BigBox from '@/assets/img/big-box.png';
import { useNavigate } from 'react-router-dom';

type Props = {
    value: string;
    path: string;
};

const QuestionButton = ({ value, path }: Props) => {
    const navigate = useNavigate();
    return (
        <button
            className="cursor-pointer bg-cover bg-center w-full min-h-14 text-white text-md border-white border-4 rounded-lg font-semibold transition-transform duration-100 ease-in-out transform hover:scale-105"
            style={{
                backgroundImage: `url(${BigBox})`,
            }}
            onClick={() => navigate(path)}
        >
            {value}
        </button>
    );
};

export default QuestionButton;
