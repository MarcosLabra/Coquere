const DiplomadosDestacadosCard = ({ img, titulo, duracion }) => {

    return (
        <article className="diplomadosDestacados__card">
            <img src={img} alt="" srcset="" />
            <div className="diplomadosDestacados__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="diplomadosDestacados__card--descripcion">
                <p>Duración: {duracion}</p>
            </div>
        </article>
    )
}

export default DiplomadosDestacadosCard