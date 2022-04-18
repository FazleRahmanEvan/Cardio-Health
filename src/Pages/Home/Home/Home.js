import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='m-5'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;