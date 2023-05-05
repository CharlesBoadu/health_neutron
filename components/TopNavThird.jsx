import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function TopNavThird() {
  return (
    <div className="md:w-full py-3 bg-white flex justify-end font-montserrat space-x-10 pr-5 w-[1000px]">
      <div className="flex flex-col">
        <div className="md:text-lg text-2xl font-extrabold text-gray-600">
          Convenient . Customer centric . Confidential
        </div>
        <div className="md:text-sm text-lg">
          eliminating & preventing the causes of underlying health conditions
        </div>
      </div>
      <div className="flex flex-row d:mt-2 mt-3 space-x-2">
        <div>
            <BsFillTelephoneFill color="#7d018c" size={20}/>
        </div>
        <div className="md:text-base text-lg">
        +233 59 236 0072
        </div>
      </div>
    </div>
  );
}

export default TopNavThird;
