import SmallBox from '../assets/small-box.png';
import classnames from 'classnames';

type Props = {
    value: string;
};

const AnswerButton = ({ value }: Props) => {
    const buttonClassnames = classnames({
        'cursor-pointer bg-cover bg-center w-full h-full text-white text-3xl border-white border-4 rounded-lg font-semibold':
            true,
        'transition-transform duration-100 ease-in-out transform hover:scale-105':
            value !== '\u00A0',
        disabled: value === '\u00A0',
    });
  
    return (
        <button
            className={buttonClassnames}
            style={{
                backgroundImage: `url(${SmallBox})`,
            }}
        >
            {value}
        </button>
    );
};

export default AnswerButton;
