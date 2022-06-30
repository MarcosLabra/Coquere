import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Boton from '../../components/layout/Boton';

export const PorqueElegirnos = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className="porqueElegirnos">
            <h4>¿Porque elegirnos?</h4>
            <p>A través de clases de cocina, talleres, cooking parties, eventos privados, catas de vinos, coctelería y experiencias gastronómicas de todo tipo será tu lugar perfecto para dejar volar tu creatividad, aprender, tocar y disfrutar cocinando.</p>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                interval={1500}
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
            </AutoplaySlider>
            <Boton icono="/images/icons/plus-circle-solid.png" texto="Ver más sobre Coquere" url="/nosotros" />
        </section>
    )
}

export default PorqueElegirnos;