import DiplomadosDestacados from "../components/DiplomadosDestacados"
import PorqueElegirnos from "../components/PorqueElegirnos"
import ReseñasAlumnos from "../components/ReseñasAlumnos"
import SliderInicio from "../components/SliderInicio"
import TalleresDestacados from "../components/TalleresDestacados"

const Inicio = () => {
    return (
        <main className="inicio">
            <SliderInicio />
            <PorqueElegirnos />
            <DiplomadosDestacados />
            <TalleresDestacados />
            <ReseñasAlumnos />
        </main>
    )
}

export default Inicio