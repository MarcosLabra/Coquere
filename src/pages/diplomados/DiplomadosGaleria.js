import DiplomadosCard from "../../components/cards/DiplomadosCard"

const diplomados =
[
    {
        img: "/images/diplomados/diplomado1.png",
        titulo: "Reposteria basica",
        duracion: "4 meses"
    },
    {
        img: "/images/diplomados/diplomado1.png",
        titulo: "Cocina Salada",
        duracion: "4 meses"
    },
    {
        img: "/images/diplomados/diplomado1.png",
        titulo: "Cocteleria",
        duracion: "4 meses"
    },
    {
        img: "/images/diplomados/diplomado1.png",
        titulo: "Panaderia",
        duracion: "4 meses"
    }
]

const DiplomadosGaleria = () => {

    return (
        <section className="diplomadosGaleria">

            {diplomados.map((diplomados) => {
                return (<DiplomadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} />)
            })}
        </section>
    )
}

export default DiplomadosGaleria