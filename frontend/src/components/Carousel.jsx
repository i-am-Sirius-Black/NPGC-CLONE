
import React, { useState, useEffect } from "react";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const slides = [
  { image: slide1, caption: "AGNIVEER YOJNA" },
  { image: slide2, caption: "Welcome to National P.G. College" },
  { image: slide3, caption: "GRADE 'A' COLLEGE" },
  { image: slide4, caption: "Short Video / Banner Competition on MyGov Platform" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative m-4 sm:m-6 overflow-hidden">
      {/* Carousel Container */}
      {/* <div className="relative w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-200"> */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] lg:h-[600px] overflow-hidden bg-gray-200">
        {/* Images */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          &#8250;
        </button>

        {/* Caption */}
        <div className="absolute bottom-4 left-4 bg-[#6091ba] text-white px-4 py-1 sm:py-2 rounded-md shadow-lg z-10">
          <h3 className="text-sm sm:text-lg">{slides[currentIndex].caption}</h3>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;


