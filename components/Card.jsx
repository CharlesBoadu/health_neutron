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
      <div className="md:flex md:flex-row items-center justify-evenly pt-[90px] z-1 flex flex-col">
        <div className="bg-white md:w-[400px] md:h-[380px] w-[800px] h-[500px]">
          <div className="ml-10 text-lg font-montserrat font-bold mt-2">Labs</div>
          <LabSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToLabs}>See more</p>
        </div>
        <div className="bg-white md:w-[400px] md:h-[380px] w-[300px] h-[300px]">
        <div className="ml-10 text-lg font-montserrat font-bold mt-2">Home Care</div>
          <HomecareSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToHomeCare}>See more</p>
        </div>
        <div className="bg-white md:w-[400px] md:h-[380px] w-[300px] h-[300px]">
        <div className="ml-10 text-lg font-montserrat font-bold mt-2">Vaccines</div>
          <VaccinesSmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToVaccines}>See more</p>
        </div>
        {/* <div className="bg-white w-[300px] h-[380px]"></div> */}
      </div>
    </>
  );
}

export default Card;
