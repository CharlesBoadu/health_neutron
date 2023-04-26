import React from "react";
import { AiFillCar } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function SupportServices() {
  return (
    <div className="flex flex-row justify-evenly py-8 bg-[#e3e6e6] font-montserrat text-sm">
      <div className="flex flex-row w-[380px] space-x-3">
        <div>
            <BiSupport color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-xl font-bold">SUPPORT</div>
          <div className="text-sm">Contact us on +233 59 236 0072, +233 50 399 2309</div>
        </div>
      </div>
      <div className="flex flex-row w-[380px] space-x-3">
        <div>
            <AiFillCar color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-xl font-bold">CONVENIENT LAB SERVICES</div>
          <div className="text-sm">We collect samples in the comfort of your home or office</div>
        </div>
      </div>
      <div className="flex flex-row w-[380px] space-x-3">
      <div>
        <RiSecurePaymentFill color="7d018c" size={50}/>
      </div>
        <div className="flex flex-col space-y-1">
          <div className="text-xl font-bold">SECURE PAYMENT</div>
          <div className="text-sm">We ensure secure payment with online payment services</div>
        </div>
      </div>
    </div>
  );
}

export default SupportServices;
