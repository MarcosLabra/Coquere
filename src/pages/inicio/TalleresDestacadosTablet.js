import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
  [
    {
      img: "/images/diplomados/reposteriaBasica.png",
      titulo: "Mesa  de postres",
      duracion: "4 horas",
      img2: "/images/diplomados/reposteriaNivel2.png",
      titulo2: "Repostería Nivel 2",
      duracion2: "4 horas"
    },
    {
      img: "/images/diplomados/reposteriaIntensiva.png",
      titulo: "Repostería Intensiva",
      duracion: "4 horas",
      img2: "/images/diplomados/panaderia.png",
      titulo2: "Panaderia",
      duracion2: "4 horas"
    },
    {
      img: "/images/diplomados/gelatinas.png",
      titulo: "Gelatinas",
      duracion: "4 horas",
      img2: "/images/diplomados/gelatinas.png",
      titulo2: "Gelatinas",
      duracion2: "4 horas"
    }

  ]

const TalleresDestacadosTablet = () => {

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AwesomeSlider
        bullets={false}
        className='talleresDestacados__slider'
      >
        {talleres.map((talleres) => {
          if (talleres.img2) {
            return (
              <div className='talleresDestacados__slider--contenedor'>
                <div>
                  <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
                </div>
                <div>
                  <TalleresCard img={talleres.img2} titulo={talleres.titulo2} duracion={talleres.duracion2} />
                </div>
              </div>
            )
          }
          else {
            return (
              <div>
                <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
              </div>
            )
          }
        })}

      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres" />

    </section>
  )
}

export default TalleresDestacadosTablet