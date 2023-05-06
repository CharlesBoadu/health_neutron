import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function TopNavThird() {
  return (
    <div className="md:w-full py-3 bg-white flex justify-end font-montserrat space-x-10 pr-5 w-screen md:p-4 p-8">
      <div className="flex flex-col">
        <div className="md:text-lg text-3xl font-extrabold text-gray-600">
          Convenient . Customer centric . Confidential
        </div>
        <div className="md:text-sm text-2xl">
          eliminating & preventing the causes of underlying health conditions
        </div>
      </div>
      <div className="flex flex-row d:mt-2 mt-3 md:space-x-2 space-x-4">
        <div>
            <BsFillTelephoneFill color="#7d018c" size={20} className="md:h-[20px] w-[20px] h-[40px] w-[40px]"/>
        </div>
        <div className="md:text-base text-3xl">
        +233 59 236 0072
        </div>
      </div>
    </div>
  );
}

export default TopNavThird;
