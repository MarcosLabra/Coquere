import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navBar">
            <Link to="/"><p>Inicio</p></Link>
            <Link to="/nosotros"><p>Nosotros</p></Link>
            <Link to="/diplomados"><p>Diplomados</p></Link>
            <Link to="/talleres"><p>Talleres</p></Link>
            <Link to="/empresarial"><p>Empresarial</p></Link>
            <Link to="/contacto"><p>Contacto</p></Link>
        </div>
    )
}

export default Navbar

