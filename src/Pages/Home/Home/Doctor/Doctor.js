import React from 'react';
import doctor from '../../../../images/anam.png';
import './Doctor.css';

const Doctor = () => {
  return (
    <div id="doctor" className="doctor d-flex ">
      <div className='w-50'>
        <h1 className='text-primary mb-4 '> Doctor </h1>
        <h2>Dr. MD.ANAMUR RAHMAN</h2>
        <h3>Cardiologist</h3>
        <p >Dr. Md. Anamur Rahman Anam is a Cardiologist in Sylhet. His qualification is MBBS, BCS (Health), MD (Cardiology). He is a Assistant Professor in the Department of Cardiology at Sylhet MAG Osmani Medical College And Hospital. He regularly provides treatment to his patients at Mount Adora Hospital, Nayasarak, Sylhet.</p>
      </div>
      <div>
        <img src={doctor} alt="" />
      </div>
    </div>
  );
};

export default Doctor;