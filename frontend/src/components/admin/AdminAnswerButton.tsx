import { useState } from 'react';
import btnBg from '@/assets/img/admin-answers-btn-bg.png';
import btnBgGreen from '@/assets/img/admin-answers-btn-green-bg.png';

type Props = {
    answer: Answer;
    handleOpen: (answerId: string) => void;
    index: number;
};

const AdminAnswerButton = ({ answer, handleOpen, index }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!answer)
        return (
            <button
                className="relative pl-14 border-2 border-white rounded-lg text-sm font-semibold uppercase h-10 text-left text-white w-full bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${btnBg})`,
                }}
            ></button>
        );
    return (
        <button
            className="relative pl-14 border-2 border-white rounded-lg text-sm font-semibold uppercase h-10 text-left text-white w-full bg-center bg-no-repeat bg-cover"
            onClick={() => {
                handleOpen(answer.uuid);
                setIsOpen(true);
            }}
            style={{ backgroundImage: `url(${isOpen ? btnBgGreen : btnBg})` }}
        >
            <span className="absolute left-4">{index + 1}</span>
            <span className="absolute border-l-2 top-0 left-10 border-white h-full"></span>
            {answer.answer}
        </button>
    );
};

export default AdminAnswerButton;
