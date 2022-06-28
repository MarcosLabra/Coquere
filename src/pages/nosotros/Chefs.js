import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import ChefsCard from '../../components/cards/ChefsCard';



const Chefs = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className="chefs">
            <h4>Chefs</h4>
            <p>Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: COCINAR.</p>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                interval={1500}
                bullets={false}
                className='chefs__slider'
            >
                <div>
                    <ChefsCard img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
                </div>

                <div>
                    <ChefsCard img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
                </div>

                <div>
                    <ChefsCard img={"/images/chefs/chef1.svg"} titulo={"Julián Sandoval, Chef internacional"} texto={"Especialidad: Cocina salada"}/>
                </div>
            </AutoplaySlider>
        </section>
    )
}

export default Chefs