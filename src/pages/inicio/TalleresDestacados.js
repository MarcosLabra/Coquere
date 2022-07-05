import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
  [
    {
      img: "/images/diplomados/reposteriaBasica.png",
      titulo: "Mesa  de postres",
      duracion: "4 horas"
    },
    {
      img: "/images/diplomados/reposteriaNivel2.png",
      titulo: "Repostería Nivel 2",
      duracion: "4 horas"
    },
    {
      img: "/images/diplomados/reposteriaIntensiva.png",
      titulo: "Repostería Intensiva",
      duracion: "4 horas"
    },
    {
      img: "/images/diplomados/panaderia.png",
      titulo: "Panaderia",
      duracion: "4 horas"
    },
    {
      img: "/images/diplomados/delatinas.png",
      titulo: "Gelatinas",
      duracion: "4 horas"
    },
    {
      img: "/images/diplomados/delatinas.png",
      titulo: "Gelatinas",
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
            </div>
          )
        }
        )}
      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres"/>

    </section>
  )
}

export default TalleresDestacados