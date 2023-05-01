import React, { useState } from "react";
import Image from "next/Image";
import MobilePayment from "./MobilePayment";
import CardPayment from "./CardPayment";
import vaccine_services from "../public/vaccine_services.jpg";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Payment() {
  const [selectedHeading, setSelectedHeading] = useState(1);
  const [name, setName] = useState("Mobile Payment");
  const [mobilePayment, setMobilePayment] = useState(true);
  const [cardPayment, setCardPayment] = useState(false);
  const [payment, setPayment] = useState(true);
  const [imgSrc, setImgSrc] = useState("");

  const togglePayment = (select) => {
    if (select === "mobile") {
      setMobilePayment(true);
      setName("Mobile Payment");
      setCardPayment(false);
    } else if (select === "card") {
      setCardPayment(true);
      setName("Card Payment");
      setMobilePayment(false);
    }
    setPayment(!payment);
  };

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
  };

  return (
    <div className="flex justify-center mx-auto items-center font-montserrat w-1/2">
      <div className="flex-1 text-black flex items-center justify-center flex-col bg-[#7d018c] py-10 rounded-md">
        <div className="rounded-2xl relative h-[30vh] w-3/4 mb-4 flex justify-center text-center object-contain">
          <Image
            alt="AddUser form image"
            src={vaccine_services}
            fill
            className="object-cover rounded-2xl h-full w-full"
          />
        </div>
        <h1 className="text-2xl pd-2 text-white font-montserrat font-medium flex justify-center text-center h-full w-full">
          {name}
        </h1>
        <div className="border-b-2 border-white w-3/4 mx-auto mt-3 text-sm pb-4">
          <div className="flex flex-row justify-between">
            <div className="text-white">Convenience Fee</div>
            <div className="font-bold text-[#ffd814]">Price</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white">Discount</div>
            <div className="font-bold text-[#ffd814]">Price</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white">Total</div>
            <div className="font-bold text-[#ffd814]">Price</div>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between space-x-10">
            <div className="text-sm">
                <div className="text-white">Got questions, contact</div>
                <div className="text-[#ffd814]">+233 59 236 0072</div>
            </div>
            <div className="my-auto">
                <AiOutlineQuestionCircle color="white" size={30}/>
            </div>
        </div>
      </div>
      <div className="flex-1 m-5">
        <h2 className="font-bold text-xl">Select Payment method</h2>
        <div className="flex flex-row space-x-8 mt-4 hover:cursor-pointer">
          <div
            onClick={() => {
              togglePayment("mobile");
              handleHeadingClick(1);
            }}
            className={`text-base font-semibold ${
              selectedHeading === 1
                ? "text-[#7d018c] border-b-2 border-b-[#7d018c]"
                : ""
            }`}
          >
            Mobile Payment
          </div>
          <div
            onClick={() => {
              togglePayment("card");
              handleHeadingClick(2);
            }}
            className={`text-base font-semibold ${
              selectedHeading === 2
                ? "text-[#7d018c] border-b-2 border-b-[#7d018c]"
                : ""
            }`}
          >
            Card Payment
          </div>
        </div>
        {mobilePayment && <MobilePayment />}
        {cardPayment && <CardPayment />}
        {/* {payment ? <MobilePayment /> : <CardPayment />} */}
      </div>
    </div>
  );
}

export default Payment;
