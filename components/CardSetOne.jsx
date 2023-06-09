import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function CardSetOne({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const router = useRouter();
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
    <div className="flex md:flex-row flex-col w-full h-contain bg-[#e5e7eb] mb-10 md:h-[60vh] md:space-x-6">
      <div className="flex items-center justify-center w-full md:flex-row flex-col md:m-10 m-0 md:h-[40vh] h-contain font-montserrat md:space-x-8 md:space-y-0 space-y-10">
        <div className="flex-1 md:h-full w-full md:py-32 py-8 flex items-center justify-center md:flex-row flex-col md:space-y-0 space-y-10">
          <div className="flex-1 text-center w-[50%] bg-white md:mr-5 overflow-hidden md:relative">
            <div
              className="flex transition-transform ease-out duration-500 border-b-0"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>
            <div className="absolute bottom-4 right-0 left-0">
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
            </div>
          </div>
          <div className="flex aspect-w-16 aspect-h-9 md:w-[55%] w-[100%] bg-gray-200">
            <iframe
              class="w-full h-full aspect-video"
              src="https://www.youtube.com/embed/RRT3Fz7SRKw"
              title="Youtube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* <div
          className="flex flex-col md:w-[300px] w-[80%] h-full rounded-lg"
          onClick={() => {
            window.open("https://healthneutron.com/blogs/", '_blank');

          }}
        >
          <div className="rounded-lg">
            <img src="/Healthneutron Preventive Journey.jpg" alt="Blog Image" />
          </div>
          <div className="mx-auto bg-[#62276a] text-white rounded-sm md:mt-[-120px] mt-2 md:shadow-lg md:px-3 px-10 md:text-sm md:py-1 py-2 hover:cursor-pointer hover:bg-[#f7ca00] hover:text-[#62276a] md:mb-0 mb-10">
            Read Blog
          </div>
        </div> */}
      </div>
      {/* <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 1
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 2
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 3
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 4
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div> */}
    </div>
  );
}

export default CardSetOne;
