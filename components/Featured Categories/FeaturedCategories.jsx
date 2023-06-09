import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function FeaturedCategories({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative z-10 hidden sm:block">
      <div className="font-montserrat md:text-4xl text-2xl font-extrabold md:p-10 p-10 mb-[15px] bg-white">
        Featured Categories
      </div>
      <div
        className="flex transition-transform ease-out duration-500 border-b-0 w-contain items-center justify-center mx-auto items-center z-10"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {/* <div className="absolute flex md:w-full justify-between mt-[-180px] p-4 z-1 hidden sm:block">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div> */}

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
              <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
              ))}
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedCategories;
