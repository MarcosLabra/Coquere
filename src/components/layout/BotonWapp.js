import { Link } from "react-router-dom"

const BotonWapp = ({ texto, url }) => {
  return (
    <Link to={url} className="boton" target="_blank" rel="noreferrer">
      <img src="/images/icons/whats-app-blanco.svg" alt="" srcSet="" className="boton--imagen" />
      <p className="boton--texto">{texto}</p>
    </Link>
  )
}

export default BotonWapp