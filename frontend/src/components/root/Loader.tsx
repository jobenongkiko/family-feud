import { RiLoader5Fill } from 'react-icons/ri';

const Loader = () => {
    return (
        <div className="fixed z-10 bg-black/50 flex justify-center items-center w-screen h-screen">
            <RiLoader5Fill className="animate-spin text-white size-12" />
        </div>
    );
};

export default Loader;
