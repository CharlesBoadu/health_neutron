import React, { useState, useEffect } from "react";
import CheckOut from "./CheckOut";
import { AiOutlineDelete } from "react-icons/ai";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import { useRouter } from "next/router";
import DescriptionComponent from "./DescriptionComponent";

function CartList({ data, totalPrice }) {
  const [updatedItem, setUpdatedItem] = useState("");
  const newData = Object.assign({}, data);
  const [deleteState, setDeleteState] = useState(true);
  const [newTotalPrice, setNewTotalPrice] = useState(totalPrice);

  const router = useRouter();

  function handleIncrease() {
    setUpdatedItem(newData);
    console.log("Greatest", updatedItem);
    updatedItem.quantity += 1;
    console.log("After", updatedItem);
    return setUpdatedItem(updatedItem);
  }

  function handleDecrease() {
    setUpdatedItem(newData);
    console.log("Decrease Greatest", updatedItem);
    updatedItem.quantity -= 1;
    console.log("After Decrease", updatedItem);
    return setUpdatedItem(updatedItem);
  }

  function handleDelete() {
    setDeleteState(false);
    const nowPrice = newTotalPrice - updatedItem.price;
    setNewTotalPrice(nowPrice);
    setTimeout(() => {
      router.push({
        pathname: "/cart",
        query: { newTotalPrice: newTotalPrice },
      });
    }, 2000);
  }

  console.log("New Price Outside Delete", newTotalPrice);

  useEffect(() => {
    setUpdatedItem(newData);
  }, []);

  return (
    <>
      {deleteState && (
        <div className="flex md:flex-row flex-col md:w-[96%] w-[90%] h-contain mx-auto m-4 font-montserrat md:ml-5 md:pb-[5%] md:mr-5 mb-10">
          <div className="flex-1 md:w-[50%] h-[50%] w-full">
            <img src={data?.image_url} alt="cart Image" />
          </div>
          <div className="md:w-[65%] bg-gray-200 flex md:flex-row flex-col md:mr-4 md:mb-4 md:ml-4 border-gray-400 px-6 py-3">
            <div className="flex-1 md:space-y-10 space-y-5">
              <div className="space-y-1">
                <div className="flex flex-row justify-between space-x-8">
                  <div className="md:text-xl text-lg mb-[2%]">{data?.bundle_name}</div>
                  <div className="font-extrabold text-2xl text-red-500">₵{data.price}</div>
                </div>
                <div className="border-t-2 border-black/40"></div>
                <div className="text-xs pt-[2%]">
                  <DescriptionComponent description={data?.description}/>  
                </div>
              </div>
              {/* <div className="block md:hidden">
                <div className="flex flex-row justify-between">
                  <div className="mt-1">Price</div>
                  <div className="font-extrabold text-lg">₵{data?.price}</div>
                </div>
              </div> */}
              <div className="flex flex-row md:space-x-10 md:justify-start justify-between">
                <div className="flex flex-row space-x-2">
                  {/* <div className="bg-white w-contain px-2 py-1 rounded-sm cursor-pointer shadow-sm"
                onClick={handleIncrease}
                >
                  <GrAdd size={15}/>
                </div> */}
                  {/* <div className="bg-white shadow-xs text-sm px-2 rounded-lg w-[100px] py-1">
                    Quantity: {"1"}
                  </div> */}
                  {/* <div className="bg-white w-contain px-2 py-1 rounded-sm cursor-pointer shadow-sm"
                onClick={handleDecrease}
                >
                  <GrFormSubtract size={15}/>
                </div> */}
                </div>
                {/* <div
                  className="flex flex-row md:space-x-2 space-x-1 cursor-pointer"
                  onClick={handleDelete}
                >
                  <div className="hidden sm:block">
                    <AiOutlineDelete size={25} color="red" className="mt-1 " />
                  </div>
                  <div className="text-sm md:mt-1 mt-2">Delete</div>
                  <div className="block md:hidden">
                    <AiOutlineDelete size={25} color="red" className="mt-1 " />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartList;
