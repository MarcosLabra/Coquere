import AwesomeSlider from 'react-awesome-slider';

const Instalaciones = () => {
    return (
        <section className="instalaciones">
            <h4 id="instalaciones">Instalaciones</h4>
            <p>Una cocina completamente equipada, contamos con una moderna infraestructura, la cual ha sido diseñada bajo estándares internacionales de sanidad, seguridad y competitividad laboral para que nuestros estudiantes puedan aprender de la manera más efectiva y práctica posible, te ofrecemos el equipo de cocina más completo y fácil de usar para todos los niveles de habilidad.</p>
            <p>Contamos con excelente ubicación, más de 15 espacios de estacionamiento, un espacio amigable y flexible que se adapta a tus necesidades.</p>
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