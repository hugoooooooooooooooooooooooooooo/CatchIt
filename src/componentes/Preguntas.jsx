import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pregunta from './Pregunta';

function Preguntas() {
    const[preguntas, setPreguntas] = useState([]);
    const getPreguntas = async () =>{
        try{
            const response = await axios.get("http://localhost:8080/api/preguntas");
            console.log(response.data);
            setPreguntas(response.data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getPreguntas();
    },[])
    return (
        <div>
            {
                preguntas.map((pregunta) =>{
                    return (
                        <Pregunta pregunta={pregunta} />
                    )
                })
            }
        </div>
    )
}

export default Preguntas
