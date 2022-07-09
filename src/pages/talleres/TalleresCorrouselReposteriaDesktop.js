import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrouselReposteriaDesktop = () => {

    const taller = [
        {
            img: "/images/talleres/reposteria-mesaDePostres.jpg",
            titulo: "Mesa de Postres",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-chocolateria.png",
            titulo2: "Chocolateria",
            duracion2: "4 horas",
            img3: "/images/talleres/reposteria-browniesYCheescake.png",
            titulo3: "Brownies y Cheescake",
            duracion3: "4 horas",
        },
        {
            img1: "/images/talleres/reposteria-macarons.png",
            titulo1: "Macarons",
            duracion1: "4 horas",
            img2: "/images/talleres/reposteria-postresIndividuales.png",
            titulo2: "Postres individuales",
            duracion2: "4 horas",
            img3: "/images/talleres/reposteria-pastelDeCupcakes.png",
            titulo3: "Pastel de Cupcakes",
            duracion3: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-pastelDecorado.png",
            titulo: "Pastel decorado",
            duracion: "4 a 5 horas",
            img2: "/images/talleres/reposteria-roscaDeReyes.png",
            titulo2: "Rosca de Reyes",
            duracion2: "4 horas",
            img3: "/images/talleres/reposteria-manejoDeDuyas.png",
            titulo3: "Manejo de Duyas",
            duracion3: "3 horas"
        },
        {
            img1: "/images/talleres/reposteria-galletasGourmet.png",
            titulo1: "Galletas gourmet",
            duracion1: "4 horas"
        }
    ]

    return (
        <section className="talleresCarrousel" >
            <h4 id="reposteria">Repostería</h4>
            <AwesomeSlider
                bullets={false}
                className='talleresCarrousel__slider'
            >
                {taller.map((taller) => {
                    if (taller.img2) {
                        return (
                            <div className='talleresCarrousel__slider--contenedor'>
                                <div>
                                    <TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} />
                                </div>
                                <div>
                                    <TalleresCard img={taller.img2} titulo={taller.titulo2} duracion={taller.duracion2} />
                                </div>
                                <div>
                                    <TalleresCard img={taller.img3} titulo={taller.titulo3} duracion={taller.duracion3} />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} />
                            </div>
                        )
                    }
                })}
            </AwesomeSlider>

        </section>
    )
}

export default TalleresCarrouselReposteriaDesktop


