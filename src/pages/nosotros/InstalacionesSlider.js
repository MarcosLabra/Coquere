import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSlider = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div>
                <img src="/images/instalaciones/instalaciones1.png" alt="" srcset="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones2.png" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones3.png" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones4.png" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones5.png" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones6.png" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSlider

