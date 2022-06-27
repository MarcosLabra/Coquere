const TalleresCard = ({ img, titulo, duracion }) => {

    return (
        <article className="talleres__card">
            <img src={img} alt="" srcset="" />
            <div className="talleres__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="talleres__card--descripcion">
                <p>Duración: {duracion}</p>
            </div>
        </article>
    )
}

export default TalleresCard