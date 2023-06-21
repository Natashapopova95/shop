import React, { useRef } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './Slider.module.css';
import { StarRating } from '../StarRating/StarRating';
import Skeleton from '../Skeleton';
import { CardCatalog } from '../CardCatalog/CardCatalog';

export const Slider = ({ item, isLoading }) => {
  const slideLeft = () => {
    var slider = document.getElementById('Slider_slider__NA5KE');
    slider.scrollLeft = slider.scrollLeft + 1080;
    console.log(slider);
  };
  const slideRinght = () => {
    var slider = document.getElementById('Slider_slider__NA5KE');
    slider.scrollLeft = slider.scrollLeft - 1080;
    console.log(slider);
  };

  return (
    <div className={styles.mainslidercontainer}>
      <GoChevronLeft
        size={40}
        className={`${styles.sliderIcon} ${styles.left}`}
        onClick={slideRinght}
      ></GoChevronLeft>
      <div id={styles.slider}>
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : item.map((obj) => {
              return <CardCatalog key={obj.id} {...obj} />;
            })}
      </div>
      <GoChevronRight
        size={40}
        className={`${styles.sliderIcon} ${styles.right}`}
        onClick={slideLeft}
      ></GoChevronRight>
    </div>
  );
};
