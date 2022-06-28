import DiplomadosDestacados from "../components/DiplomadosDestacados"
import PorqueElegirnos from "../components/PorqueElegirnos"
import ReseñasAlumnos from "../components/ReseñasAlumnos"
import SliderInicio from "../components/SliderInicio"
import TalleresDestacados from "../components/TalleresDestacados"
import ActividadesEmpresariales from "../components/ActividadesEmpresariales"
import ComoLlegar from "../components/ComoLlegar"

const Inicio = () => {
    return (
        <main className="inicio">
            <SliderInicio />
            <PorqueElegirnos />
            <DiplomadosDestacados />
            <TalleresDestacados />
            <ReseñasAlumnos />
            <ActividadesEmpresariales />
            <ComoLlegar />
        </main>
    )
}

export default Inicio