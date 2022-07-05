import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
  [
    {
      img: "/images/talleres/reposteria-mesaDePostres.jpg",
      titulo: "Mesa  de postres",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-browniesYCheescake.png",
      titulo: "Brownies y Cheesecake",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-macarons.png",
      titulo: "Macarons",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-postresIndividuales.png",
      titulo: "Postres individuales",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-pastelDeCupcakes.png",
      titulo: "Pastel de cupcakes",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-pastelDecorado.png",
      titulo: "Pastel decorado",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-roscaDeReyes.png",
      titulo: "Rosca de reyes",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/reposteria-manejoDeDuyas.png",
      titulo: "Manejo de duyas",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/galletasGourmet.png",
      titulo: "Galletas gourmet",
      duracion: "4 horas"
    },
    {
      img: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
      titulo: "Pizza y Focaccia",
      duracion: "4 horas"
    },
    {
      img: "",
      titulo: "Sushi y Yakimeshi",
      duracion: "4 horas"
    },
    {
      img: "",
      titulo: "Pastas",
      duracion: "4 horas"
    },
    {
      img: "cocteleria-cocteleria.jpg",
      titulo: "Coctelería",
      duracion: "4 horas"
    }
  ]

const TalleresDestacados = () => {

  return (
    <section className="talleresDestacados">
      <h4>Talleres Destacados</h4>
      <AwesomeSlider
        bullets={false}
        className='talleresDestacados__slider'
      >
        {talleres.map((talleres) => {
          return (
          <div>
            <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} />
          </div>)
        }
        )}
      </AwesomeSlider>
      <Boton texto="Ver más Talleres" url="/talleres" />

    </section>
  )
}

export default TalleresDestacados