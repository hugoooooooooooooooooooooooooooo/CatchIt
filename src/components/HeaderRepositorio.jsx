import { Link } from "react-router-dom"

export function HeaderRepositorio(){
    return(
        <header>
                    <div className="text-center p-8">
                        <h1 className="font-extrabold animate-flip-down animate-ease-in-out text-5xl">TUS PARTIDAS</h1>
                    </div>
                    <div className="flex justify-between mx-5">
                        <input className="ms-5 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" type="search" placeholder=" Buscar partida" onChange={filtrarPartidas} />
                        <div className="flex gap-7 mx-5">
                            <Link to="/crearpartida" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">CREAR PARTIDA</Link>
                            <Link to="/introducirpreguntas" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">INTRODUCIR PREGUNTAS</Link>
                            <Link to="/" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold"><LogoHome/>Inicio</Link>
                        </div>
                    </div>
        </header>
    )
}
