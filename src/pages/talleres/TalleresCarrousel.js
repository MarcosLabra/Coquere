import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrousel = ({ contenido }) => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const { titulo, taller } = contenido;
    
    return (
        <section className="talleresCarrousel">
            <h4>{titulo}</h4>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                interval={2500}
                bullets={false}
                className='talleresCarrousel__slider'
            >
                {taller.map((taller) => {
                    return (<div><TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} /></div>)
                })}
            </AutoplaySlider>

        </section>
    )
}

export default TalleresCarrousel


