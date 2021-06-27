import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import imageUrl from '../../img/card_img2.svg';
import classes from './EventsCarousel.module.css';
import SwiperCore, { Scrollbar } from 'swiper/core';

SwiperCore.use([Scrollbar]);

const UpcomingEventsCarousel = () => {
    const slides = [];

    for (let i = 0; i < 3; i++) {
        slides.push(
            <SwiperSlide
                key={`slide-${i}`}
                className={classes.container}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className={classes.contentWrapper}>
                    <h2 className={classes.title}>World of Warships</h2>
                    <p className={classes.txt}>Запись открыта (6/12)</p>
                    <p className={classes.txt}>12 июля | 21:00</p>
                    <button className={classes.btn}>Участвовать</button>
                </div>
            </SwiperSlide>
        );
    }

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                spaceBetween={10}
                style={{ width: '100%', height: '100%' }}
                className="mySwiper"
            >
                {slides}
            </Swiper>
        </>
    );
};

export default UpcomingEventsCarousel;
