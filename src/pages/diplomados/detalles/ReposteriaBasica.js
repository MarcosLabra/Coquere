import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle  from "../../../components/layout/DiplomadosDetalle"

const ReposteriaBasica = () => {
    return (
        <main>
            <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} subtitulo={"Reposteria Basica"} />
            <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"Duración: 10 clases"} clases={["Bases de la Repostería y Teoría", "Roscas y Bizcochos", "Panqueques", "Tartas y Pays", "Mermeladas", "Muffins y Cupcakes", "Gelatinas Básicas", "Galletas", "Cheescake", "Pasteles (Cubiertas y rellenos)"]} duracionClase={"Duración de las clases: 3 horas"}/>      
            <div className="marcoBotonWapp">
                <BotonWapp texto={"Quiero inscribirme"} url={""}/>
            </div>
        </main>
    )
}

export default ReposteriaBasica