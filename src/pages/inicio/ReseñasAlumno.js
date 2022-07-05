import AwesomeSlider from 'react-awesome-slider';
import AlumnosCard from '../../components/cards/AlumnosCard'

const reseñas = [
    {
        img: "/images/alumnos/alumno1.png",
        frase: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre: "Juan Pérez",
        titulo: "Diplomado de Repostería Nivel 2"
    },
    {
        img: "/images/alumnos/alumno2.png",
        frase: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre: "Juan Pérez",
        titulo: "Diplomado de Repostería Nivel 2"
    },
    {
        img: "/images/alumnos/alumno3.png",
        frase: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre: "Juan Pérez",
        titulo: "Diplomado de Repostería Nivel 2"
    }
]
const ReseñasAlumnos = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AwesomeSlider
                bullets={false}
                className='reseñasAlumnos__slider'
            >
                {reseñas.map((reseñas) => {
                    return (
                        <div>
                            <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                        </div>
                    )
                })}

            </AwesomeSlider>
        </section>
    )
}

export default ReseñasAlumnos