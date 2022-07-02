import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const MobileMenu = () => {

  function handleClick() {
    if (document.getElementById('mobileMenu').classList.contains('show')) {
      document.getElementById('mobileMenu').classList.toggle('show');
    }
  }

  function handleClickNosotors() {
    document.getElementById('nosotros').classList.toggle('bgVerde')
    document.getElementById('nosotrosDesplegable').classList.toggle('showDesplegables')
  }
  function handleClickDiplomados() {
    document.getElementById('diplomados').classList.toggle('bgVerde')
    document.getElementById('diplomadosDesplegable').classList.toggle('showDesplegables')
  }

  function handleClickTalleres() {
    document.getElementById('talleres').classList.toggle('bgVerde')
    document.getElementById('talleresDesplegable').classList.toggle('showDesplegables')
  }


  return (
    <div className="mobileMenu" id="mobileMenu">
      <div className="menu-links">
        <NavLink to="/" onClick={handleClick} className='menu-links__links'><h3>Inicio</h3></NavLink>
        <div className='menu-links__desplegables' id="nosotros">
          <NavLink to="/nosotros" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Nosotros</h3></NavLink>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickNosotors} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='nosotrosDesplegable'>
          <HashLink to="/nosotros#historiaCoquere" activeClassName="active" onClick={handleClick}><h3>historia Coquere</h3></HashLink>
          <HashLink to="/nosotros#instalaciones" activeClassName="active" onClick={handleClick}><h3>Instalaciones</h3></HashLink>
          <HashLink to="/nosotros#rentaNuestrasInstalaciones" activeClassName="active" onClick={handleClick}><h3>Renta Nuestras Instalaciones</h3></HashLink>
        </div>
        <div className='menu-links__desplegables' id='diplomados'>
          <NavLink to="/diplomados" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Diplomados</h3></NavLink>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickDiplomados} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='diplomadosDesplegable'>
          <NavLink to="/diplomados/reposteria-basica" activeClassName="active" onClick={handleClick}><h3>Basico de reposteria</h3></NavLink>
          <NavLink to="/diplomados/reposteria-nivel-2" activeClassName="active" onClick={handleClick}><h3>Nivel 2 de reposteria</h3></NavLink>
          <NavLink to="/diplomados/reposteria-intensiva" activeClassName="active" onClick={handleClick}><h3>Intensivo de reposteria</h3></NavLink>
          <NavLink to="/diplomados/panaderia" onClick={handleClick}><h3>Panaderia</h3></NavLink>
          <NavLink to="/diplomados/gelatinas" activeClassName="active" onClick={handleClick}><h3>Gelatinas</h3></NavLink>
        </div>
        <div className='menu-links__desplegables' id='talleres'>
          <NavLink to="/talleres" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Talleres Cortos</h3></NavLink>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickTalleres} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='talleresDesplegable'>
          <NavLink to="/talleres" activeClassName="active" onClick={handleClick}><h3>Reposteria</h3></NavLink>
          <NavLink to="/talleres" activeClassName="active" onClick={handleClick}><h3>Cocina salada</h3></NavLink>
          <NavLink to="/talleres" activeClassName="active" onClick={handleClick}><h3>cocteleria</h3></NavLink>
          <NavLink to="/talleres" activeClassName="active" onClick={handleClick}><h3>Parrilla</h3></NavLink>
        </div>
        <NavLink to="/empresarial" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Empresarial</h3></NavLink>
        <NavLink to="/contacto" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Contacto</h3></NavLink>
      </div>
    </div>
  )
}

export default MobileMenu