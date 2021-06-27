import React, { useRef, useState, useContext } from 'react';
import { EventsContext } from '../../services/contexts/eventsContext';
import { EVENT } from '../../services/constants/initViews';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import imageUrl from '../../img/card_img1.svg';
import classes from './EventsCarousel.module.css';
import SwiperCore, { Scrollbar } from 'swiper/core';

SwiperCore.use([Scrollbar]);

const TodayEventsCarousel = ({ go }) => {
    const { events, setEvents } = useContext(EventsContext);
    const handleClick = (event) => {
        setEvents(prev=> ({...prev, currEvent: events.data.find(item=>item.id == event.currentTarget.dataset.id)}));
        go(event)
        };
      
    const slides = events.data &&
        [...events.data.map((item, index) => {
            return (
                <SwiperSlide
                    key={`slide-${index}`}
                    className={classes.container}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className={classes.contentWrapper}
                        onClick={handleClick}
                        data-to={EVENT}
                        data-id={item.id}
                    >
                        <h2 className={classes.title}>{item.name}</h2>
                        <p className={classes.txt}>{item.description}</p>
                        <p className={classes.txt}>29 июня | 20:00</p>
                        <button className={classes.btn}>Участвовать</button>
                    </div>
                </SwiperSlide>
            )
        }

        )] 

        ;
    //console.log(slides);
        // [];

    // for (let i = 0; i < 3; i++) {
    //     slides.push(
    //         <SwiperSlide
    //             key={`slide-${i}`}
    //             className={classes.container}
    //             style={{ backgroundImage: `url(${imageUrl})` }}
    //         >
    //             <div className={classes.contentWrapper}
    //                 onClick={go} data-to="event"
    //             >
    //                 <h2 className={classes.title}>World of Tanks</h2>
    //                 <p className={classes.txt}>Самый горячий турнир</p>
    //                 <p className={classes.txt}>29 июня | 20:00</p>
    //                 <button className={classes.btn}>Участвовать</button>
    //             </div>
    //         </SwiperSlide>
    //     );
    // }

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

export default TodayEventsCarousel;
