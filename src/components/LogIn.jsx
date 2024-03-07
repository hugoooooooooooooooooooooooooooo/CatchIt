import {useId} from 'react'


export function LogIn() {
    const usernameId = useId()
    const passwordId = useId()

    const abrirRegistro = ()=>{
        window.open("/Registro.jsx", "_blank", "width=900,height=900");
    }

    return(
        <section className="bg-gradient-to-br from-lime-300 to-green-400 h-screen flex items-center justify-center" id="admin">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-extrabold mb-6 text-center">Inicia Sesión</h2>

                <form className="space-y-4">
                    <div>
                        <label htmlFor={usernameId} className="block text-sm font-medium text-gray-700">Usuario:</label>
                        <input type="text" id={usernameId} name="username" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label htmlFor={passwordId} className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input type="password" id={passwordId} name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <button type="submit" className="w-full px-4 py-2 bg-teal-700 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-white">Iniciar Sesión</button>
                    <a className="flex justify-center transition-transform transform hover:scale-110 hover:cursor-pointer" onClick={abrirRegistro}>¿No tienes cuenta?, Regístrate</a>
                </form>
            </div>
        </section>
    )
}