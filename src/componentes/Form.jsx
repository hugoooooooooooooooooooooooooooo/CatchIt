import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Bienvenida from './Bienvenida';
import { Link } from 'react-router-dom';

function Form() {
    const {register, handleSubmit} = useForm();
    const[error, setError] = useState();
    const[user, setUser] = useState();
    const onSubmit = async (info) =>{
        try{
            const response = await axios.get("http://localhost:8080/api/login", {params: {
                username: info.usuario,
                password: info.contraseña
            }});
            setUser(response.data.username);
            setError();
            window.location.href = "/bienvenida";
        }catch(e){
            if(e.response.status === 404){
                setError("Credenciales incorrectas, vuelve a intentarlo");
                setUser();
            }else{
                setError("Error de conexión, compruebe la conexión a internet");
            }
        }
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre de usuario:
                    <input type="text" name='usuario' {...register("usuario")}></input>
                </label>
                <label>
                    Contraseña:
                    <input type="password" name='contraseña' {...register("contraseña")}></input>
                </label>
                <input type="submit"></input>
            </form>
            <Link to="/login"> Registrarse </Link>
            {
                error && (
                    <div> 
                        <strong>{error}</strong>
                    </div>
                )
            }
        </div>
    )
}

export default Form
