import AwesomeSlider from 'react-awesome-slider';
import Boton from '../../components/layout/Boton';

const ActividadesEmpresariales = () => {

    return (
        <section className="actividadesEmpresariales">
            <h4>Actividades Empresariales</h4>

            <AwesomeSlider
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
            </AwesomeSlider>

            <Boton texto="Ver más información" url="/empresarial" />
        </section>
    )
}

export default ActividadesEmpresariales