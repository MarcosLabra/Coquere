import PortadaPaginas from "../components/layout/PortadaPaginas";
import { HistoriaCoquere } from "../components/layout/HistoriaCoquere";
import { Chef } from "../components/Chef";

const Nosotros = () => {
    
    return (
        <main className="sobreNosotros">
            <PortadaPaginas img={"/images/nosotros/sobreNosotros.jpg"} titulo={"Sobre Nosotros"}/>
            <HistoriaCoquere/>
            <Chef img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
        </main>
    )
}

export default Nosotros;