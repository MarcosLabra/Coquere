import DiplomadosCard from "../../components/cards/DiplomadosCard"

const diplomados =
[
    {
<<<<<<< HEAD
        img: "/images/diplomados/reposteriaBasica.png",
=======
        img: "/images/diplomados/reposteriaBasico.png",
>>>>>>> 74a11fd86fe1531f50522a2b83cc23a3f8b74a91
        titulo: "Repostería Básica",
        duracion: "10 clases",
        url:"/diplomados/reposteria-basica"
    },
    {
        img: "/images/diplomados/reposteriaNivel2.png",
        titulo: "Repostería Nivel 2",
        duracion: "6 clases",
        url:"/diplomados/reposteria-nivel-2"
    },
    {
        img: "/images/diplomados/reposteriaIntensivo.png",
        titulo: "Repostería Intensiva",
        duracion: "8 clases",
        url:"/diplomados/reposteria-intensiva"
    },
    {
        img: "/images/diplomados/panaderia.png",
        titulo: "Panaderia",
        duracion: "5 clases",
        url:"/diplomados/panaderia"
    },
    {
        img: "/images/diplomados/gelatinas.png",
        titulo: "Gelatinas",
        duracion: "5 clases",
        url:"/diplomados/gelatinas"
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