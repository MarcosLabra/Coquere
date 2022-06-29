import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import TalleresCard from "../../components/cards/TalleresCard"

const TalleresDestacados = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true}
        interval={2500}
        bullets={false}
        className='talleresDestacados__slider'
      >
        <div>
          <TalleresCard img={"/images/talleres/talleres1.png"} titulo={"Taller de tartas"} duracion={"4 meses"} />
        </div>
        <div>
          <TalleresCard img={"/images/talleres/talleres1.png"} titulo={"Taller de tartas"} duracion={"4 meses"} />
        </div>
      </AutoplaySlider>

    </section>
  )
}

export default TalleresDestacados