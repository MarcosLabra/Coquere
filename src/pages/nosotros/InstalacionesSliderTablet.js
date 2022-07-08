import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSliderTablet = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones1.png" alt="" srcset="" />

                <img src="/images/instalaciones/instalaciones2.png" alt="" />
            </div>
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones3.png" alt="" />

                <img src="/images/instalaciones/instalaciones4.png" alt="" />
            </div>
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones5.png" alt="" />

                <img src="/images/instalaciones/instalaciones6.png" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSliderTablet
