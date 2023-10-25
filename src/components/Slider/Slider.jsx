import { products } from '../../image/products';
import css from './Slider.module.css';
import React, { useState } from 'react';

const SliderData = [
  {
    image: products.shop,
  },
  {
    image: products.bale,
  },
  {
    image: products.post1,
  },
  {
    image: products.cone,
  },
  {
    image: products.bunk2,
  },

  {
    image: products.feed,
  },
  {
    image: products.free4,
  },
];

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={css.slider}>
      <button className={css.leftArrow} onClick={prevSlide}>
        left
      </button>
      <button className={css.rightArrow} onClick={nextSlide}>
        right
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div className={css.active} key={index}>
            {index === current && (
              <img src={slide.image} alt="Slider" className={css.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
