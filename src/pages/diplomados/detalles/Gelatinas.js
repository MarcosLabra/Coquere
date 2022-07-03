import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import { useEffect } from "react";


const Gelatinas = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
    , [])
  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Gelatinas"} />
      <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 5 clases"} clases={["Gelatinas a base de aguas y frutas", "Gelatinas a base de leche y yogurth", "Gelatinas - encapsulado", "Gelatinas temáticas (2 clases)"]} duracionClase={"Duración de las clases: 3 horas"} />
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cy"} />
      </div>
    </main>
  )
}

export default Gelatinas