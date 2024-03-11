import {Link, useNavigate} from "react-router-dom";
import {React, useState, useEffect} from 'react'
import axios from "axios";
import { LogoHome } from "./Icons";
import { UseUser } from "../hooks/UseUser";

function Bienvenida() {
    const navigate = useNavigate();
    const{user, setUser} = UseUser();
    const[partidas, setPartidas] = useState([]);
    const[error, setError] = useState();
    const userId = sessionStorage.getItem("userId");
    const cerrarSesion = () =>{
        sessionStorage.removeItem("userId");
        navigate("/");
    }
    const getUser = async () =>{
        if(userId){
            try{
                const response = await axios.get("http://localhost:8080/api/admin/" + userId);
                setUser(response.data);
                setPartidas(response.data.partidas);
            }catch (e){
                console.log(e);
            }
        }
        else{
            navigate("/");
        }
    }
    useEffect(() =>{
        getUser();
    },[])

    const [filtro, setFiltro] = useState("")

    const filtrarPartidas = (event) => {
        setFiltro(event.target.value)
    }
    const partidasFiltradas = partidas.filter(partida =>
        partida.nombre.toLowerCase().includes(filtro.toLowerCase())
    )
    
    return (
        <>
            {
                user ? (
                    <section className="bg-gradient-to-br from-orange-300 to-rose-600 h-screen">
                <button onClick={cerrarSesion}>Cerrar sesión </button>
                <header>
                    <div className="text-center p-8">
                        <h1 className="font-extrabold animate-flip-down animate-ease-in-out text-5xl">HOLA {user.username}, ESTAS SON TUS PARTIDAS</h1>
                    </div>
                    <div className="flex justify-between mx-5">
                        <input className="ms-5 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" type="search" placeholder=" Buscar partida" onChange={filtrarPartidas}/>
                        <div className="flex gap-7 mx-5">
                            <button className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">CREAR PARTIDA</button>
                            <Link to="/createPregunta" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">INTRODUCIR PREGUNTAS</Link>
                            <Link to="/" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold"><LogoHome/>Inicio</Link>
                        </div>
                    </div>
                </header>
                <main className="flex flex-wrap m-10 gap-5">
                    <Link to="/preguntas">
                        <div className="rounded-lg p-10 bg-red-200 w-80 h-52 text-xl hover:bg-red-300 hover:cursor-pointer font-semibold">
                        <h1>VER TODAS LAS PREGUNTAS</h1>
                        </div>
                    </Link>
                    {partidasFiltradas.map(partida => (
                            <div key={partida.id} className="rounded-lg p-10 bg-red-200 w-80 h-52 text-xl hover:bg-red-300 hover:cursor-pointer font-semibold">
                                <h1>{partida.nombre}</h1>
                            </div>
                        ))}
                </main>
            </section>
                ) : (
                    <p>{error}</p>
                )
            }
        </>
    )
}

export default Bienvenida
