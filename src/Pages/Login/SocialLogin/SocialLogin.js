import React from 'react'; 
import google from '../../../images/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50' ></div>
            </div>
            <div>
                <button className=' google-button w-50'>
                    <img className='google' src={google} alt="" />
                   <span className='text-white px-2'> Google Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;