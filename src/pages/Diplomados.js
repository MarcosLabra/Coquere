import { useEffect } from "react";
import PortadaPaginas from "../components/layout/PortadaPaginas"
import DiplomadosGaleria from "./diplomados/DiplomadosGaleria"
import DiplomadosTexto from "./diplomados/DiplomadosTexto"

const Diplomados = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }
        , [])

    return (
        <main className="diplomados">
            <PortadaPaginas img={"/images/portadas/diplomadoPortada.png"} titulo={"Diplomados"} />
            <DiplomadosTexto />
            <DiplomadosGaleria />
        </main>
    )
}

export default Diplomados