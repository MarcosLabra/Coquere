import PortadaPaginas from "../components/layout/PortadaPaginas";
import { HistoriaCoquere } from "../components/layout/HistoriaCoquere";
import  ChefsCard  from "../components/cards/ChefsCard";

const Nosotros = () => {
    
    return (
        <main className="sobreNosotros">
            <PortadaPaginas img={"/images/nosotros/sobreNosotros.jpg"} titulo={"Sobre Nosotros"}/>
            <HistoriaCoquere/>
            <ChefsCard img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
        </main>
    )
}

export default Nosotros;