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
          <TalleresCard img={"/images/talleres/reposteria-macarons.png"} titulo={"Macarons"} duracion={"4 horas"} />
        </div>
        <div>
          <TalleresCard img={"/images/talleres/reposteria-pastelDeCupcakes.png"} titulo={"Pastel de Cupcakes"} duracion={"4 horas"} />
        </div>
        <div>
          <TalleresCard img={"/images/talleres/cocinaSalada-pizzaFocaccia.png"} titulo={"Pizza y Focaccia"} duracion={"4 horas"} />
        </div>
      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres"/>

    </section>
  )
}

export default TalleresDestacados