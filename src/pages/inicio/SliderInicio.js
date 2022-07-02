import AwesomeSlider from 'react-awesome-slider';

const SliderInicio = () => {


    return (
        <section className='sliderInicio'>
            <div className='sliderInicio__descripcion'>
                <img src="/images/branding/CoquereLogoVerde.webp" alt="Coquere Logo" />
                <p>Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: COCINAR</p>
            </div>
            <AwesomeSlider
                bullets={false}
                className='sliderInicio__slider'
            >
                <div>
                    <img src="/images/sliderInicio/sliderInicio1.jpg" alt="" srcset="" />
                </div>

                <div>
                    <img src="/images/sliderInicio/sliderInicio2.jpg" alt="" srcset="" />
                </div>

                <div>
                    <img src="/images/sliderInicio/sliderInicio3.jpg" alt="" srcset="" />
                </div>
            </AwesomeSlider>
        </section>
    )
}

export default SliderInicio