import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';

const TalleresCarrouselCocteleriaTablet = () => {

    const taller = [
        {
            img: "/images/talleres/cocteleria-cocteleria.jpg",
            titulo: "Cocteleria",
            duracion: "4 horas",
            img2: "/images/talleres/cocteleria-cocteleria.jpg",
            titulo2: "Cocteleria",
            duracion2: "4 horas"
        },
        {
            img: "//images/talleres/cocteleria-cocteleria.jpg",
            titulo: "Cocteleria",
            duracion: "4 horas",
        },
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

export default TalleresCarrouselCocteleriaTablet