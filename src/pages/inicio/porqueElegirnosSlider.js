import AwesomeSlider from 'react-awesome-slider';
const PorqueElegirnosSlider = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='porqueElegirnos__slider'
        >
            <div>
                <img src="/images/inicio/porqueElegirnos1.webp" alt="" srcset="" />
            </div>

            <div>
                <img src="/images/inicio/porqueElegirnos2.webp" alt="" srcset="" />
            </div>

            <div>
                <img src="/images/inicio/porqueElegirnos3.webp" alt="" srcset="" />
            </div>
        </AwesomeSlider>
    )
}

export default PorqueElegirnosSlider

