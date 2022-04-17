import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img,description,price} = service;
    return (
        <div class="card col-sm-12" style={{width: "18rem;"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">Price:{price}</p>
         <a href="#" class="btn btn-primary">Book Now</a>
        
        </div>
      </div>
    )
};

export default Service;