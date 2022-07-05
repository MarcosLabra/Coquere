import React from 'react'

const TalleresCarrouselCocteleria = () => {
    
    const taller = [
        {
            img: "/images/talleres/cocteleria-cocteleria.jpg",
            titulo: "Cocteleria",
            duracion: "4 horas"
        }]

    return (
        <section className="talleresCarrousel" >
            <h4 id="reposteria">Coctelería</h4>
            <AwesomeSlider
                bullets={false}
                className='talleresCarrousel__slider'
            >
                {taller.map((taller) => {
                    return (<div><TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} /></div>)
                })}
            </AwesomeSlider>

        </section>
    )
}

export default TalleresCarrouselCocteleria