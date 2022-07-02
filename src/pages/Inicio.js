import { useEffect } from "react"
import PorqueElegirnos from "./inicio/PorqueElegirnos"
import SliderInicio from "./inicio/SliderInicio"
import ActividadesEmpresariales from "./inicio/ActividadesEmpresariales"
import ComoLlegar from "./contacto/ComoLlegar"
import DiplomadosDestacados from "./inicio/DiplomadosDestacados"
import TalleresDestacados from "./inicio/TalleresDestacados"
import ReseñasAlumnos from "./inicio/ReseñasAlumnos"

const Inicio = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , [])

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