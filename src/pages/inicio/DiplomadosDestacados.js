import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
  [
    {
      img: "/images/diplomados/diplomado1.png",
      titulo: "Repostería Básica",
      duracion: "10 clases",
      url: "/diplomados/reposteria-basica"
    },
    {
      img: "/images/diplomados/diplomado1.png",
      titulo: "Repostería Nivel 2",
      duracion: "6 clases",
      url: "/diplomados/reposteria-nivel-2"
    },
    {
      img: "/images/diplomados/diplomado1.png",
      titulo: "Repostería Intensiva",
      duracion: "8 clases",
      url: "/diplomados/reposteria-intensiva"
    },
    {
      img: "/images/diplomados/diplomado1.png",
      titulo: "Panaderia",
      duracion: "5 clases",
      url: "/diplomados/panaderia"
    },
    {
      img: "/images/diplomados/diplomado1.png",
      titulo: "Gelatinas",
      duracion: "5 clases",
      url: "/diplomados/gelatinas"
    }

  ]

const DiplomadosDestacados = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <section className="diplomadosDestacados">
      <h4>Diplomados Destacados</h4>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true}
        interval={3000}
        bullets={false}
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
      </AutoplaySlider>
      <Boton texto="Ver más Diplomados" url="/diplomados" />
    </section>
  )
}

export default DiplomadosDestacados