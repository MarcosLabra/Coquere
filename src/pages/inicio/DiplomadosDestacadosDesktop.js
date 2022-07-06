import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
    [
        {
            img: "/images/diplomados/reposteriaBasica.png",
            titulo: "Repostería Básica",
            duracion: "10 clases",
            url: "/diplomados/reposteria-basica",
            img2: "/images/diplomados/reposteriaNivel2.png",
            titulo2: "Repostería Nivel 2",
            duracion2: "6 clases",
            url2: "/diplomados/reposteria-nivel-2",
            img3: "/images/diplomados/reposteriaIntensiva.png",
            titulo3: "Repostería Intensiva",
            duracion3: "8 clases",
            url3: "/diplomados/reposteria-intensiva",
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
                            <DiplomadosDestacadosCard img={diplomados.img3} titulo={diplomados.titulo3} duracion={diplomados.duracion3} url={diplomados.url2} />
                        </>
                    )}
                )}
            </div>
            <Boton texto="Ver más Diplomados" url="/diplomados" />
        </section>
    )
}

export default DiplomadosDestacadosDesktop