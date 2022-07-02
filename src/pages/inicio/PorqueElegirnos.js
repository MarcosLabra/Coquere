import AwesomeSlider from 'react-awesome-slider';
import Boton from '../../components/layout/Boton';

export const PorqueElegirnos = () => {
   
    return (
        <section className="porqueElegirnos">
            <h4>¿Porque elegirnos?</h4>
            <p>A través de clases de cocina, talleres, cooking parties, eventos privados, catas de vinos, coctelería y experiencias gastronómicas de todo tipo será tu lugar perfecto para dejar volar tu creatividad, aprender, tocar y disfrutar cocinando.</p>
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
            <Boton texto="Ver más sobre Coquere" url="/nosotros" />
        </section>
    )
}

export default PorqueElegirnos;