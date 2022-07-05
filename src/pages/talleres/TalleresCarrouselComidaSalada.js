import React from 'react'

const TalleresCarrouselComidaSalada = () => {

    const taller = [
        {
            img: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
            titulo: "Pizza y Focaccia",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
            titulo: "Sushi y Yakimeshi",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
            titulo: "Pastas",
            duracion: "4 horas"
        },
        ]

    return (
        <section className="talleresCarrousel" >
            <h4 id="reposteria">Cocina Salada</h4>
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

export default TalleresCarrouselComidaSalada