
import React from 'react';
import Technical2 from './technical2';

const Technical = () => {

  const imagesData = [
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Image 1',
      description: 'Description for Image 1',
      id:'01',
    },
    {
      src: './assets/carouselImages/02.jpg',
      title: 'Image 2',
      description: 'Description for Image 2',
      id:'02',
    },
    {
      src: './assets/carouselImages/03.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
      id:'03',
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'Image 4',
      description: 'Description for Image 4',
      id:'04',
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'Image 5',
      description: 'Description for Image 5',
      id:'05',
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'Image 6',
      description: 'Description for Image 6',
      id:'06',
    },
    // Add more objects as needed
  ];

  return (
    <div className='TechnicalMainContainer'>
      {/* Pass the array as a prop */}
      <Technical2 images={ imagesData } />
    </div>
  );
};

export default Technical;
