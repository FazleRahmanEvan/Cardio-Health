import React from 'react';
import doctor from '../../../../images/anam.png';
import './Doctor.css';

const Doctor = () => {
    return (
      <div className="doctor d-flex ">
          <div>
            <h1  className='text-primary'>ABOUT 
                <br />
                DR MD. ANAMUR RAHMAN </h1>
            <h3>Cardiologist</h3>
            <p>Assistant Professor, Sylhet MAG Osmani Medical College  Hospital</p>
          
           </div>
           <div>
            <img src={doctor} alt=""/>
           </div>
       </div>
    );
};

export default Doctor;