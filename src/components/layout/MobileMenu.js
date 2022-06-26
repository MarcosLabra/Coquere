import { Link } from 'react-router-dom';


const MobileMenu = () => {

  function handleClick() {
    if (document.getElementById('mobileMenu').classList.contains('show')) {
      document.getElementById('mobileMenu').classList.toggle('show');
    }
  }
  return (
    <div className="mobileMenu" id="mobileMenu">
      <div className="menu-links">
        <Link to="/" onClick={handleClick}><h3>Inicio</h3></Link>
        <Link to="/nosotros" onClick={handleClick}><h3>Nosotros</h3></Link>
        <Link to="/diplomados" onClick={handleClick}><h3>Diplomados</h3></Link>
        <Link to="/talleres" onClick={handleClick}><h3>Talleres</h3></Link>
        <Link to="/empresarial" onClick={handleClick}><h3>Empresarial</h3></Link>
        <Link to="/contacto" onClick={handleClick}><h3>Contacto</h3></Link>
      </div>
    </div>
  )
}

export default MobileMenu