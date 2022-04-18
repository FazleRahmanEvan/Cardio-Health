import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail'

const ServiceDetail = () => {
    const {serviceId} =useParams();
    return (
        <div className='service-detail mb-5'>
            <h1 className=' mt-5 mb-5'>Welcome To Detail:{serviceId}</h1>
            <div className='checkout'>
            <Link to ="/login">
                <button className=' mb-5 btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;