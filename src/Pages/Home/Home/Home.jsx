import React from 'react';
import Banner from '../Banner/Banner';
import Blogpost from '../Blogpost/Blogpost';
import News from '../News/News';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Blogpost></Blogpost>
            <News></News>
        </div>
    );
};

export default Home;