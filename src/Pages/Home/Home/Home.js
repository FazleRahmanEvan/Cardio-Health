import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Doctor from './Doctor/Doctor';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
        </div>
    );
};

export default Home;