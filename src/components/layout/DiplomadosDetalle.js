import React from 'react'

export const DiplomadosDetalle = ({ portada, titulo, duracion, clases, duracionClase }) => {
    return (
        <div className='diplomadosDetalle'>
            <h3>{titulo}</h3>
            <img src={portada} alt="" className='diplomadosDetalle--portada'/>
            <div diplomadosDetalleClases>
                <strong>Clases:</strong>
                <ol>
                    {clases.map(clase => {
                        return (
                            <li>{clase}</li>
                        )
                    })
                    }
                </ol>
                <p><span>Duración:</span> {duracion}, cada una de {duracionClase}</p>
                <p>Pregunta por la disponibilidad de fecha más cercana para iniciar tu diplomado.</p>
            </div>
        </div>
    )
}

export default DiplomadosDetalle
