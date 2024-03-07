import React from 'react'

function Pregunta(props) {
    const {pregunta, respuestaCorrecta, respuesta1, respuesta2, respuesta3} = props.pregunta;
    return (
        <div>
            <h3>{pregunta}</h3>
            <ul>
                <li> Respuesta correcta: {respuestaCorrecta}</li>
                <li> Respuesta 2: {respuesta1}</li>
                <li>Respuesta 3: {respuesta2}</li>
                <li>Respuesta 4: {respuesta3}</li>
            </ul>
        </div>
    )
}

export default Pregunta
