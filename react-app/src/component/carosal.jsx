import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const slides = Array.isArray(children) ? children : [children]; // Ensure it works with a single child

  useEffect(() => {
    if (autoSlide) {
      startAutoSlide();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIndex, autoSlide, autoSlideInterval]);

  const startAutoSlide = () => {
    clearInterval(timerRef.current); // Clear any existing timer
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoSlideInterval);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(timerRef.current); // Stop auto-sliding when manually navigating
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  return (
    <div className="relative h-64 w-full overflow-hidden">
      {' '}
      {/* Adjust height as needed */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-24  md:left-[500px] -translate-x-1/2 flex md:space-x-[790px] left-[245px] space-x-[300px]">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </button>
      </div>
      {/* Indicators (optional) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;