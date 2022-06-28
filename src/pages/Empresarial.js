import PortadaPaginas from "../components/layout/PortadaPaginas"
import EmpresarialContenido from "./empresarial/EmpresarialContenido"
const Empresarial = () => {
    return (
        <main className="empresarial">
             <PortadaPaginas img={"/images/portadas/empresarialPortada.jpg"} titulo={"Empresarial"} />
             <EmpresarialContenido />
        </main>
    )
}

export default Empresarial