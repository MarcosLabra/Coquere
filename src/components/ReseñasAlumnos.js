import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AlumnosCard from './cards/AlumnosCard'

const ReseñasAlumnos = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                interval={4000}
                bullets={false}
                className='reseñasAlumnos__slider'
            >
                <div>
                    <AlumnosCard img={"/images/alumnos/alumno1.png"} frase={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"} nombre={"María Gómez, "} curso={"Diplomado básico de repostería"} />
                </div>
                <div>
                    <AlumnosCard img={"/images/alumnos/alumno2.png"} frase={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"} nombre={"María Gómez, "} curso={"Diplomado básico de repostería"} />
                </div>
                <div>
                    <AlumnosCard img={"/images/alumnos/alumno3.png"} frase={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"} nombre={"María Gómez, "} curso={"Diplomado básico de repostería"} />
                </div>

            </AutoplaySlider>
        </section>
    )
}

export default ReseñasAlumnos