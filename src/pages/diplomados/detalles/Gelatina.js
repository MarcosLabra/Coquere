import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const Gelatina = () => {
  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Gelatina"} />
      <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 5 clases"} clases={["Gelatinas a base de aguas y frutas", "Gelatinas a base de leche y yogurth", "Gelatinas - encapsulado", "Gelatinas temáticas (2 clases)"]} duracionClase={"Duración de las clases: 3 horas"}/>      
      <div className="marcoBotonWapp">
        <BotonWapp texto={"Quiero inscribirme"} url={""}/>
      </div>
    </main>
  )
}

export default Gelatina