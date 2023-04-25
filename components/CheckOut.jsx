import React from "react";

function CheckOut({ totalPrice }) {
  return (
    <div className="bg-gray-300 space-y-4 w-[300px] h-[300px] p-4 flex item-center justify-center flex-col font-montserrat mr-10 mt-4 mb-10">
      <div className="flex flex-row space-x-2">
        <div className="text-lg mt-1">SubTotal:</div> 
        <div className="text-2xl font-bold">₵ {totalPrice}.00</div> 
      </div>
      <div className="flex flex-row space-x-2">
        <div className="text-xl mt-1">Grand Total:</div> 
        <div className="text-3xl font-bold">₵ {totalPrice}.00</div> 
      </div>
      <div className="bg-[#f7ca00] w-[260px] py-2 cursor-pointer hover:bg-[#ffd814] text-center rounded-lg text-sm">
        Procced To CheckOut
      </div>
    </div>
  );
}

export default CheckOut;
