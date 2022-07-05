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
                img: "/images/talleres/reposteria-mesaDePostres.jpg",
                titulo: "Mesa de Postres",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-chocolateria.png",
                titulo: "Chocolateria",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-browniesYCheescake.png",
                titulo: "Brownies y Cheescake",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-macarons.png",
                titulo: "Macarons",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-postresIndividuales.png",
                titulo: "Postres individuales",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-pastelDeCupcakes.png",
                titulo: "Pastel de Cupcakes",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-pastelDecorado.png",
                titulo: "Pastel decorado",
                duracion: "4 a 5 horas"
            },
            {
                img: "/images/talleres/reposteria-roscaDeReyes.png",
                titulo: "Rosca de Reyes",
                duracion: "4 horas"
            },
            {
                img: "/images/talleres/reposteria-manejoDeDuyas.png",
                titulo: "Manejo de Duyas",
                duracion: "3 horas"
            },
            {
                img: "/images/talleres/reposteria-galletasGourmet.png",
                titulo: "Galletas gourmet",
                duracion: "4 horas"
            }]
        },
        {
            id: "cocinaSalada",
            titulo: "Cocina Salada",
            taller: [{
                img: "/images/talleres/cocinaSalada-pizzaFocaccia.png",
                titulo: "Taller de tartas",
                duracion: "4 horas"
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
                img: "/images/talleres/cocteleria-cocteleria.jpg",
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
            {contenido.map((contenido) => {
                return <TalleresCarrousel contenido={contenido} />
            })}
        </main>
    )
}

export default Talleres