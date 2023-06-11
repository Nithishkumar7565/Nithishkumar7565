import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from 'react-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// // <ReactPlayer  class="" 
export default function  HomeSwiper() {
  return (
    <>
      <Swiper navigation={true}slidesPerView={1}
    loop={true}
    pagination={{ clickable: true}}
    modules={[Pagination,Autoplay,Navigation]}
    className="myswiper"
    autoplay={{ delay: 2000}}>
       
        <SwiperSlide>

                <ReactPlayer class="slider2" url={'https://www.apple.com/105/media/us/apple-events/2023/cf0bee50-686f-4a3c-9636-9e16522bf96b/anim/hero/large.mp4'} controls={true} style={{width:"5px"}}  />
           </SwiperSlide>
        
       <SwiperSlide>
                <ReactPlayer class="slider2" url={'https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4'} controls={true} style={{width:"1px"}}  />
                </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-7.jpg" alt=" "style={{width: "100%"}}/>
        </SwiperSlide>
        
        <SwiperSlide>
     <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-3.jpg" alt=" "style={{width: "100%"}} />
        </SwiperSlide>
   
   
      </Swiper>
    </>
  );
}

