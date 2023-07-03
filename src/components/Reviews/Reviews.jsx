import React, { useState, useEffect } from 'react';
import './slick.css';
import './slick-themes.css';
import Slider from 'react-slick';
import axios from 'axios';
import ReviewsSkeleton from './ReviewsSkeleton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Reviews.module.css';

export const Reviews = () => {
  const [Reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '50px',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get('https://647b5af0d2e5b6101db1358c.mockapi.io/Reviews');
      setReviews(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div id={styles.reviews}>
      <div className={styles.wrapper}>
        <h4 className={styles.subtitle}>Testimonials</h4>
        <h2 className={styles.title}>Our Client Reviews</h2>
        <Slider {...settings}>
          {isLoading
            ? [...new Array(3)].map((_, index) => <ReviewsSkeleton />)
            : Reviews.map((obj) => {
                return (
                  <div key={obj.id} {...obj} className={styles.sliderCard}>
                    <div className={styles.imgBg}>
                      <img className={styles.images} src={obj.imageBg} alt=""></img>

                      <div className={styles.cardUser}>
                        <div className={styles.user}>
                          <img className={styles.imgUser} src={obj.imagesUser} alt=""></img>
                          <span className={styles.name}>{obj.name}</span>
                          <p className={styles.product}>{obj.product}</p>
                          <span className={styles.reviews}>{obj.reviews}</span>
                          <div className={styles.starRating}>
                            {[...Array(5)].map(() => {
                              return (
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.45203 7.77195C9.30094 7.91837 9.23153 8.13012 9.26594 8.33779L9.78453 11.2078C9.82828 11.451 9.72561 11.6972 9.52203 11.8378C9.32253 11.9836 9.05711 12.0011 8.83953 11.8845L6.25594 10.537C6.16611 10.4891 6.06636 10.4635 5.96428 10.4605H5.80619C5.75136 10.4687 5.69769 10.4862 5.64869 10.513L3.06453 11.867C2.93678 11.9311 2.79211 11.9539 2.65036 11.9311C2.30503 11.8658 2.07461 11.5368 2.13119 11.1897L2.65036 8.31971C2.68478 8.11029 2.61536 7.89737 2.46428 7.74862L0.35786 5.70695C0.181693 5.53604 0.120443 5.27937 0.200943 5.04779C0.27911 4.81679 0.47861 4.6482 0.719526 4.61029L3.61869 4.1897C3.83919 4.16695 4.03286 4.03279 4.13203 3.83445L5.40953 1.21529C5.43986 1.15695 5.47894 1.10329 5.52619 1.05779L5.57869 1.01695C5.60611 0.98662 5.63761 0.961536 5.67261 0.94112L5.73619 0.917786L5.83536 0.876953H6.08094C6.30028 0.899703 6.49336 1.03095 6.59428 1.22695L7.88869 3.83445C7.98203 4.0252 8.16344 4.15762 8.37286 4.1897L11.272 4.61029C11.517 4.64529 11.7218 4.81445 11.8029 5.04779C11.8793 5.2817 11.8134 5.53837 11.6337 5.70695L9.45203 7.77195Z"
                                    fill="#F6973F"
                                  />
                                </svg>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </Slider>
      </div>
    </div>
  );
};
