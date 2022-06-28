const DiplomadosCard = ({ img, titulo, duracion }) => {

    return (
        <article className="diplomados__card">
            <img src={img} alt="" srcset="" />
            <div className="diplomados__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="diplomados__card--descripcion">
                <p className="diplomados__card--duracion">Duración: {duracion}</p>
                <hr />
                <p className="diplomados__card--verMas">Ver más</p>
            </div>
        </article>
    )
}

export default DiplomadosCard