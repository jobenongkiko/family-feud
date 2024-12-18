import { ReactElement } from 'react';

type Props = {
    children: ReactElement;
};

const BlueFrame = ({ children }: Props) => {
    return (
        <section className="flex flex-col gap-2 w-full border-4 border-primaryOrange bg-primaryBlue p-[.6rem] rounded-xl">
            {children}
        </section>
    );
};

export default BlueFrame;
