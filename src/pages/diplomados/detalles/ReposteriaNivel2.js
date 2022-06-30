import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const ReposteriaNivel2 = () => {
  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Reposteria Nivel 2"} />
      <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 6 clases"} clases={["Tartas", "Galletas", "Cupcakes", "Pasteles clásicos", "Pasteles Europeos", "Chocolatería"]} duracionClase={"Duración de las clases: 4 horas"}/>      
      <div className="marcoBotonWapp">
        <BotonWapp texto={"Quiero inscribirme"} url={"https://alvo.chat/3cB"}/>
      </div>
    </main>
    
  )
}

export default ReposteriaNivel2