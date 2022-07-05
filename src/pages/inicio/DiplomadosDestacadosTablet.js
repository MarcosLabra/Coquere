import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/AwesomeSliderStyles.css';
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
            url2: "/diplomados/reposteria-nivel-2"
        },
        {
            img: "/images/diplomados/reposteriaIntensiva.png",
            titulo: "Repostería Intensiva",
            duracion: "8 clases",
            url: "/diplomados/reposteria-intensiva",
            img2: "/images/diplomados/panaderia.png",
            titulo2: "Panaderia",
            duracion2: "5 clases",
            url2: "/diplomados/panaderia"
        },
        {
            img: "/images/diplomados/gelatinas.png",
            titulo: "Gelatinas",
            duracion: "5 clases",
            url: "/diplomados/gelatinas"
        }

    ]

const DiplomadosDestacadosTablet = () => {

    return (
        <section className="diplomadosDestacados">
            <h4>Diplomados Destacados</h4>
            <AwesomeSlider
                bullets={false}
                cssModule={AwesomeSliderStyles}
                className='diplomadosDestacados__slider'
            >
                {diplomados.map((diplomados) => {
                    if (diplomados.img2) {
                    return (
                        <div className='diplomadosDestacados__slider--contenedor'>
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
                            </div>
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img2} titulo={diplomados.titulo2} duracion={diplomados.duracion2} url={diplomados.url2} />
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
                            </div>
                    )
                }
                })}
                
            </AwesomeSlider>
            <Boton texto="Ver más Diplomados" url="/diplomados" />
        </section>
    )
}

export default DiplomadosDestacadosTablet