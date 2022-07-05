import AwesomeSlider from 'react-awesome-slider';
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
      duracion2: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-macarons.png",
      titulo: "Macarons",
      duracion: "4 horas",
      img2: "/images/talleres/reposteria-postresIndividuales.png",
      titulo2: "Postres individuales",
      duracion2: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-pastelDeCupcakes.png",
      titulo: "Pastel de cupcakes",
      duracion: "4 horas",
      img2: "/images/talleres/reposteria-pastelDecorado.png",
      titulo2: "Pastel decorado",
      duracion2: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-roscaDeReyes.png",
      titulo: "Rosca de reyes",
      duracion: "4 horas",
      img2: "/images/talleres/reposteria-manejoDeDuyas.png",
      titulo2: "Manejo de duyas",
      duracion2: "4 horas"
    },
    {
      img: "/images/talleres/galletasGourmet.png",
      titulo: "Galletas gourmet",
      duracion: "4 horas",
      img2: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
      titulo2: "Pizza y Focaccia",
      duracion2: "4 horas"
    },
    {
      img: "",
      titulo: "Sushi y Yakimeshi",
      duracion: "4 horas",
      img2: "",
      titulo2: "Pastas",
      duracion2: "4 horas"
    },
    {
      img: "cocteleria-cocteleria.jpg",
      titulo: "Coctelería",
      duracion: "4 horas"
    }
  ]


const TalleresDestacadosTablet = () => {

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AwesomeSlider
        bullets={false}
        className='talleresDestacados__slider'
      >
        {talleres.map((talleres) => {
          if (talleres.img2) {
            return (
              <div className='talleresDestacados__slider--contenedor'>
                <div>
                  <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
                </div>
                <div>
                  <TalleresCard img={talleres.img2} titulo={talleres.titulo2} duracion={talleres.duracion2} />
                </div>
              </div>
            )
          }
          else {
            return (
              <div>
                <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
              </div>
            )
          }
        })}

      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres" />

    </section>
  )
}

export default TalleresDestacadosTablet