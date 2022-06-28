import HistoriaCoquere from "./nosotros/HistoriaCoquere";
import PortadaPaginas from "../components/layout/PortadaPaginas";
import Instalaciones from "./nosotros/Instalaciones";
import Chefs from "./nosotros/Chefs";

const Nosotros = () => {

    return (
        <main className="sobreNosotros">

            <PortadaPaginas img={"/images/portadas/sobreNosotrosPortada.jpg"} titulo={"Sobre Nosotros"} />
            <HistoriaCoquere />
            <Instalaciones />
            <Chefs />
        </main>
    )
}

export default Nosotros;