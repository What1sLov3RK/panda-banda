import React from 'react';
import '../styles/slider.scss';
import { Carousel } from 'react-bootstrap';
function Slider(){

    return(
      <Carousel interval={3000} touch={true} id={'slider-container'} controls={false} indicators={false}>
      <Carousel.Item>
        <img
          src="https://pandabanda.city/upload/iblock/b3c/b3cf698e9718683ae6fbee9c1df32f86.jpeg"
          alt="slider_image"

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://pandabanda.city/upload/iblock/3ab/3ab07aa31229bf715c5e5e15e59bf0f8.jpg"
          alt="slider_image"
          style={{paddingBottom:'1.136%'}}
        />
      </Carousel.Item>
    </Carousel>
  )

}

export default Slider;