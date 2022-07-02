import AwesomeSlider from 'react-awesome-slider';
import AlumnosCard from '../../components/cards/AlumnosCard'

const ReseñasAlumnos = () => {
  
    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AwesomeSlider
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

            </AwesomeSlider>
        </section>
    )
}

export default ReseñasAlumnos