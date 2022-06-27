import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Diplomados from "../components/cards/Diplomados"

const DiplomadosDestacados = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <section className="diplomadosDestacados">
      <h4>Diplomados Destacados</h4>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true}
        interval={2000}
        bullets={false}
        className='diplomadosDestacados__slider'
      >
        <div>
          <Diplomados img={"/images/diplomados/diplomado1.png"} titulo={"Reposteria basica"} duracion={"4 meses"} />
        </div>
        <div>
          <Diplomados img={"/images/diplomados/diplomado2.png"} titulo={"Reposteria basica"} duracion={"4 meses"} />
        </div>
      </AutoplaySlider>

    </section>
  )
}

export default DiplomadosDestacados