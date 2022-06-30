const Boton = ({ texto, url}) => {
  return (
    <a href={url} className="boton">
        <img src="/images/icons/plus-circle-solid.svg" alt="" srcSet="" className="boton--imagen" />
        <p className="boton--texto">{texto}</p>
    </a>
  )
}

export default Boton