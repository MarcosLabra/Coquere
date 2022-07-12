import DiplomadosCard from "../../components/cards/DiplomadosCard"

const diplomados =
    [
        {
            img: "/images/diplomados/reposteriaBasica.jpg",
            titulo: "Repostería Básica",
            duracion: "10 clases",
            url: "/diplomados/reposteria-basica"
        },
        {
            img: "/images/diplomados/reposteriaNivel2.jpg",
            titulo: "Repostería Nivel 2",
            duracion: "6 clases",
            url: "/diplomados/reposteria-nivel-2"
        },
        {
            img: "/images/diplomados/reposteriaIntensivo.jpg",
            titulo: "Repostería Intensiva",
            duracion: "8 clases",
            url: "/diplomados/reposteria-intensiva"
        },
        {
            img: "/images/diplomados/panaderia.jpg",
            titulo: "Panaderia",
            duracion: "5 clases",
            url: "/diplomados/panaderia"
        },
        {
            img: "/images/diplomados/gelatinas.jpg",
            titulo: "Gelatinas",
            duracion: "5 clases",
            url: "/diplomados/gelatinas"
        },
        {
            img: "/images/diplomados/cocteleria.jpg",
            titulo: "Coctelería",
            duracion: "3 clases",
            url: "/diplomados/cocteleria"
        },
        {
            img: "/images/diplomados/parrillada.jpg",
            titulo: "Parrillada",
            duracion: "5 clases",
            url: "/diplomados/parrillada"
        }

    ]

const DiplomadosGaleria = () => {

    return (
        <section className="diplomadosGaleria">

            {diplomados.map((diplomados) => {
                return (<DiplomadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />)
            })}
        </section>
    )
}

export default DiplomadosGaleria