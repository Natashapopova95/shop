import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './Slider.module.css';
import Skeleton from '../Skeleton';
import { CardCatalog } from '../CardCatalog/CardCatalog';

export const Slider2 = ({ item, isLoading }) => {
  // const slideLeft = () => {
  //   var slider = document.getElementById('Slider_slider__NA5KE');
  //   slider.scrollLeft = slider.scrollLeft + 1080;
  //   console.log(slider);
  // };
  // const slideRinght = () => {
  //   var slider = document.getElementById('Slider_slider__NA5KE');
  //   slider.scrollLeft = slider.scrollLeft - 1080;
  //   console.log(slider);
  // };

  return (
    <Swiper
      spaceBetween={-50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className={styles.mainslidercontainer}>
        <GoChevronLeft size={40} className={`${styles.sliderIcon} ${styles.left}`}></GoChevronLeft>
        <div id={styles.slider}>
          {isLoading
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : item.map((obj) => {
                return (
                  <SwiperSlide>
                    <CardCatalog key={obj.id} {...obj} />
                  </SwiperSlide>
                );
              })}
        </div>
        <GoChevronRight
          size={40}
          className={`${styles.sliderIcon} ${styles.right}`}
        ></GoChevronRight>
      </div>
    </Swiper>
  );
};
