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
        titulo2: "Diplomado de Repostería Nivel 2",
        img3: "/images/alumnos/alumno3.png",
        frase3: "“La mejor forma de aprender es haciendo lo que aprendemos”",
        nombre3: "Juan Pérez",
        titulo3: "Diplomado de Repostería Nivel 2"
    }
]

const ReseñasAlumnosDesktop = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <div className='reseñasAlumnos__galeria'>
                {reseñas.map((reseñas) => {
                    return (
                        <>
                            <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                            <AlumnosCard img={reseñas.img2} frase={reseñas.frase2} nombre={reseñas.nombre2} titulo={reseñas.titulo2} />
                            <AlumnosCard img={reseñas.img2} frase={reseñas.frase2} nombre={reseñas.nombre2} titulo={reseñas.titulo2} />

                        </>
                    )}
                )}
            </div>
        </section>
    )
}

export default ReseñasAlumnosDesktop