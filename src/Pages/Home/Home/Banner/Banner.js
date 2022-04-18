import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import heart from '../../../../images/healthy-heart.webp'
import cardiacarrest from '../../../../images/cardiacarrest.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="  d-block w-100  "
            src={heart}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dr. Anamur Rahman</h3>
            <p>Cardiologist</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="  d-block w-100  "
            src={cardiacarrest}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dr. Anamur Rahman</h3>
            <p>Cardiologist</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
};

export default Banner;