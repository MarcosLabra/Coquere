import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrousel = () => {

    const taller = [
        {
            img: "/images/talleres/reposteria-mesaDePostres.jpg",
            titulo: "Mesa de Postres",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-chocolateria.png",
            titulo2: "Chocolateria",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-browniesYCheescake.png",
            titulo: "Brownies y Cheescake",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-macarons.png",
            titulo2: "Macarons",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-postresIndividuales.png",
            titulo: "Postres individuales",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-pastelDeCupcakes.png",
            titulo2: "Pastel de Cupcakes",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-pastelDecorado.png",
            titulo: "Pastel decorado",
            duracion: "4 a 5 horas",
            img2: "/images/talleres/reposteria-roscaDeReyes.png",
            titulo2: "Rosca de Reyes",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-manejoDeDuyas.png",
            titulo: "Manejo de Duyas",
            duracion: "3 horas",
            img2: "/images/talleres/reposteria-galletasGourmet.png",
            titulo2: "Galletas gourmet",
            duracion2: "4 horas"
        }]

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

export default TalleresCarrousel


