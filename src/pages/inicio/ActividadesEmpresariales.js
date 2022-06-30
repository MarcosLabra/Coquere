import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Boton from '../../components/layout/Boton';

const ActividadesEmpresariales = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    
    return (
        <section className="actividadesEmpresariales">
            <h4>Actividades Empresariales</h4>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                interval={1500}
                bullets={false}
                className='actividadesEmpresariales__slider'
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

            <Boton texto="Ver más" url="/empresarial"/>
        </section>
    )
}

export default ActividadesEmpresariales