const Footer = () => {
    return (
        <footer className="footer">
            <div className="coquere">
                <h2>Coquere escuela de cocina</h2>
                <div>
                    <a href="">Diplomados</a>
                    <a href="">Talleres cortos</a>
                    <a href="">Actividades empresariales</a>
                </div>
            </div>
            <div className="instalaciones">
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
            <div className="redes">
                <h2>Redes sociales</h2>
                <div>
                    <a href="">Facebook</a>
                    <span>-</span>
                    <a href="">Instagram</a>
                </div>
            </div>
            <div className="logo">
                <img src="/images/branding/CoquereLogoCircularFooter.webp" alt="Coquere logo footer" />
            </div>
            <hr />
            <div className="derechos">
                <h2>Coquere escuela de cocina 2022 - Todos los derechos reservados</h2>
            </div>
        </footer>
    )
}

export default Footer