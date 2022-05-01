import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogpost from '../Blogpost/Blogpost';
import News from '../News/News';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Review></Review>
            <Blogpost></Blogpost>
            <News></News>
        </div>
    );
};

export default Home;