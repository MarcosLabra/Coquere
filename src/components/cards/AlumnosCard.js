const AlumnosCard = ({img, frase, nombre, titulo}) => {
    return (
        <article className="alumnosCard">
            <img src={img} alt="" />
            <p className="alumnosCard__frase">{frase}</p>
            <div className="alumnosCard__descripcion">
                <p>{nombre}</p>
                <p>{titulo}</p>
            </div>
        </article>
    )
}

export default AlumnosCard