import { useState } from 'react';
import { LogoUnirse, LogoRules, LogoLogIn, LogoVol } from './Icons.jsx';

export function HeaderInicio() {
    const [vol, setVol] = useState(20)

    const handleChangeVol = (event) => {
        setVol(event.target.value);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <header className="py-5 px-5 flex items-center fixed top-0 w-full justify-between z-30 rounded">
                <div className="flex flex-grow basis-0 animate-fade-right animate-duration-1000 animate-delay-1000">
                    <form action="" className="px-3 flex items-center gap-3">
                        <span className='w-4'>{vol}</span>
                        <LogoVol/>
                        <input 
                        onChange={handleChangeVol}
                        type="range" id="vol" min="0" max="20" className="w-20 h-3 appearance-none bg-gradient-to-r from-gray-50 to-gray-300 rounded-full outline-none .thumb-custom"/>
                    </form>
                </div>

                <div className="flex text-5xl">
                    <h1 className="font-extrabold animate-flip-down animate-ease-in-out">CATCH IT!</h1>
                </div>

                <nav className="flex flex-grow justify-end basis-0">
                    <ul className="flex items-center text-center text-sm animate-fade-left animate-delay-1000 animate-duration-1000">
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125"><button onClick={() => scrollToSection('toGame')}><LogoUnirse/>Unirse</button></li>
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125"><button onClick={() => scrollToSection('admin')}><LogoLogIn/>Log In</button></li>
                        <li className="px-5 hover:bg-opacity-60 rounded-full transition-transform transform hover:scale-125"><button onClick={() => scrollToSection('rules')}><LogoRules/>Rules</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}