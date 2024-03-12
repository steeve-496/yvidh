
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css'; 
import './technical.css'

const Technical2 = ({ images,initialSlideIndex }) => (
  <AwesomeSlider cssModule={AwesomeSliderStyles} initialSlide={initialSlideIndex}>
    {images.map((image) =>(
      <section className='AwesomeSlidercontainer' id={ image.id } key={ image.id }>
      <img  src={ image.src } />
      <div>
      <h2>{ image.title }</h2>
      <p>{ image.description }</p>
      <button>Register</button>
      </div>
      
    </section>
    ))}
    
    
  </AwesomeSlider>
);

export default Technical2;
