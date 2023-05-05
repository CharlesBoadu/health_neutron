import React from "react";
import { useRouter } from "next/router";

function VaccinesSmallCards() {
  const router = useRouter();
  
  function handleNavigationToVaccines() {
    router.push("/vaccines");
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center md:space-x-3 space-x-10 py-2 z-1 hover:cursor-pointer" onClick={handleNavigationToVaccines}>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[300px] h-[180px] bg-gray-300">
            <img src="/HBV.jpg" alt="Lab Image 1" className="object-cover h-full w-full"/>
          </div>
          <div className="md:text-sm text-2xl text-gray-600">HBV Vaccine</div>
        </div>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[300px] h-[180px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 2" className="object-cover h-full w-full"/>
          </div>
          <div className="md:text-sm text-2xl text-gray-600">Vaccine Service</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center md:space-x-3 space-x-10 py-2 hover:cursor-pointer" onClick={handleNavigationToVaccines}>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[300px] h-[180px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 3" className="object-cover h-full w-full"/>
          </div>
          <div className="md:text-sm text-2xl text-gray-600">Vaccine 3</div>
        </div>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[300px] h-[180px] bg-gray-300">
            <img src="/vaccine_services.jpg" alt="Lab Image 4" className="object-cover h-full w-full"/>
          </div>
          <div className="md:text-sm text-2xl text-gray-600">Vaccine 4</div>
        </div>
      </div>
    </>
  );
}

export default VaccinesSmallCards;
