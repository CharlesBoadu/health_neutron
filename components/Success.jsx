import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { BsPhoneFlip } from "react-icons/bs";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();

  function handleNavigationToHome() {
    router.push("/");
  }

  const now = new Date();
  const options = { dateStyle: 'long' };
  const paymentDate = now.toLocaleDateString('en-US', options).replace(/\//g, '-');
  const paymentTime = now.toLocaleTimeString();

  return (
    <div className="flex justify-center items-center w-full h-[100vh] flex-row justify-evenly">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <IoMdCheckmarkCircleOutline size={100} color="#7d018c" />
        </div>
        <div className="font-montserrat text-2xl text-[#7d018c] font-bold text-center">
          Payment Complete!
        </div>
        <div className="font-montserrat text-lg mt-2 mb-2 text-sm flex text-center flex-col">
          <div>Your payment has been successful.</div>
          <div>Thank you for choosing Health Neutron!</div>
        </div>
        <div className="font-montserrat border-[#7d018c] border-b-2 font-semibold">Payment Details</div>
        <div>
            <table className="font-montserrat mt-4 text-sm mb-4">
                <tbody>
                    <tr>
                        <td>Item Purchased</td>
                        <td className="font-semibold">item</td>
                    </tr>
                    <tr>
                        <td>Amount Paid</td>
                        <td className="font-semibold">amount</td>
                    </tr>
                    <tr>
                        <td className="pr-20">Payment Date</td>
                        <td className="font-semibold">{paymentDate}</td>
                    </tr>
                    <tr>
                        <td className="">Payment Time</td>
                        <td className="font-semibold">{paymentTime}</td>
                    </tr>
                    <tr>
                        <td className="">Payment Code</td>
                        <td className="font-semibold">code</td>
                    </tr>
                    <tr>
                        <td className="">Payment Method</td>
                        <td className="font-semibold">Mobile Payment</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <div className="font-montserrat py-4 space-y-2">
          <div className="flex flex-row space-x-5">
            <div className="flex flex-row space-x-2">
              <GiMoneyStack color="#7d018c" size={20} />
              <div className="font-semibold text-sm">PAYMENT CODE: </div>
            </div>
            <div>{"amount"}</div>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="flex flex-row space-x-2">
              <BsPhoneFlip color="#7d018c" size={18} />
              <div className="font-semibold text-sm">PAYMENT DATE: </div>
            </div>
            <div>{"code"}</div>
          </div>
        </div> */}
        <div
          className="rounded-lg bg-[#7d018c] hover:cursor-pointer text-white w-contain px-4 py-2 shadow-lg font-montserrat mt-2"
          onClick={handleNavigationToHome}
        >
          Continue shopping
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-200 h-full w-[70vh] transform skew-y-12 shadow-lg rounded-lg">
        <img
          src="/card_payment.jpg"
          alt="successful payment Image"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Success;
