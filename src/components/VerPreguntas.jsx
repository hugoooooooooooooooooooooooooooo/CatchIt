import { LogoEditar, LogoHome } from "./Icons"
import { preguntas } from "./preguntas.json"
import { useState } from "react"

export function VerPreguntas() {

    const [filtro, setFiltro] = useState("")

    const filtrarPreguntas = (event) => {
        setFiltro(event.target.value)
    }
    const preguntasFiltradas = preguntas.filter(pregunta =>
        pregunta.enunciado.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <>
            <body className="bg-gradient-to-br from-orange-300 to-rose-600 min-h-screen">
                <header>
                    <div className="text-center p-8">
                        <h1 className="font-extrabold animate-flip-down animate-ease-in-out text-5xl">TODAS  LAS PREGUNTAS</h1>
                    </div>
                    <div className="flex justify-between mx-5">
                        <input className="ms-5 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" type="search" placeholder=" Buscar pregunta" onChange={filtrarPreguntas} />
                        <div className="flex gap-7 mx-5">
                            <button className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">CREAR PARTIDA</button>
                            <button className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">INTRODUCIR PREGUNTAS</button>
                            <a href="" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold"><LogoHome />Inicio</a>
                        </div>
                    </div>
                </header>
                <main className="p-10 flex flex-wrap gap-5">
                    {preguntasFiltradas.map(pregunta => (
                        <div key={pregunta.id} className="flex justify-between rounded-lg p-3 bg-red-200 w-full h-auto text-xl hover:bg-red-300 hover:cursor-pointer">
                            <div >
                                <p className="font-semibold">{pregunta.enunciado}</p>
                                <p>Respuesta Correcta: {pregunta.respuestaCorrecta}</p>
                                <p>Respuesta 1: {pregunta.respuesta1}</p>
                                <p>Respuesta 2: {pregunta.respuesta2}</p>
                                <p>Respuesta 3: {pregunta.respuesta3}</p>
                                <p>Nivel: {pregunta.nivelPregunta}</p>
                                <p>Dificultad: {pregunta.dificultad}</p>
                                <p>Asignatura: {pregunta.asignatura}</p>
                                <p>Tiempo: {pregunta.tiempo}</p>
                            </div>
                            <div className="w-5">
                                <LogoEditar />
                            </div>
                        </div>
                    ))}
                </main>
            </body>
        </>
    )
}