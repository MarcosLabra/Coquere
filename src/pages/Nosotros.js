import PortadaPaginas from "../components/layout/PortadaPaginas";
import { HistoriaCoquere } from "../components/layout/HistoriaCoquere";
import  Chefs  from "../components/cards/Chefs";

const Nosotros = () => {
    
    return (
        <main className="sobreNosotros">
            <PortadaPaginas img={"/images/nosotros/sobreNosotros.jpg"} titulo={"Sobre Nosotros"}/>
            <HistoriaCoquere/>
            <Chefs img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
        </main>
    )
}

export default Nosotros;