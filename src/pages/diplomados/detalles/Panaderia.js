import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const Panaderia = () => {
  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Panadería"} />
      <DiplomadosDetalle titulo={"Diplomado de Panadería"} duracion={"Duración: 5 clases"} clases={["Pan dulce y laminado"]} duracionClase={"Duración de las clases: 4 horas"}/>      
      <BotonWapp texto={"Quiero inscribirme"} url={""}/>
    </main>
  )
}

export default Panaderia