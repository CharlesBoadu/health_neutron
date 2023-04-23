import React from "react";
import CheckOut from "./CheckOut";
import { AiOutlineDelete } from "react-icons/ai";

function CartList({ data }) {
  console.log("Cart data", data);
//   const { name, image, quantity, price } = data;
  return (
    <>
      <div className="flex flex-row bg-gray-200 w-[900px] h-[250px] mx-auto m-4 font-montserrat">
        <div className="flex w-[200px] h-full">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="flex-1 w-[600px] flex flex-row m-4 mt-10 border-t-2 border-gray-400">
          <div className="flex-1 space-y-10">
            <div className="space-y-1">
              <div className="text-xl">{data.name}</div>
              <div className="text-xs">{data.details}</div>
            </div>
            <div className="flex flex-row space-x-10">
              <div className="bg-white shadow-xs text-sm px-2 rounded-lg w-[100px] py-1">
                Quantity: {data.quantity}
              </div>
              <div className="flex flex-row space-x-2 cursor-pointer">
                <div>
                    <AiOutlineDelete
                    size={25}
                    color="red"
                    className="mt-1 "
                    />
                </div>
                <div className="text-sm mt-1">
                    Delete
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-[-30px] space-y-3">
              <div>Price</div>
              <div className="font-extrabold text-2xl">₵ {data.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
