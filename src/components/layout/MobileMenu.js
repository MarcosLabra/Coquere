import { Link } from 'react-router-dom';


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
        <Link to="/" onClick={handleClick} className='menu-links__links'><h3>Inicio</h3></Link>
        <div className='menu-links__desplegables' id="nosotros">
          <Link to="/nosotros" onClick={handleClick} className='menu-links__links'><h3>Nosotros</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickNosotors} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='nosotrosDesplegable'>
          <Link to="/nosotros/historia-coquere" onClick={handleClick}><h3>historia Coquere</h3></Link>
          <Link to="/nosotros/instlaciones" onClick={handleClick}><h3>Instalaciones</h3></Link>
          <Link to="/nosotros/chefs" onClick={handleClick}><h3>Chefs</h3></Link>
        </div>
        <div className='menu-links__desplegables' id='diplomados'>
          <Link to="/diplomados" onClick={handleClick} className='menu-links__links'><h3>Diplomados</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickDiplomados} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='diplomadosDesplegable'>
          <Link to="/diplomados/Basico-reposteria" onClick={handleClick}><h3>Basico de reposteria</h3></Link>
          <Link to="/diplomados/nivel2-reposteria" onClick={handleClick}><h3>Nivel 2 de reposteria</h3></Link>
          <Link to="/diplomados/intensivo-reposteria" onClick={handleClick}><h3>Intensivo de reposteria</h3></Link>
          <Link to="/diplomados/panaderia" onClick={handleClick}><h3>Panaderia</h3></Link>
          <Link to="/diplomados/gelatina" onClick={handleClick}><h3>Gelatina</h3></Link>
        </div>
        <div className='menu-links__desplegables' id='talleres'>
          <Link to="/talleres" onClick={handleClick} className='menu-links__links'><h3>Talleres</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={handleClickTalleres} />
        </div>
        <div className='menu-links__desplegables--desplegados' id='talleresDesplegable'>
          <Link to="/talleres/reposteria" onClick={handleClick}><h3>Reposteria</h3></Link>
          <Link to="/talleres/cocina-salada" onClick={handleClick}><h3>Cocina salada</h3></Link>
          <Link to="/talleres/cocteleria" onClick={handleClick}><h3>cocteleria</h3></Link>
          <Link to="/talleres/parrilla" onClick={handleClick}><h3>Parrilla</h3></Link>
        </div>
        <Link to="/empresarial" onClick={handleClick} className='menu-links__links'><h3>Empresarial</h3></Link>
        <Link to="/contacto" onClick={handleClick} className='menu-links__links'><h3>Contacto</h3></Link>
      </div>
    </div>
  )
}

export default MobileMenu