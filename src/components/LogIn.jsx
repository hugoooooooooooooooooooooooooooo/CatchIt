import { useId } from 'react'
import { Link } from 'react-router-dom';
import { HeaderComun } from './HeaderComun.jsx';

export function LogIn({ponerLogo}) {
    const usernameId = useId()
    const passwordId = useId()


    return (
        <section className="bg-gradient-to-br from-lime-300 to-green-400 h-screen">
            {ponerLogo  && (
                <HeaderComun />
            )}
            <main className="flex items-center justify-center" id="admin">

                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-md w-full max-w-md mt-36">
                    <h2 className="text-3xl font-extrabold mb-6 text-center">Inicia Sesión</h2>

                    <form className="space-y-4">
                        <div>
                            <span className="bg-red-600 text-white rounded-md p-0.5 font-mono">Error!! Mensaje de error</span>
                            <label htmlFor={usernameId} className="block text-sm font-medium text-gray-700">Usuario:</label>
                            <input type="text" id={usernameId} name="username" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <span className="bg-red-600 text-white rounded-md p-0.5 font-mono">Error!! Mensaje de error</span>
                            <label htmlFor={passwordId} className="block text-sm font-medium text-gray-700">Contraseña:</label>
                            <input type="password" id={passwordId} name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <Link to="/repositorio" className="px-4 py-2 bg-teal-700 hover:bg-emerald-500 font-medium rounded-md text-white flex justify-center">Iniciar Sesión</Link>
                        <Link className="flex justify-center transition-transform transform hover:scale-110 hover:cursor-pointer" to="/registro">¿No tienes cuenta?, Regístrate</Link>
                    </form>
                </div>
            </main>
        </section>
    )
}