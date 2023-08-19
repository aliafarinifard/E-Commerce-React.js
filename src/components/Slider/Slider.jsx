import React, { useState } from 'react'

import slider1 from "../../img/slider-1.jpeg";
import slider2 from "../../img/slider-2.webp";
import slider3 from "../../img/slider-3.webp";

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import "./Slider.scss";

const Slider = () => {

    const [currendSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currendSlide === 0 ? 2 : (prev) => prev - 1);
    };


    const nextSlide = () => {
        setCurrentSlide(currendSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='slider'>

            <div className="container" style={{ transform: `translateX(${-100 * currendSlide}vw)` }}>
                <div className="sliderItem">
                    <img src={slider1} alt="slider-1" className='sliderImg' />
                </div>

                <div className="sliderItem">
                    <img src={slider2} alt="slider-2" className='sliderImg' />
                </div>

                <div className="sliderItem">
                    <img src={slider3} alt="slider-3" className='sliderImg' />
                </div>
            </div>

            <div className="icons">

                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon className='arrowIcon' />
                </div>

                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon className='arrowIcon' />
                </div>

            </div>

        </div>
    )
}

export default Slider