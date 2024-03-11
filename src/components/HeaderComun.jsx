import { Link } from 'react-router-dom';
import { LogoHome } from './Icons.jsx';

export function HeaderComun() {
    return (
        <header className='flex justify-end p-3'>
            <div className='w-10'>
                <Link to="/"><LogoHome /></Link>
            </div>
        </header>
    )
}