import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./slider.scss";

const Slider = ({ slider }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(slider);
  useEffect(() => {
    let lastSlide = slider.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastSlide);
    }
    if (activeIndex > lastSlide) {
      setActiveIndex(0);
    }
  }, [activeIndex, slider, slider.length]);
  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 4000);
    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  const slider3 = (slider) => {
    let slider2 = [slider[1], slider[0], slider[1], slider[0]];

    return slider2.map((slide, slideIndex) => {
      const { title, image, text } = slide;
      let position = "slider__nextSlide";
      if (slideIndex === activeIndex + 1) {
        position = "slider__activeSlide";
      }
      if (
        slideIndex === activeIndex ||
        (activeIndex === 0 && slideIndex === 0)
      ) {
        position = "slider__lastSlide";
      }

      return (
        <div key={slideIndex} className={`slider__article ${position}`}>
          <h3>{title}</h3>
          <img className="slider__Img" src={image} alt={title} />
          <p>{text}</p>
        </div>
      );
    });
  };

  return (
    <div className="slider">
      {slider.length > 2 &&
        slider.map((slide, slideIndex) => {
          const { title, image, text } = slide;
          let position = "slider__nextSlide";
          if (slideIndex === activeIndex) {
            position = "slider__activeSlide";
          }
          if (
            slideIndex === activeIndex - 1 ||
            (activeIndex === 0 && slideIndex === slider.length - 1)
          ) {
            position = "slider__lastSlide";
          }

          return (
            <div key={slideIndex} className={`slider__article ${position}`}>
              <h3>{title}</h3>
              <img className="slider__Img" src={image} alt={title} />
              <p>{text}</p>
            </div>
          );
        })}

      {slider.length === 2 && slider3(slider)}

      <button
        className="slider__buttonL"
        onClick={() => setActiveIndex(activeIndex - 1)}
      >
        <FiChevronLeft className="slider__arrow" />
      </button>
      <button
        className="slider__buttonR"
        onClick={() => setActiveIndex(activeIndex + 1)}
      >
        <FiChevronRight className="slider__arrow" />
      </button>
      <div className="slider__underlineConteiner">
        {slider.map((slide, index) => {
          let clName = "slider__underline";
          if (index === activeIndex) {
            clName = "slider__underline slider__underline_active";
          }
          return (
            <button
              key={index}
              className={clName}
              onClick={() => setActiveIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
