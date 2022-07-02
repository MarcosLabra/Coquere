import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="navBar">
            <NavLink to="/" activeClassName="active"><p>Inicio</p></NavLink>
            <NavLink to="/nosotros" activeClassName="active"><p>Nosotros</p></NavLink>
            <NavLink to="/diplomados" activeClassName="active"><p>Diplomados</p></NavLink>
            <NavLink to="/talleres" activeClassName="active"><p>Talleres</p></NavLink>
            <NavLink to="/empresarial" activeClassName="active"><p>Empresarial</p></NavLink>
            <NavLink to="/contacto" activeClassName="active"><p>Contacto</p></NavLink>
        </div>
    )
}

export default Navbar

