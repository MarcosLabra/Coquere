import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const TalleresDestacados = () => {

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AwesomeSlider
        bullets={false}
        className='talleresDestacados__slider'
      >
        <div>
          <TalleresCard img={"/images/talleres/talleres1.png"} titulo={"Taller de tartas"} duracion={"4 meses"} />
        </div>
        <div>
          <TalleresCard img={"/images/talleres/talleres1.png"} titulo={"Taller de tartas"} duracion={"4 meses"} />
        </div>
      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres"/>

    </section>
  )
}

export default TalleresDestacados