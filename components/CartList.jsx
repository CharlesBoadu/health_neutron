import React, { useState, useEffect } from "react";
import CheckOut from "./CheckOut";
import { AiOutlineDelete } from "react-icons/ai";
import { GrAdd, GrFormSubtract } from "react-icons/gr";

function CartList({ data, totalPrice }) {
  const [updatedItem, setUpdatedItem] = useState("");
  const newData = Object.assign({}, data);
  const [deleteState, setDeleteState] = useState(true);
  const [newTotalPrice, setNewTotalPrice] = useState(totalPrice);
  

  function handleIncrease () {
    setUpdatedItem(newData);
    console.log("Greatest", updatedItem);
    updatedItem.quantity += 1;
    console.log("After", updatedItem);
    return setUpdatedItem(updatedItem);
  }

  
  function handleDecrease () {
    setUpdatedItem(newData);
    console.log("Decrease Greatest", updatedItem);
    updatedItem.quantity -= 1;
    console.log("After Decrease", updatedItem);
    return setUpdatedItem(updatedItem);
  }
  
  function handleDelete () {
    setDeleteState(false);
    const nowPrice = newTotalPrice - updatedItem.price;
    return setNewTotalPrice(nowPrice);
  }
  
  console.log("New Price Outside Delete", newTotalPrice);
  
  useEffect(() => {
    setUpdatedItem(newData);
  }, [])

  // console.log("hi", newUpdatedItem);
  console.log("Heya", updatedItem);

  return (
    <>
    {deleteState && (
      <div className="flex flex-row bg-gray-200 w-[950px] lg:w-1200 h-contain mx-auto m-4 font-montserrat ml-5 mr-5 mb-10">
        <div className="flex-1 w-[200px]">
          <img src={data.src} alt="" />
        </div>
        <div className="flex w-[600px] flex flex-row m-4 mt-10 border-t-2 border-gray-400">
          <div className="flex-1 space-y-10">
            <div className="space-y-1">
              <div className="text-xl">{data.name}</div>
              <div className="text-xs">{data.details}</div>
            </div>
            <div className="flex flex-row space-x-10">
              <div className="flex flex-row space-x-2">
                <div className="bg-white w-contain px-2 py-1 rounded-sm cursor-pointer shadow-sm"
                onClick={handleIncrease}
                >
                  <GrAdd size={15}/>
                </div>
                <div className="bg-white shadow-xs text-sm px-2 rounded-lg w-[100px] py-1">
                  Quantity: {updatedItem.quantity}
                </div>
                <div className="bg-white w-contain px-2 py-1 rounded-sm cursor-pointer shadow-sm"
                onClick={handleDecrease}
                >
                  <GrFormSubtract size={15}/>
                </div>
              </div>
              <div className="flex flex-row space-x-2 cursor-pointer"
              onClick={handleDelete}
              >
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
    )}
    </>
  );
}

export default CartList;
