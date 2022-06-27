const ChefsCard = ({img,titulo,texto}) => {
    return (
        <div className='chefContenedor'>
            <img src={img} alt="" className='chefImg'/>
            <div className='chefDescripcion'>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default ChefsCard