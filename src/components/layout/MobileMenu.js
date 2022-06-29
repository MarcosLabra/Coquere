import { Link } from 'react-router-dom';


const MobileMenu = () => {

  function handleClick() {
    if (document.getElementById('mobileMenu').classList.contains('show')) {
      document.getElementById('mobileMenu').classList.toggle('show');
    }
  }

  // function handleClickNosotors(){
  //   alert('nosotros')
  // }

  // function handleClickDiplomados(){
  //   alert('Diplomados')
  // }

  // function handleClickTalleres(){
  //   alert('Talleres')
  // }
  

  return (
    <div className="mobileMenu" id="mobileMenu">
      <div className="menu-links">
        <Link to="/" onClick={handleClick}><h3>Inicio</h3></Link>
        <div className='menu-links__desplegables'>
          <Link to="/nosotros" onClick={handleClick}><h3>Nosotros</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={()=>{document.getElementById('nosotros').classList.toggle('showDesplegables')}}/>
        </div>
        <div className='menu-links__desplegables--desplegados' id='nosotros'>
          <Link to="/nosotros/historia-coquere" onClick={handleClick}><h3>historia Coquere</h3></Link>
          <Link to="/nosotros/instlaciones" onClick={handleClick}><h3>Instalaciones</h3></Link>
          <Link to="/nosotros/chefs" onClick={handleClick}><h3>Chefs</h3></Link>
        </div>
        <div className='menu-links__desplegables'>
          <Link to="/diplomados" onClick={handleClick}><h3>Diplomados</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={()=>{document.getElementById('diplomados').classList.toggle('showDesplegables')}}/>
        </div>
        <div className='menu-links__desplegables--desplegados' id='diplomados'>
          <Link to="/diplomados/Basico-reposteria" onClick={handleClick}><h3>Basico de reposteria</h3></Link>
          <Link to="/diplomados/nivel2-reposteria" onClick={handleClick}><h3>Nivel 2 de reposteria</h3></Link>
          <Link to="/diplomados/intensivo-reposteria" onClick={handleClick}><h3>Intensivo de reposteria</h3></Link>
          <Link to="/diplomados/panaderia" onClick={handleClick}><h3>Panaderia</h3></Link>
          <Link to="/diplomados/gelatina" onClick={handleClick}><h3>Gelatina</h3></Link>
        </div>
        <div className='menu-links__desplegables'>
          <Link to="/talleres" onClick={handleClick}><h3>Talleres</h3></Link>
          <img src="/images/icons/angle-down-solid.svg" alt="" onClick={()=>{document.getElementById('talleres').classList.toggle('showDesplegables')}}/>
        </div>
        <div className='menu-links__desplegables--desplegados' id='talleres'>
          <Link to="/talleres/reposteria" onClick={handleClick}><h3>Reposteria</h3></Link>
          <Link to="/talleres/cocina-salada" onClick={handleClick}><h3>Cocina salada</h3></Link>
          <Link to="/talleres/cocteleria" onClick={handleClick}><h3>cocteleria</h3></Link>
          <Link to="/talleres/parrilla" onClick={handleClick}><h3>Parrilla</h3></Link>
        </div>
        <Link to="/empresarial" onClick={handleClick}><h3>Empresarial</h3></Link>
        <Link to="/contacto" onClick={handleClick}><h3>Contacto</h3></Link>
      </div>
    </div>
  )
}

export default MobileMenu