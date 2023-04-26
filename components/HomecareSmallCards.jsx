import React from "react";

function HomecareSmallCards() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-3 py-2 z-1">
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300">
            <img src="/homecare_services.jpg" alt="Lab Image 1" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Home Care</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300">
            <img src="/homecare_services.jpg" alt="Lab Image 2" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Home Care</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-3 py-2">
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300">
            <img src="/homecare_services.jpg" alt="Lab Image 3" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Home Care</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300">
            <img src="/homecare_services.jpg" alt="Lab Image 4" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Home Care</div>
        </div>
      </div>
    </>
  );
}

export default HomecareSmallCards;
