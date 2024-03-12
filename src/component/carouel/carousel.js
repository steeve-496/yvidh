import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination ,  Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";



function Carousel({ slides}) {

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination , Autoplay]}
      autoplay={{ delay: 2000 }}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={2000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true} // Enable circular mode
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
         <a href={"#" + slide.id }><img src={slide.src} alt="events" className="eventsimage" /></a> 
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src="./assets/carouselImages/arrow-left.svg" alt="Left" />
      </div>
      <div className="button-next">
        <img src="./assets/carouselImages/arrow-right.svg" alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;
