import { useState } from 'react';
import SmallBox from '../assets/small-box.png';
import classnames from 'classnames';

type Props = {
    value: string;
    index: number;
};

const Answer = ({ value, index }: Props) => {
    const [testingBoi, setTestBoi] = useState(false);
    const answerClassnames = classnames({
        'cursor-pointer bg-cover bg-center w-full h-full text-white text-2xl border-white border-4 rounded-lg font-semibold flex items-center justify-center select-none':
            true,
    });

    return testingBoi ? (
        <div
            className={answerClassnames}
            onClick={() => setTestBoi(!testingBoi)}
            style={{
                backgroundImage: `url(${SmallBox})`,
            }}
        >
            {value}
        </div>
    ) : (
        <div
            className={answerClassnames}
            onClick={() => setTestBoi(!testingBoi)}
            style={{
                backgroundImage: `url(${SmallBox})`,
            }}
        >
            <span className='rounded-full bg-numberBlue size-8 text-center select-none text-white'>{index}</span>
        </div>
    );
};

export default Answer;
