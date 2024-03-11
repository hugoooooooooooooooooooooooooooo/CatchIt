import React from 'react';
import { useId } from 'react';

export function IntroducirPreguntas() {
    const enunciado = useId();
    const resCorrecta = useId();
    const res1 = useId();
    const res2 = useId();
    const res3 = useId();
    const nivel = useId();
    const dificultad = useId();
    const asignatura = useId();
    const tiempo = useId();

    return (
        <>
            <section className="bg-gradient-to-br from-orange-300 to-rose-600 h-screen">
                <header className="font-extrabold animate-flip-down animate-ease-in-out text-5xl text-center p-10">
                    <h1>INTRODUCIR PREGUNTAS</h1>
                </header>
                <main className='flex justify-center'>
                    <div className='w-1/2 flex flex-col gap-10'>
                        <div>
                            <label className='font-semibold' htmlFor={enunciado}>Enunciado: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={enunciado} required />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={resCorrecta}>Respuesta Correcta: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={resCorrecta} required />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={res1}>Respuesta 1: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={res1} required />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={res2}>Respuesta 2: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={res2} required />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={res3}>Respuesta 3: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={res3} required />
                        </div>
                    </div>
                    <div className='w-auto flex flex-col gap-10'>
                        <div>
                            <label className='font-semibold' htmlFor={nivel}>Nivel De Pregunta: </label><br />
                            <select
                                className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                                id={dificultad}
                                required
                            >
                                <option value="1ESO">1 ESO</option>
                                <option value="2ESO">2 ESO</option>
                                <option value="3ESO">3 ESO</option>
                                <option value="4ESO">4 ESO</option>
                                <option value="1BACH">1 BACH</option>
                                <option value="2BACH">2 BACH</option>
                            </select>
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={dificultad}>Dificultad: </label><br />
                            <select
                                className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                                id={dificultad}
                                required
                            >
                                <option value="facil">Fácil</option>
                                <option value="intermedia">Intermedia</option>
                                <option value="dificil">Difícil</option>
                            </select>
                        </div>

                        <div>
                            <label className='font-semibold' htmlFor={asignatura}>Asignatura: </label><br />
                            <select
                                className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                                id={dificultad}
                                required
                            >
                                <option value="1ESO">Matematicas</option>
                                <option value="2ESO">Lengua</option>
                                <option value="3ESO">Física</option>
                                <option value="4ESO">Quimica</option>
                                <option value="1BACH">Biologia</option>
                                <option value="1ESO">Geoolgía</option>
                                <option value="2BACH">Inglés</option>
                                <option value="1ESO">Historia</option>
                                <option value="1ESO">Francés</option>
                                <option value="1ESO">Música</option>
                                <option value="1ESO">Informatica</option>
                                <option value="1ESO">Plástica</option>
                                <option value="1ESO">Filosofía</option>
                                <option value="1ESO">Economía</option>
                            </select>
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor={tiempo}>Tiempo: </label><br />
                            <input className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="number" id={tiempo} required />
                        </div>
                    </div>

                </main>
                <div className='flex justify-center'>
                    <button className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">INTRODUCIR PREGUNTA</button>
                </div>
            </section>
        </>
    );
}
