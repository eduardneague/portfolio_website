import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

import '../src/css_files/App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../src/css_files/customSwiper.css';

const SwiperComponent = ({slides, startIndex}) => {

    const slideImages = slides.map((slide) => {
        return (
        <SwiperSlide key = {slide.index}>
                <img 
                src = {slide.src} 
                alt = {slide.alt}
                index = {slide.index} 
                className = "object-cover w-full h-full"
                onClick = {(e) => e.stopPropagation()} 
                />
        </SwiperSlide>
        )
    })

    return (
        <div onClick = {(e) => e.stopPropagation()} >
        <Swiper
            initialSlide = {startIndex}
            autoplay = {true}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation 
            pagination 
            className = ""
        >
            {slideImages}
        </Swiper>
        </div>
    );
};

export default SwiperComponent