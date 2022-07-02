import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrousel = ({ contenido }) => {
    const { id, titulo, taller } = contenido;

    return (
        <section className="talleresCarrousel" >
            <h4 id={id}>{titulo}</h4>
            <AwesomeSlider
                bullets={false}
                className='talleresCarrousel__slider'
            >
                {taller.map((taller) => {
                    return (<div><TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} /></div>)
                })}
            </AwesomeSlider>

        </section>
    )
}

export default TalleresCarrousel


