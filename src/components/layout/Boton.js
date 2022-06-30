const Boton = ({icono, texto, url}) => {
  return (
    <a href={url} className="boton">
        <img src={icono} alt="" srcSet="" className="boton--imagen" />
        <p className="boton--texto">{texto}</p>
    </a>
  )
}

export default Boton