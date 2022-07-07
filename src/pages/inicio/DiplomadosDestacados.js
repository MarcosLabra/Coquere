import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/AwesomeSliderStyles.css';
import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
  [
    {
      img: "/images/diplomados/reposteriaBasica.png",
      titulo: "Repostería Básica",
      duracion: "10 clases",
      url: "/diplomados/reposteria-basica"
    },
    {
      img: "/images/diplomados/gelatinas.png",
      titulo: "Gelatinas",
      duracion: "5 clases",
      url: "/diplomados/gelatinas"
    },
    {
      img: "/images/diplomados/cocteleria.jpg",
      titulo: "Coctelería",
      duracion: "5 clases",
      url: "/diplomados/cocteleria"
    }

  ]

const DiplomadosDestacados = () => {

  return (
    <section className="diplomadosDestacados">
      <h4>Diplomados Destacados</h4>
      <AwesomeSlider
        bullets={false}
        cssModule={AwesomeSliderStyles}
        className='diplomadosDestacados__slider'
      >
        {diplomados.map((diplomados) => {
          return (
            <div>
              <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
            </div>
          )
        }
        )}
      </AwesomeSlider>
      <Boton texto="Ver más Diplomados" url="/diplomados" />
    </section>
  )
}

export default DiplomadosDestacados