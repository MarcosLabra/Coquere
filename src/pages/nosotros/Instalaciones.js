import AwesomeSlider from 'react-awesome-slider';

const Instalaciones = () => {
    return (
        <section className="instalaciones">
            <h4 id="instalaciones">Instalaciones</h4>
            <p>Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: COCINAR.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque vitae metus sed porttitor.</p>
            <AwesomeSlider
                bullets={false}
                className='porqueElegirnos__slider'
            >
                <div>
                    <img src="" alt="" srcset="" />
                </div>

                <div>
                    <img src="" alt="" srcset="" />
                </div>

                <div>
                    <img src="" alt="" srcset="" />
                </div>
            </AwesomeSlider>
        </section>
    )
}

export default Instalaciones