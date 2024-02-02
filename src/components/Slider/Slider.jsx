import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';

import slide1 from "/img/slide1.jpeg";
import slide2 from "/img/slide2.jpeg";
import slide3 from "/img/slide3.jpeg";
import slide4 from "/img/slide4.jpeg";
import slide5 from "/img/slide5.jpeg";
import slide6 from "/img/slide6.jpeg";
import slide7 from "/img/slide7.jpeg";
import slide8 from "/img/slide8.jpeg";

const Slider = () => {

    const data = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
    ];

    return (
        <div className="slider">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                effect={'fade'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{
                    "--swiper-pagination-color": "#ff3e6c",
                }}
            >
                <SwiperSlide><img src={data[0]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[1]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[2]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[3]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[4]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[5]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[6]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[7]} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;