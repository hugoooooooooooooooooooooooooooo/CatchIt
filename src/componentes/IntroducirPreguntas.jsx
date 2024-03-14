import React from 'react';
import { useId, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { LogoAtras, LogoHome } from './Icons';
import { Link } from 'react-router-dom';
import usePregunta from '../hooks/usePregunta';

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
    const navigate = useNavigate();

    const userId = sessionStorage.getItem("userId");
    const {preguntaId} = useParams();
    const{pregunta} = usePregunta(preguntaId);

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (info) => {
        const infoParams = {
            pregunta: info.pregunta,
            respuestaCorrecta: info.respuestaCorrecta,
            respuesta1: info.respuesta1,
            respuesta2: info.respuesta2,
            respuesta3: info.respuesta3,
            nivel: info.nivel,
            dificultad: info.dificultad,
            asignatura: info.asignatura,
            tiempo: Number(info.tiempo),
            idAdmin: userId
        }
        try {
            if(preguntaId){
                await axios.put("http://localhost:8080/api/pregunta/" + preguntaId, null, {
                    params: infoParams
                });
            }else{
                await axios.post("http://localhost:8080/api/pregunta", null, {
                    params: infoParams
                });
            }
            navigate("/preguntas");

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (preguntaId && pregunta) {
            Object.keys(pregunta).forEach((key) => {
                setValue(key, pregunta[key]);
            });
        }
    }, [preguntaId, pregunta, setValue]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <section className="bg-gradient-to-br from-orange-300 to-rose-600 h-screen">
                <header className="flex justify-between font-extrabold animate-flip-down animate-ease-in-out text-5xl text-center p-10">
                    <button className='w-10' onClick={goBack}>
                        <LogoAtras />
                    </button>
                    <div>
                        <h1>INTRODUCIR PREGUNTAS</h1>
                    </div>
                    <div className='w-10'>
                        <Link to="/"><LogoHome /></Link>
                    </div>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}
                >
                    <main className='flex justify-center'>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <div>
                                <label className='font-semibold' htmlFor={enunciado}>Enunciado: </label><br />
                                <input className='h-10 w-96 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-300' name='pregunta' type="text" id={enunciado} required
                                     {...register("pregunta")}/>
                            </div>
                            <div>
                                <label className='font-semibold' htmlFor={resCorrecta}>Respuesta Correcta: </label><br />
                                <input className='h-10 w-96 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-300' name='respuestaCorrecta' type="text" id={resCorrecta} required
                                    {...register("respuestaCorrecta")}/>
                            </div>
                            <div>
                                <label className='font-semibold' htmlFor={res1}>Respuesta 1: </label><br />
                                <input className='h-10 w-96 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-300' name='respuesta1' type="text" id={res1} required
                                    {...register("respuesta1")} />
                            </div>
                            <div>
                                <label className='font-semibold' htmlFor={res2}>Respuesta 2: </label><br />
                                <input className='h-10 w-96 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' name='respuesta2' type="text" id={res2} required
                                    {...register("respuesta2")}/>
                            </div>
                            <div>
                                <label className='font-semibold' htmlFor={res3}>Respuesta 3: </label><br />
                                <input className='h-10 w-96 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' name='respuesta3' type="text" id={res3} required
                                    {...register("respuesta3")} />
                            </div>
                        </div>
                        <div className='w-auto flex flex-col gap-10'>
                            <div>
                                <label className='font-semibold' htmlFor={nivel}>Nivel De Pregunta: </label><br />
                                <select
                                    className='h-10 w-96 rounded-lg focus:outline-none p-2 focus:ring-2 focus:ring-red-300'
                                    id={dificultad} name="nivel" {...register("nivel")}
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
                                    className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 p-2 focus:ring-red-300'
                                    id={dificultad} name="dificultad" {...register("dificultad")}
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
                                    className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 p-2 focus:ring-red-300'
                                    id={dificultad} name="asignatura" {...register("asignatura")}
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
                                <input className='h-10 w-96 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="number" id={tiempo} name="tiempo" required
                                    {...register("tiempo")} placeholder="30 (default)"/>
                            </div>
                        </div>

                    </main>
                    <div className='flex justify-center'>
                        <button type='submit' className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">
                            {
                                preguntaId ? (
                                        <section> EDITAR PREGUNTA</section>
                                    ) : (
                                        <section>INTRODUCIR PREGUNTA</section>
                                )
                            }
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}