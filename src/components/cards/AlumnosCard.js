const AlumnosCard = ({img, frase, nombre, curso}) => {
    return (
        <article className="alumnosCard">
            <img src={img} alt="" />
            <p className="alumnosCard__frase">{frase}</p>
            <div className="alumnosCard__descripcion">
                <p>{nombre}</p>
                <p>{curso}</p>
            </div>
        </article>
    )
}

export default AlumnosCard