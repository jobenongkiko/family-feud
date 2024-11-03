type Props = {
    isVisible: boolean;
    index: number;
};

const AnswerNumber = ({ isVisible, index }: Props) => {
    return (
        <span
            className={`${
                !isVisible ? 'hidden' : ''
            } rounded-full bg-numberBlue size-8 text-center select-none text-white`}
        >
            {index}
        </span>
    );
};

export default AnswerNumber;
