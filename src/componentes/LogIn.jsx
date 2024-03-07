import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

export function LogIn() {
    const {register, handleSubmit} = useForm();
    const[error, setError] = useState();
    const navigate= useNavigate();
    const onSubmit = async (info) =>{
        try{
            const response = await axios.get("http://localhost:8080/api/login", {params: {
                username: info.username,
                password: info.password
            }});
            setError();
            console.log(response.data.id);
            navigate("/bienvenida/" + response.data.id);
        }catch(e){
            if(e.response.status === 404){
                setError("Credenciales incorrectas, vuelve a intentarlo");
            }else{
                setError("Error de conexión, compruebe la conexión a internet");
            }
        }
    }
    return(
    <>
        <section className="bg-gradient-to-br from-lime-300 to-green-400 h-screen flex items-center justify-center" id="admin">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-extrabold mb-6 text-center">Inicia Sesión</h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="username" className="block text-sm font-medium text-gray-700">Usuario:</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register("username")}/>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register("password")}/>
                    </div>

                    <button type="submit" className="w-full px-4 py-2 bg-teal-700 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-white">Iniciar Sesión</button>
                    <Link to="/registro" className="flex justify-center" href="#">¿No tienes cuenta?, Regístrate</Link>
                </form>
            </div>
        </section>
    </>
    )
}
