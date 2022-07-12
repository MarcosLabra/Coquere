import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSliderTablet = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones1.jpg" alt="" srcset="" />

                <img src="/images/instalaciones/instalaciones2.jpg" alt="" />
            </div>
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones3.jpg" alt="" />

                <img src="/images/instalaciones/instalaciones4.jpg" alt="" />
            </div>
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones5.jpg" alt="" />

                <img src="/images/instalaciones/instalaciones6.jpg" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSliderTablet
