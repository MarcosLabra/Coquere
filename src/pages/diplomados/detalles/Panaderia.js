import {useEffect} from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"

const Panaderia = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , [])

  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Panadería"} />
      <DiplomadosDetalle titulo={"Diplomado de Panadería"} duracion={"Duración: 5 clases"} clases={["Pan dulce y laminado", "Pan para restaurantes", "Pan dulce mexicano", "Pan blando y de corteza", "Panes europeos"]} duracionClase={"Duración de las clases: 4 horas"} />
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cz"} />
      </div>
    </main>
  )
}

export default Panaderia