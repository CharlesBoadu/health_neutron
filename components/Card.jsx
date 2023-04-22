import React from "react";
import SmallCards from "./SmallCards";
import { useRouter } from "next/router";

function Card() {
  const router = useRouter();

  function handleNavigationToLabs () {
    router.push("/labs");
  }
  return (
    <>
      <div className="flex flex-row space-x-6 items-center justify-center pt-[90px]">
        <div className="bg-white w-[300px] h-[380px]">
          <div className="ml-10 text-lg font-montserrat font-bold">Labs</div>
          <SmallCards />
          <p className="text-blue-400 ml-10 cursor-pointer" onClick={handleNavigationToLabs}>See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
        <div className="ml-10 text-lg font-montserrat font-bold">Home Care</div>

          <SmallCards />
          <p className="text-blue-400 ml-10">See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
        <div className="ml-10 text-lg font-montserrat font-bold">Vaccines</div>

          <SmallCards />
          <p className="text-blue-400 ml-10">See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]"></div>
      </div>
    </>
  );
}

export default Card;
