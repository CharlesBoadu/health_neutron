import React from "react";
import { AiFillCar } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function SupportServices() {
  return (
    <div className="flex flex-row justify-evenly py-20 bg-[#e3e6e6] font-montserrat md:w-full w-[1000px]  p-4">
      <div className="flex flex-row w-[380px] space-x-3">
        <div>
            <BiSupport color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="md:text-xl text-2xl font-bold">SUPPORT</div>
          <div className="md:text-base text-xl">Contact us on +233 59 236 0072, +233 50 399 2309</div>
        </div>
      </div>
      <div className="flex flex-row w-[380px] space-x-3">
        <div>
            <AiFillCar color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="md:text-xl text-2xl font-bold">CONVENIENT LAB SERVICES</div>
          <div className="md:text-base text-xl">We collect samples in the comfort of your home or office</div>
        </div>
      </div>
      <div className="flex flex-row w-[380px] space-x-3">
      <div>
        <RiSecurePaymentFill color="7d018c" size={50}/>
      </div>
        <div className="flex flex-col space-y-3">
          <div className="md:text-xl text-2xl font-bold">SECURE PAYMENT</div>
          <div className="md:text-base text-xl">We ensure secure payment with online payment services</div>
        </div>
      </div>
    </div>
  );
}

export default SupportServices;
