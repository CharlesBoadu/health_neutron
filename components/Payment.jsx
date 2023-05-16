import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/Image";
import MobilePayment from "./MobilePayment";
import CardPayment from "./CardPayment";
import paymentImage from "../public/payment.jpg";
import mobile_payment from "../public/6134225.jpg";
import card_payment from "../public/card_payment.jpg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { cartState } from "../atoms/cartState";
import { useRecoilState, useRecoilValue } from "recoil";


function Payment() {
  const [selectedHeading, setSelectedHeading] = useState(1);
  const [titleName, setTitleName] = useState("Mobile Payment");
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [mobilePayment, setMobilePayment] = useState(true);
  const [cardPayment, setCardPayment] = useState(false);
  const [payment, setPayment] = useState(true);
  const [imgSrc, setImgSrc] = useState("");
  const router = useRouter();

  const { name, contact, token, request_id } = router.query;

  const returnTotal = () => {
    let total = 0;
    cartItem.map((item, index) => {
      total += parseFloat(item.price);
    })

    return total;
  }
  console.log("Hell0", cartItem);
  console.log("Total Price", returnTotal());

  const togglePayment = (select) => {
    if (select === "mobile") {
      setMobilePayment(true);
      setTitleName("Mobile Payment");
      setImgSrc(mobile_payment);
      setCardPayment(false);
    } else if (select === "card") {
      setCardPayment(true);
      setTitleName("Card Payment");
      setImgSrc(card_payment);
      setMobilePayment(false);
    }
    setPayment(!payment);
  };

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
  };

  return (
    <div className="flex justify-center mx-auto items-center font-montserrat md:w-1/2 my-auto md:flex-row flex-col">
      <h2 className="font-bold text-xl mb-2 block md:hidden">
        Select Payment method
      </h2>
      <div className="flex flex-row space-x-8 mt-2 mb-4 hover:cursor-pointer block md:hidden">
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
      <div className="flex-1 text-black flex items-center justify-center flex-col bg-[#7d018c] w-[90%] py-10 rounded-md">
        <div className="mb-4">
          <img
            src="/logo_white.png"
            alt="Logo"
            width={200}
            className="md:w-[200px] w-50"
          />
        </div>
        <div className="rounded-2xl relative md:h-[30vh] h-[20vh] w-3/4 mb-4 flex justify-center text-center object-contain">
          <Image
            alt="Payment Image"
            src={payment ? paymentImage : imgSrc}
            fill
            className="object-cover rounded-2xl h-full w-full"
          />
        </div>
        <h1 className="md:text-2xl text-lg pd-2 text-white font-montserrat font-medium flex justify-center text-center h-full w-full">
          {titleName}
        </h1>
        <div className="border-b-2 border-white w-3/4 mx-auto mt-3 text-sm pb-4">
          <div className="flex flex-row justify-between">
            <div className="text-white">Convenience Fee</div>
            <div className="font-medium text-[#ffd814]">₵{returnTotal()}.00</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white">Charges</div>
            <div className="font-medium text-[#ffd814]">0%</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white">Total</div>
            <div className="font-bold text-[#ffd814]">₵{returnTotal()}.00</div>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between space-x-10">
          <div className="text-sm">
            <div className="text-white">Got questions, contact</div>
            <div className="text-[#ffd814]">+233 59 236 0072</div>
          </div>
          <div className="my-auto">
            <AiOutlineQuestionCircle color="white" size={30} />
          </div>
        </div>
      </div>
      <div className="flex-1 m-5 w-[80%]">
        <h2 className="font-bold text-xl hidden sm:block">
          Select Payment method
        </h2>
        <div className="md:flex md:flex-row md:space-x-8 md:mt-4 md:hover:cursor-pointer hidden sm:block">
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
        {mobilePayment && (
          <MobilePayment
            name={name}
            contact={contact}
            amount={returnTotal()}
            token={token}
            request_id={request_id}
          />
        )}
        {cardPayment && <CardPayment name={name} amount={returnTotal()} />}
        {/* {payment ? <MobilePayment /> : <CardPayment />} */}
      </div>
    </div>
  );
}

export default Payment;
