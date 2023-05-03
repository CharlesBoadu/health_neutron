import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function CustomerReviews({
    children: slides
}) {

  const [curr, setCurr] = useState(0)
  const [showControl, setShowControl] = useState(false);

  useEffect(() => {
      if (slides.length > 1) {
        setShowControl(true);
      } else {
        setShowControl(false);
      }
  }, [slides.length])
  
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative z-100 h-[60vh] m-10 bg-[#e5e7eb]">
      <div className="font-montserrat text-2xl font-extrabold bg-white mb-[-30px] pb-5">
        Customer Reviews
      </div>
      <div
        className="flex transition-transform ease-out duration-500 border-b-0 h-[50vh] items-center z-10"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {showControl && <div className="absolute w-full flex items-center mt-[-250px] justify-between p-4 z-1">
        <button
          onClick={prev}
          className="p-1 rounded-sm shadow bg-white/80 text-gray-800 hover:bg-white h-[35vh]"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-sm shadow bg-white/80 text-gray-800 hover:bg-white h-[35vh]"
        >
          <ChevronRight size={40} />
        </button>
      </div>}

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-[#7d018c] rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
