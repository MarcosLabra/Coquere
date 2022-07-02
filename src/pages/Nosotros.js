import { useEffect } from "react"
import HistoriaCoquere from "./nosotros/HistoriaCoquere";
import PortadaPaginas from "../components/layout/PortadaPaginas";
import Instalaciones from "./nosotros/Instalaciones";
import RentaNuestrasInstalaciones from "./nosotros/RentaNuestrasInstalaciones";

const Nosotros = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , [])

    return (
        <main className="sobreNosotros">
        
            <PortadaPaginas img={"/images/portadas/sobreNosotrosPortada.jpg"} titulo={"Sobre Nosotros"} />
            <HistoriaCoquere />
            <Instalaciones />
            <RentaNuestrasInstalaciones />
        </main>
    )
}

export default Nosotros;