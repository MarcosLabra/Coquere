import React from 'react'

const Redes = () => {
    return (
        <section id='redes' className="redes">
            <h4>Siguenos en Nuestras Redes</h4>
            <div className="redes__contenedor">
                <div className='redesContenedores'>
                    <a href="https://www.facebook.com/escueladecocinacoquere" target="_blank"><img src="/images/redes/redesContactoFacebook.png" alt="Logo facebook" /></a>
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <a href="https://www.instagram.com/co.quere/" target="_blank"><img src="/images/redes/redesContactoInstagram.png" alt="Logo instagram" /></a>
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <a href="hola@cocinacoquere.com" target="_blank"><img src="/images/redes/redesContactoMail.png" alt="Logo mail" /></a>
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