import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const ReposteriaNivel2 = () => {
  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Reposteria Nivel 2"} />
      <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 10 clases"} clases={["Bases de la Repostería y Teoría", "Roscas y Bizcochos", "Panqueques", "Tartas y Pays", "Mermeladas", "Muffins y Cupcakes", "Gelatinas Básicas", "Galletas", "Cheescake", "Pasteles (Cubiertas y rellenos)"]} duracionClase={"Duración de las clases: 3 horas"}/>      
      <BotonWapp texto={"Quiero inscribirme"} url={""}/>
    </main>
    
  )
}

export default ReposteriaNivel2