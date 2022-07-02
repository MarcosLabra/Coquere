import {useEffect} from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const ReposteriaIntensiva = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , [])

  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Reposteria Intensivo"} />
      <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 8 clases"} clases={["Galletería fina", "Macarons", "Pan dulce mexicano", "Pan salado", "Mousses y bavaresas", "Pastelería moderna", "Fondant", "Chocolatería 2do nivel"]} duracionClase={"Duración de las clases: 4 horas"}/>      
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cA"}/>
      </div>
    </main>
  )
}

export default ReposteriaIntensiva