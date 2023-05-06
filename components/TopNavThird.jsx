import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function TopNavThird() {
  return (
    <div className="w-full py-3 bg-white flex justify-end font-montserrat md:space-x-10 space-x-8 md:pr-5 p-4">
      <div className="flex flex-col md:mt-0 mt-4">
        <div className="md:text-xl text-xs font-extrabold text-gray-600">
          Convenient . Customer centric . Confidential
        </div>
        <div className="md:text-base text-xs">
          eliminating & preventing the causes of underlying health conditions
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-2 md:space-x-2 md:space-y-0 space-y-2">
        <div>
            <BsFillTelephoneFill color="#7d018c" size={20} className="md:mt-1"/>
        </div>
        <div className="md:text-lg text-xs">
        +233 59 236 0072
        </div>
      </div>
    </div>
  );
}

export default TopNavThird;
