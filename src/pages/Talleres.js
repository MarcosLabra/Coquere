import { useEffect } from "react"
import BotonWapp from "../components/layout/BotonWapp"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import TalleresTexto from "./talleres/TalleresTexto"
import TalleresCarrouselReposteria from "./talleres/TalleresCarrouselReposteria"
import TalleresCarrouselReposteriaTablet from "./talleres/TalleresCarrouselReposteriaTablet"


const Talleres = () => {

    
  

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main className="talleres">
            <PortadaPaginas img={"/images/portadas/talleresCortosPortada.png"} titulo={"Talleres cortos"} />
            <TalleresTexto />
            {window.innerWidth < 768 ? <TalleresCarrouselReposteria /> : <TalleresCarrouselReposteriaTablet />}

            <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/4oD"} />
        </main>
    )
}

export default Talleres