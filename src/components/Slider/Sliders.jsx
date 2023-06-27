import React, { useRef } from 'react';
import './slick.css';
import './slick-theme.css';
import Slider from 'react-slick';
import Skeleton from '../Skeleton';
import { CardCatalog } from '../CardCatalog/CardCatalog';

export const Sliders = ({ item, isLoading }) => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 4,
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
