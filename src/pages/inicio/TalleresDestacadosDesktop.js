import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
    [
        {
            img: "/images/talleres/reposteria-mesaDePostres.jpg",
            titulo: "Mesa  de postres",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-browniesYCheescake.png",
            titulo2: "Brownies y Cheesecake",
            duracion2: "4 horas",
            img3: "/images/talleres/reposteria-macarons.png",
            titulo3: "Macarons",
            duracion3: "4 horas",
        }
    ]


const TalleresDestacadosDesktop = () => {

    return (
        <section className="talleresDestacados">
            <h4>Talleres Destacados</h4>
            <div className="talleresDestacados__galeria">
                {talleres.map((talleres) => {
                    return (
                        <>
                            <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} url={talleres.url} />
                            <TalleresCard img={talleres.img2} titulo={talleres.titulo2} duracion={talleres.duracion2} url={talleres.url2} />
                            <TalleresCard img={talleres.img3} titulo={talleres.titulo3} duracion={talleres.duracion3} url={talleres.url2} />

                        </>
                    )}
                )}

            </div>
            <Boton texto="Ver más Talleres" url="/talleres" />

        </section>
    )
}

export default TalleresDestacadosDesktop