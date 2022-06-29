import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="coquere">
                <h2>Coquere escuela de cocina</h2>
                <div>
                    <Link to="/diplomados"><p>Diplomados</p></Link>
                    <Link to="/talleres"><p>Talleres cortos</p></Link>
                    <Link to="/empresarial"><p>Actividades empresariales</p></Link>
                </div>
            </div>
            <div className="nuestrasInstalaciones">
                <h2>Nuestras instalaciones</h2>
                <div>
                    <p>Direccion</p>
                    <p>Complemento direccion</p>
                </div>
            </div>
            <div className="contacto">
                <h2>Contacto</h2>
                <div>
                    <p>Teléfono</p>
                    <p>Celular</p>
                    <p>Correo</p>
                </div>
            </div>
            <div className="redesSociales">
                <h2>Redes sociales</h2>
                <div>
                    <div className="redesInLine">
                        <img src="/images/redes/redesFacebook.jpg" alt="logo facebook" />
                        <a href="https://www.facebook.com/escueladecocinacoquere" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                    <div className="redesInLine">
                        <img src="/images/redes/redesInstagram.jpg" alt="logo instagram" />
                        <a href="https://www.instagram.com/co.quere/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="logo">
                <img src="/images/branding/CoquereLogoCircularFooter.webp" alt="Coquere logo footer" />
            </div>
            <hr />
            <div className="derechos">
                <h2>Coquere escuela de cocina 2022 - <br></br>  Todos los derechos reservados</h2>
            </div>
        </footer>
    )
}

export default Footer