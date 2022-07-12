import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
    [
        {
            img: "/images/diplomados/reposteriaBasica.webp",
            titulo: "Repostería Básica",
            duracion: "10 clases",

            img2: "/images/diplomados/gelatinas.webp",
            titulo2: "Gelatinas",
            duracion2: "4 clases",

            img3: "/images/diplomados/cocteleria.webp",
            titulo3: "Coctelería",
            duracion3: "3 clases",
        }
    ]

const DiplomadosDestacadosDesktop = () => {

    return (
        <section className="diplomadosDestacados">
            <h4>Diplomados Destacados</h4>
            <div className='diplomadosDestacados__galeria'>
                {diplomados.map((diplomados) => {
                    return (
                        <>
                            <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
                            <DiplomadosDestacadosCard img={diplomados.img2} titulo={diplomados.titulo2} duracion={diplomados.duracion2} url={diplomados.url2} />
                            <DiplomadosDestacadosCard img={diplomados.img3} titulo={diplomados.titulo3} duracion={diplomados.duracion3} url={diplomados.url3} />
                        </>
                    )
                }
                )}
            </div>
            <Boton texto="Ver más Diplomados" url="/diplomados" />
        </section>
    )
}

export default DiplomadosDestacadosDesktop