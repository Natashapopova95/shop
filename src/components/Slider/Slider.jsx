import React, { useRef } from 'react';
import './slick.css';
import './slick-theme.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './Slider.module.css';
import Skeleton from '../Skeleton';
import { CardCatalog } from '../CardCatalog/CardCatalog';
import Slider from 'react-slick';

export const Sliders = ({ item, isLoading }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {isLoading
        ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
        : item.map((obj) => {
            return <CardCatalog key={obj.id} {...obj} />;
          })}
    </Slider>
  );
};
