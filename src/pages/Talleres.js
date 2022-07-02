import { useEffect } from "react"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import TalleresCarrousel from "./talleres/TalleresCarrousel"
import TalleresTexto from "./talleres/TalleresTexto"

const contenido =
    [
        {
            id: "reposteria",
            titulo: "Repostería",
            taller: [{
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            }]
        },
        {
            id: "cocinaSalada",
            titulo: "Cocina Salada",
            taller: [{
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            }]
        },
        {
            id: "cocteleria",
            titulo: "Coctelería",
            taller: [{
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            }]
        },
        {
            id: "parrilla",
            titulo: "Parrilla",
            taller: [{
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            },
            {
                img: "/images/talleres/talleres1.png",
                titulo: "Taller de tartas",
                duracion: "4 meses"
            }]
        }
    ]


const Talleres = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , [])

    return (
        <main className="talleres">
            <PortadaPaginas img={"/images/portadas/talleresCortosPortada.png"} titulo={"Talleres cortos"} />
            <TalleresTexto />
            {contenido.map((contenido) => {
                return <TalleresCarrousel contenido={contenido} />
            })}
        </main>
    )
}

export default Talleres