import React from "react";

function VaccinesSmallCards() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-3 py-2 z-1">
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/HBV.jpg" alt="Lab Image 1" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">HBV Vaccine</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 2" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Vaccine Service</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-3 py-2">
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 3" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Vaccine 3</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 4" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Vaccine 4</div>
        </div>
      </div>
    </>
  );
}

export default VaccinesSmallCards;
