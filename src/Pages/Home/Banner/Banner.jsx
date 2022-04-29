import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex justify-content-start'>
            <div className="banner-text container">
                <h1 className='sub-title'>Bikers World</h1>
                <h2 className='heading'>Shop Your Desired <span className='bike'> Bike </span> Here</h2>
                <p>We provide you quality Products</p>
                <button className='global-btn'>Explore Us</button>
            </div>
        </div>
    );
};

export default Banner;