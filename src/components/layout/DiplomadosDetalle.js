import React from 'react'

export const DiplomadosDetalle = ({titulo, duracion, clases,duracionClase}) => {
    return (
        <div className='diplomadosDetalle'>
            <h3>{titulo}</h3>
            <h4>{duracion}</h4>
            <div diplomadosDetalleClases>
                <strong>Clases:</strong>
                <ul>
                    {clases.map(clase => {
                        return(    
                            <li>{clase}</li>
                        )
                        })
                    }
                </ul>
                <p>{duracionClase}</p>     
            </div>
        </div>
    )
}

export default DiplomadosDetalle
