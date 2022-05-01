import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import './Banner.css'
const Banner = () => {
    const { ref } = useInView()
    return (
        <div ref={ref} className='banner d-flex justify-content-start'>
            <div className="banner-text container">
                <h1 className='sub-title'>Bikers World</h1>
                <h2 className='heading'>Shop Your Desired <span className='bike'> Bike </span> Here</h2>
                <p>We provide you quality Products</p>
                <p><span><FaLongArrowAltDown className='banner-icon fs-1' style={{ color: "var(--primary-color)" }} /></span></p>
            </div>

        </div>
    );
};

export default Banner;