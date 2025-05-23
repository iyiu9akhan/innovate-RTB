import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { FaStar } from "react-icons/fa";

function Slider({ slides }) {
  useEffect(() => {
    initFlowbite(); // Initialize Flowbite carousel
  }, []);

  return (
    <div id="testimonial-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        {/* Map through slides */}
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`duration-700 ease-in-out ${index === 0 ? '' : 'hidden'}`} 
            data-carousel-item
          >
            <div className="bg-white rounded-[20px] p-[60px] relative">
              <p className="font-secondary font-normal text-[22px] leading-[44px] text-info-color mb-[37px]">
                {slide.review}
              </p>
              <div className="flex justify-between">
                <div>
                  <h5 className="font-primary capitalize text-[24px] font-bold leading-[36px] text-[#30344E] mb-1">
                    {slide.name}
                  </h5>
                  <p className="font-secondary font-normal text-[16px] leading-[26px] text-[#30344E] capitalize">
                    {slide.title}
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < slide.rating ? (
                        <FaStar color="#ffc107" size={18} />
                      ) : (
                        <FaStar color="#ddd" size={18} />
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-[124px] w-[124px] rounded-[50%] absolute top-[-80px] outline outline-[#F7F7FC]">
                <img src={slide.img} alt={slide.name} className="rounded-[50%]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blueBtn-color"
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 rounded-full bg-blueBtn-color hover:bg-blue-800 text-white"
        data-carousel-prev
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 rounded-full bg-blueBtn-color hover:bg-blue-800 text-white"
        data-carousel-next
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Slider;