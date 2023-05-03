import React, { useState } from "react";
import CheckOutFormModal from "./CheckOutFormModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckOut({ totalPrice }) {
  const [isOpened, setIsOpened] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  }

  return (
    <>
    <ToastContainer />
      <CheckOutFormModal 
      visible={isOpened}
      closeModal={closeModal}
      amount={totalPrice}
      />
      <div className="bg-gray-200 space-y-4 w-[300px] h-[300px] p-4 flex item-center justify-center flex-col font-montserrat mt-4 mb-10 mr-10">
        <div className="flex flex-row space-x-2">
          <div className="text-lg mt-1">SubTotal:</div>
          <div className="text-2xl font-bold">₵{totalPrice}</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-xl mt-1">Grand Total:</div>
          <div className="text-3xl font-bold">₵{totalPrice}</div>
        </div>
        <div className="bg-[#f7ca00] w-[260px] py-2 cursor-pointer hover:bg-[#ffd814] text-center rounded-lg text-sm"
        onClick={() => {
          totalPrice === 0 ? toast.error("Cart is empty") : openModal();
          }
        }
        >
          Procced To CheckOut
        </div>
      </div>
    </>
  );
}

export default CheckOut;
