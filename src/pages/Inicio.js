import { useEffect } from "react"
import PorqueElegirnos from "./inicio/PorqueElegirnos"
import SliderInicio from "./inicio/SliderInicio"
import ActividadesEmpresariales from "./inicio/ActividadesEmpresariales"
import ComoLlegar from "./contacto/ComoLlegar"
import DiplomadosDestacados from "./inicio/DiplomadosDestacados"
import TalleresDestacados from "./inicio/TalleresDestacados"
import ReseñasAlumnos from "./inicio/ReseñasAlumno"
import ReseñasAlumnosTablet from "./inicio/ReseñasAlumnosTablet"
import DiplomadosDestacadosTablet from "./inicio/DiplomadosDestacadosTablet"
import TalleresDestacadosTablet from "./inicio/TalleresDestacadosTablet"

const Inicio = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main className="inicio">
            <SliderInicio />
            <PorqueElegirnos />
            {window.innerWidth < 768 ? <DiplomadosDestacados /> : <DiplomadosDestacadosTablet />}
            {window.innerWidth < 768 ? <TalleresDestacados /> : <TalleresDestacadosTablet />}
            {window.innerWidth < 768 ? <ReseñasAlumnos /> : <ReseñasAlumnosTablet />}
            <ActividadesEmpresariales />
            <ComoLlegar />
        </main>
    )
}

export default Inicio