import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

export const PorqueElegirnos = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className="porqueElegirnos">
            <h4>¿Porque elegirnos?</h4>
            <p>Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: COCINAR
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
        </section>
    )
}

export default PorqueElegirnos;