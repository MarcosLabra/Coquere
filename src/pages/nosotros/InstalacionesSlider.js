import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSlider = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div>
                <img src="/images/instalaciones/instalaciones1.jpg" alt="" srcset="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones2.jpg" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones3.jpg" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones4.jpg" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones5.jpg" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones6.jpg" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSlider

