import { useState, useEffect } from "react";
import axios from "axios";

export default function usePreguntas(){
    const[preguntas, setPreguntas] = useState([]);
    const [filtro, setFiltro] = useState("");

    const getPreguntas = async () =>{
        try{
            const response = await axios.get("http://localhost:8080/api/preguntas");
            setPreguntas(response.data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() =>{
        getPreguntas();
    }, []);

    const preguntasFiltradas = preguntas.filter(pregunta =>
        pregunta.pregunta.toLowerCase().includes(filtro.toLowerCase())
    );

    const filtrarPreguntas = (event) => {
        setFiltro(event.target.value)
    }

    return {preguntasFiltradas, filtrarPreguntas}
}