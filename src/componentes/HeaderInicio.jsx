import { useNavigate } from 'react-router-dom';
import { UseUser } from '../hooks/UseUser.jsx';
import { LogoUnirse, LogoRules, LogoLogIn, LogoLogOut } from './Icons.jsx';

export function HeaderInicio() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const{user, resetUser} = UseUser();
    const navigate = useNavigate();

    const cerrarSesion = () =>{
        navigate("/");
        resetUser();
    }

    return (
        <>
            <header className="py-5 px-5 flex items-center fixed top-0 w-full justify-between z-30 rounded">
                <div className="flex flex-grow basis-0 animate-fade-right animate-duration-1000 animate-delay-1000">
                    <img src="/ipv.jpg" alt="logo IES palomeras" className='w-16' />
                </div>

                <div className="flex text-5xl">
                    <h1 className="font-extrabold animate-flip-down animate-ease-in-out">CATCH IT!</h1>
                </div>

                <nav className="flex flex-grow justify-end basis-0">
                    <ul className="flex items-center text-center text-sm animate-fade-left animate-delay-1000 animate-duration-1000">
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125"><button onClick={() => scrollToSection('toGame')}><LogoUnirse />Unirse</button></li>
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125">

                        {
                            user ? (
                                <button onClick={cerrarSesion}>
                                    <LogoLogOut /> Log out
                                </button>   
                            ) : (
                            <div>
                                <button onClick={() => scrollToSection('admin')}>
                                    <LogoLogIn /> Log in
                                </button>
                            </div>
                        )}
                        </li>
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125"><button onClick={() => scrollToSection('rules')}><LogoRules />Rules</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}