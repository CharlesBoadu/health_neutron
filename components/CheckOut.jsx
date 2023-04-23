import React from "react";

function CheckOut({ totalPrice }) {
  return (
    <div className="bg-gray-300 space-y-4 w-[300px] h-[300px] p-4 flex item-center justify-center flex-col font-montserrat mr-10">
      <div className="text-xl font-bold">SubTotal: {totalPrice}</div>
      <div className="bg-[#f7ca00] w-[200px] py-2 cursor-pointer hover:bg-[#ffd814] text-center rounded-lg text-sm">
        Procced To CheckOut
      </div>
    </div>
  );
}

export default CheckOut;
