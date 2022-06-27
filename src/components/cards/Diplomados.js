const Diplomados = ({ img, titulo, duracion }) => {

    return (
        <article className="diplomados__card">
            <img src={img} alt="" srcset="" />
            <div className="diplomados__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="diplomados__card--descripcion">
                <p>Duración: {duracion}</p>
            </div>
        </article>
    )
}

export default Diplomados