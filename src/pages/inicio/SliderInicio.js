import AwesomeSlider from 'react-awesome-slider';
import Boton from '../../components/layout/Boton';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const SliderInicio = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className='sliderInicio'>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={2000}
                bullets={false}
                className='sliderInicio__slider'
            >
                <div className='sliderInicio__slider--slide'>
                    <img src="/images/sliderInicio/sliderInicio1.jpg" alt="" srcset="" className='sliderInicio__slider--slide--img' />
                    <div className='sliderInicio__slider--descripcion'>
                        <img src="/images/branding/CoquereLogoVerde.webp" alt="Coquere Logo" className='sliderInicio__slider--descripcion--img' />
                        <p>"Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: <span>COCINAR</span>"</p>
                    </div>
                </div>

                <div className='sliderInicio__slider--slide'>
                    <img src="/images/sliderInicio/sliderInicio2.jpg" alt="" srcset="" className='sliderInicio__slider--slide--img' />
                    <div className='sliderInicio__slider--descripcion'>
                        <p>Ofrecemos talleres de corta duración para aquellos estudiantes con deseos específicos.</p>
                        <Boton texto='Diplomados' url='/diplomados' />
                    </div>
                </div>

                <div className='sliderInicio__slider--slide'>
                    <img src="/images/sliderInicio/sliderInicio3.jpg" alt="" srcset="" className='sliderInicio__slider--slide--img' />
                    <div className='sliderInicio__slider--descripcion'>
                        <p>Diplomados especializados con grupos reducidos para garantizar la calidad de la enseñanza.</p>
                        <Boton texto='Talleres cortos' url='/talleres' />
                    </div>
                </div>
            </AutoplaySlider>
        </section>
    )
}

export default SliderInicio