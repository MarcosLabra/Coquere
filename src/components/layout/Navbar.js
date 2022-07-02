import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="navBar">
            <NavHashLink to="/#" activeClassName="active"><p>Inicio</p></NavHashLink>
            <NavHashLink to="/nosotros#" activeClassName="active"><p>Nosotros</p></NavHashLink>
            <NavHashLink to="/diplomados#" activeClassName="active"><p>Diplomados</p></NavHashLink>
            <NavHashLink to="/talleres#" activeClassName="active"><p>Talleres</p></NavHashLink>
            <NavHashLink to="/empresarial#" activeClassName="active"><p>Empresarial</p></NavHashLink>
            <NavHashLink to="/contacto#" activeClassName="active"><p>Contacto</p></NavHashLink>
        </div>
    )
}

export default Navbar

