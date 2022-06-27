import React from 'react'

const PortadaPaginas = ({img,titulo}) => {
    return (
        <>
            <div className='portada'>
                <img src={img} alt="" />
            </div>
            <div className='titulo'>
                <h1 className='textoTitulo'>{titulo}</h1>
            </div>
        </>
        
    )
}

export default PortadaPaginas