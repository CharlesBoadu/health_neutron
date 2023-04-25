import React from "react";
import SmallCards from "./SmallCards";
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
      <div className="flex flex-row space-x-6 items-center justify-center pt-[90px] z-1">
        <div className="bg-white w-[300px] h-[380px]">
          <div className="ml-10 text-lg font-montserrat font-bold mt-2">Labs</div>
          <SmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToLabs}>See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
        <div className="ml-10 text-lg font-montserrat font-bold mt-2">Home Care</div>

          <SmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToHomeCare}>See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
        <div className="ml-10 text-lg font-montserrat font-bold mt-2">Vaccines</div>

          <SmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToVaccines}>See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]"></div>
      </div>
    </>
  );
}

export default Card;
