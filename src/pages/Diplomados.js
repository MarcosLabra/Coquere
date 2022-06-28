import PortadaPaginas from "../components/layout/PortadaPaginas"
import DiplomadosGaleria from "./diplomados/DiplomadosGaleria"
import DiplomadosTexto from "./diplomados/DiplomadosTexto"


const Diplomados = () => {
    return (
        <main className="diplomados">
            <PortadaPaginas img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} />
            <DiplomadosTexto />
            <DiplomadosGaleria />
        </main>
    )
}

export default Diplomados