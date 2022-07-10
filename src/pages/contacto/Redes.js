import React from 'react'

const Redes = () => {
    return (
        <section id='redes' className="redes">
            <h4>Siguenos en Nuestras Redes</h4>
            <div className="redes__contenedor">
                <div className='redesContenedores'>
                    <img src="/images/redes/redesContactoFacebook.png" alt="Logo facebook" />
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <img src="/images/redes/redesContactoInstagram.png" alt="Logo instagram" />
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <img src="/images/redes/redesContactoMail.png" alt="Logo mail" />
                    <div>
                        <strong>Email</strong>
                        <p>hola@cocinacoquere.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Redes