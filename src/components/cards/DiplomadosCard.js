const DiplomadosCard = ({ img, titulo, duracion,url }) => {

    return (
        <article className="diplomados__card">
            <img src={img} alt="" srcset="" />
            <div className="diplomados__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="diplomados__card--descripcion">
                <p className="diplomados__card--duracion">Duración: {duracion}</p>
                <hr />
                <a href={url} className="diplomados__card--verMas">Ver más</a>
            </div>
        </article>
    )
}

export default DiplomadosCard