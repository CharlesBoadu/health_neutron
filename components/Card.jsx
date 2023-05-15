import React from "react";
import LabSmallCards from "./LabSmallCards";
import HomecareSmallCards from "./HomecareSmallCards";
import VaccinesSmallCards from "./VaccinesSmallCards";
import { useRouter } from "next/router";
import CarouselSecond from "./CarouselSecond";

function Card() {
  const router = useRouter();

  function handleNavigationToLabs() {
    router.push("/labs");
  }

  function handleNavigationToHomeCare() {
    router.push("/homecare");
  }

  function handleNavigationToVaccines() {
    router.push("/vaccines");
  }

  return (
    <>
      {/* <CarouselSecond /> */}
      <div className="md:flex md:flex-row items-center justify-evenly pt-[90px] z-1 flex flex-col md:space-y-0 space-y-28">
        <div className="bg-white shadow-lg w-full md:h-[380px] h-[315px] mr-10 ml-10">
          <div className="md:ml-7 ml-5 text-lg md:font-montserrat font-bold">
            Labs
          </div>
          <LabSmallCards />
          <p
            className="text-blue-400 md:ml-7 ml-5 cursor-pointer text-base md:font-montserrat"
            onClick={handleNavigationToLabs}
          >
            See more
          </p>
        </div>
        <div className="bg-white shadow-lg w-full md:h-[380px] h-[300px] mr-10 ml-10">
          <div className="md:ml-7 ml-5 text-lg md:font-montserrat font-bold md:mt-2 mt-4">
            Home Care
          </div>
          <HomecareSmallCards />
          <p
            className="text-blue-400 md:ml-7 ml-5 cursor-pointer text-base md:font-montserrat"
            onClick={handleNavigationToHomeCare}
          >
            See more
          </p>
        </div>
        <div className="bg-white shadow-lg w-full md:h-[380px] h-[300px] mr-10 ml-10">
          <div className="md:ml-7 ml-5 text-lg md:font-montserrat font-bold md:mt-2 mt-4">
            Vaccines
          </div>
          <VaccinesSmallCards />
          <p
            className="text-blue-400 md:ml-7 ml-5 cursor-pointer text-base md:font-montserrat"
            onClick={handleNavigationToVaccines}
          >
            See more
          </p>
        </div>
        {/* <div className="bg-white w-[300px] h-[380px]"></div> */}
      </div>
    </>
  );
}

export default Card;
