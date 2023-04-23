import React from "react";
import CheckOut from "./CheckOut";
import { AiOutlineDelete } from "react-icons/ai";

function CartList({ data }) {
    console.log("Cart data", data);
   const  { name, image, quantity, price } = data;
  return (
    <>
      <div className="flex flex-row bg-gray-200 w-[900px] h-[200px] mx-auto m-4">
        <div className="flex w-[200px] h-full">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="flex-1 w-[600px] flex flex-row m-4 mt-10 border-t-2 border-gray-400">
          <div className="flex-1 space-y-10">
            <div>Details of Item Goes here...</div>
            <div className="flex flex-row space-x-10">
                <div className="bg-white shadow-xs px-2 rounded-lg w-[100px] py-1">Quantity: {quantity}</div>
                <div><AiOutlineDelete size={20} color="red" className="mt-1 cursor-pointer"/></div>
            </div>
          </div>
          <div className="flex mt-[-30px]">
            Price
            {/* <div className="bg-[#ffd814] hover:bg-[#fa8900] cursor-pointer w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center"
            onClick={addItemsToCart}
            >
              Add to Cart
            </div> */}
            {/* <div className="bg-[#fa8900] hover:bg-[#ffd814] w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center">
              Buy Now
            </div> */}
          </div>
        </div>
    </div>
    </>
  );
}

export default CartList;
