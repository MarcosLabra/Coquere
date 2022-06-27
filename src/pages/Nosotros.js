import PortadaPaginas from "../components/layout/PortadaPaginas";
import { HistoriaCoquere } from "../components/layout/HistoriaCoquere";

const Nosotros = () => {
    
    return (
        <main className="sobreNosotros">
            <PortadaPaginas img={"/images/nosotros/sobreNosotros.jpg"} titulo={"Sobre Nosotros"}/>
            <HistoriaCoquere/>
        </main>
    )
}

export default Nosotros;