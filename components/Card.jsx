import React from "react";
import LabSmallCards from "./LabSmallCards";
import HomecareSmallCards from "./HomecareSmallCards";
import VaccinesSmallCards from "./VaccinesSmallCards";
import { useRouter } from "next/router";
import CarouselSecond from "./CarouselSecond";

function Card() {
  const router = useRouter();

  function handleNavigationToLabs () {
    router.push("/labs");
  }
  
  function handleNavigationToHomeCare () {
    router.push("/homecare");
  }

  function handleNavigationToVaccines () {
    router.push("/vaccines");
  }
  
  return (
    <>
      {/* <CarouselSecond /> */}
      <div className="md:flex md:flex-row items-center justify-evenly pt-[90px] z-1 flex flex-col md:space-y-0 space-y-28">
        <div className="bg-white md:w-[400px] md:h-[380px] w-[900px] h-[860px]">
          <div className="ml-10 md:text-lg text-5xl font-montserrat font-bold md:mt-2 mt-4 md:mb-0 mb-4">Labs</div>
          <LabSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer md:text-base text-4xl" onClick={handleNavigationToLabs}>See more</p>
        </div>
        <div className="bg-white md:w-[400px] md:h-[380px] w-[900px] h-[800px]">
        <div className="ml-10 md:text-lg text-5xl font-montserrat font-bold md:mt-2 mt-4 md:mb-0 mb-4">Home Care</div>
          <HomecareSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer md:text-base text-4xl md:mt-0 mt-4" onClick={handleNavigationToHomeCare}>See more</p>
        </div>
        <div className="bg-white md:w-[400px] md:h-[380px] w-[900px] h-[800px]">
        <div className="ml-10 md:text-lg text-5xl font-montserrat font-bold md:mt-2 mt-4 md:mb-0 mb-4">Vaccines</div>
          <VaccinesSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer md:text-base text-4xl md:mt-0 mt-4" onClick={handleNavigationToVaccines}>See more</p>
        </div>
        {/* <div className="bg-white w-[300px] h-[380px]"></div> */}
      </div>
    </>
  );
}

export default Card;
