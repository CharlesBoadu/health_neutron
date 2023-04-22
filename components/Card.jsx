import React from "react";
import SmallCards from "./SmallCards";

function Card() {
  return (
    <>
      <div className="flex flex-row space-x-6 items-center justify-center pt-[90px]">
        <div className="bg-white w-[300px] h-[380px]">
          <SmallCards />
          <p className="text-blue-400 ml-10">See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
          <SmallCards />
          <p className="text-blue-400 ml-10">See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]">
          <SmallCards />
          <p className="text-blue-400 ml-10">See more</p>
        </div>
        <div className="bg-white w-[300px] h-[380px]"></div>
      </div>
    </>
  );
}

export default Card;
