import React from 'react';
import notFound from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger '>Sorry</h2>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;