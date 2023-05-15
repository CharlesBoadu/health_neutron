import React from "react";
import { AiFillCar } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function SupportServices() {
  return (
    <div className="flex md:flex-row flex-col md:justify-evenly md:space-y-0 items-center justify-center space-y-8 py-20 font-montserrat p-8">
      <div className="flex flex-row md:w-[380px] space-x-3">
        <div>
            <BiSupport color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col md:space-y-3 md:space-x-0 space-x-4">
          <div className="md:text-xl text-base  md:font-bold font-extrabold md:pl-0 pl-4">SUPPORT</div>
          <div className="text-base font-montserrat">Contact us on +233 59 236 0072, +233 50 399 2309</div>
        </div>
      </div>
      <div className="flex flex-row md:w-[380px] space-x-3">
        <div>
            <AiFillCar color="7d018c" size={50}/>
        </div>
        <div className="flex flex-col md:space-y-3 md:space-x-0 space-x-4">
          <div className="md:text-xl text-base  md:font-bold font-extrabold md:pl-0 pl-4">CONVENIENT LAB SERVICES</div>
          <div className="text-base font-montserrat">We collect samples in the comfort of your home or office</div>
        </div>
      </div>
      <div className="flex flex-row md:w-[380px] space-x-3">
      <div>
        <RiSecurePaymentFill color="7d018c" size={50}/>
      </div>
        <div className="flex flex-col md:space-y-3 md:space-x-0 space-x-4">
          <div className="md:text-xl text-base  md:font-bold font-extrabold md:pl-0 pl-4">SECURE PAYMENT</div>
          <div className="text-base font-montserrat">We ensure secure payment with online payment services</div>
        </div>
      </div>
    </div>
  );
}

export default SupportServices;
