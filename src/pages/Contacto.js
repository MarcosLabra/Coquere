import ComoLlegar from "./contacto/ComoLlegar"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import Redes from "./contacto/Redes"

const Contacto = () => {
    return (
        <main className="contacto">
            <PortadaPaginas img={"/images/portadas/contactoPortada.png"} titulo={"Contacto"} />
            <ComoLlegar />
            <Redes />
        </main>
    )
}

export default Contacto