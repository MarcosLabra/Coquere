import DiplomadosDestacados from "../components/DiplomadosDestacados"
import PorqueElegirnos from "../components/PorqueElegirnos"
import SliderInicio from "../components/SliderInicio"

const Inicio = () => {
    return (
        <main className="inicio">
            <SliderInicio />
            <PorqueElegirnos />
            <DiplomadosDestacados />
        </main>
    )
}

export default Inicio