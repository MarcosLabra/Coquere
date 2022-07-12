import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
  [
    {
      img: "/images/talleres/reposteria-macarons.webp",
      titulo: "Macarons",
      duracion: "4 horas"
    },

    {
      img: "/images/talleres/reposteria-pastelDeCupcakes.webp",
      titulo: "Pastel de cupcakes",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/cocinaSalada-pizzaFocaccia.webp",
      titulo: "Pizza y Focaccia",
      duracion: "4 horas"
    }
  ]

const TalleresDestacados = () => {

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AwesomeSlider
        bullets={false}
        className='talleresDestacados__slider'
      >
        {talleres.map((talleres) => {
          return (
            <div>
              <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
            </div>)
        }
        )}
      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres" />

    </section>
  )
}

export default TalleresDestacados