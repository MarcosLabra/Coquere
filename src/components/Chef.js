import React from 'react'

export const Chef = ({img,titulo,texto}) => {
    return (
        <div className='chefContenedor'>
            <img src={img} alt="" className='chefImg'/>
            <div className='chefDescripcion'>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}
