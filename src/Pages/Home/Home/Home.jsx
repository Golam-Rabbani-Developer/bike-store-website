import React from 'react';
import Banner from '../Banner/Banner';
import Blogpost from '../Blogpost/Blogpost';
import News from '../News/News';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Blogpost></Blogpost>
            <News></News>
        </div>
    );
};

export default Home;