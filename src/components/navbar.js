import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navBar">
            <Link to="/"><h4 >Inicio</h4></Link>
            <Link to="/nosotros"><h4 >Nosotros</h4></Link>
            <Link to="/diplomados"><h4 >Diplomados</h4></Link>
            <Link to="/talleres"><h4 >Talleres</h4></Link>
            <Link to="/empresarial"><h4 >Empresarial</h4></Link>
            <Link to="/contacto"><h4 >Contacto</h4></Link>
        </div>
    )
}

export default Navbar

