
import PortadaPaginas from "../components/layout/PortadaPaginas"
import TalleresCarrousel from "./talleres/TalleresCarrousel"
import TalleresTexto from "./talleres/TalleresTexto"

const contenido =
    [
        {
            titulo: "Reposteria",
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
            titulo: "Cocteleria",
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