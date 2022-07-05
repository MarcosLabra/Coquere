import AwesomeSlider from 'react-awesome-slider';
import AlumnosCard from '../../components/cards/AlumnosCard'


const reseñas = [
    {
        img: "/images/alumnos/alumno1.png",
        frase: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre: "Juan Pérez",
        titulo: "Diplomado de Repostería Nivel 2",
        img2: "/images/alumnos/alumno2.png",
        frase2: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre2: "Juan Pérez",
        titulo2: "Diplomado de Repostería Nivel 2"
    },
    {
        img: "/images/alumnos/alumno3.png",
        frase: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre: "Juan Pérez",
        titulo: "Diplomado de Repostería Nivel 2"
    }
]

const ReseñasAlumnosTablet = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AwesomeSlider
                bullets={false}
                className='reseñasAlumnos__slider'
            >
                {reseñas.map((reseñas) => {
                    if (reseñas.img2) {
                        return (
                            <div className='reseñasAlumnos__slider--contenedor'>
                                <div>
                                    <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                                </div>
                                <div>
                                    <AlumnosCard img={reseñas.img2} frase={reseñas.frase2} nombre={reseñas.nombre2} titulo={reseñas.titulo2} />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                            </div>
                        )
                    }
                })}

            </AwesomeSlider>
        </section>
    )
}

export default ReseñasAlumnosTablet