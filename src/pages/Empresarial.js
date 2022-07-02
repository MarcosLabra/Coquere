import { useEffect } from "react"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import EmpresarialContenido from "./empresarial/EmpresarialContenido"
const Empresarial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , [])

    return (
        <main className="empresarial">
             <PortadaPaginas img={"/images/portadas/empresarialPortada.png"} titulo={"Empresarial"} />
             <EmpresarialContenido />
        </main>
    )
}

export default Empresarial