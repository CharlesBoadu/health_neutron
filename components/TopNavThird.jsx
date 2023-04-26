import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function TopNavThird() {
  return (
    <div className="w-full py-3 bg-white flex justify-end font-montserrat space-x-10 pr-5">
      <div className="flex flex-col">
        <div className="text-lg font-extrabold text-gray-600">
          Convenient . Customer centric . Confidential
        </div>
        <div className="text-sm">
          eliminating & preventing the causes of underlying health conditions
        </div>
      </div>
      <div className="flex flex-row mt-2 space-x-2">
        <div>
            <BsFillTelephoneFill color="#7d018c" size={20}/>
        </div>
        <div className="text-base">
        +233 59 236 0072
        </div>
      </div>
    </div>
  );
}

export default TopNavThird;
