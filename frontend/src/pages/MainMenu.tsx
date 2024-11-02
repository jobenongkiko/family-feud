import Logo from '../assets/logo.svg';
import PrimaryButton from '../components/PrimaryButton';

const MainMenu = () => {
    return (
        <div>
            <section className="flex justify-center">
                <img className="h-[37rem]" src={Logo} alt="main logo" />
            </section>
            <section className="flex flex-col gap-12 lg:flex-row lg:gap-12 w-full justify-center items-center">
                <PrimaryButton value='CHOOSE A QUESTION' path='/question'/>
                <PrimaryButton value='RANDOM QUESTION' path='/question'/>
            </section>
        </div>
    );
};

export default MainMenu;
