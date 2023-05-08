import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxArrowTopLeft } from "react-icons/rx";
import { useRouter } from "next/router";
import { cartState } from "../atoms/cartState";
import { useRecoilState } from "recoil";


function ShoppingCartControls({ controlState }) {
  const router = useRouter();
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const newCartList = Object.assign({}, cartItem);

  function handleContinueShopping() {
    router.push("/");
  }

  function handleClearCart () {
    window.location.reload();
  }


  return (
    <>
      {controlState && (
        <div className="flex flex-row justify-between md:w-[500px]">
          <div
            className="flex flex-row mb-2 space-x-2 font-montserrat items-center justify-center hover:cursor-pointer shadow-xl w-[250px] text-[#7d018c] ml-5 rounded-lg py-2 px-2 hover:bg-[#7d018c] hover:text-white"
            onClick={handleContinueShopping}
          >
            <div>
              <RxArrowTopLeft
                color="#ffd814"
                size={25}
                className="hover:text-[#ffd814]"
              />
            </div>
            <div className="font-medium md:text-base text-sm">Continue Shopping</div>
          </div>
          <div className="flex flex-row mb-2 md:space-x-2 font-montserrat items-center justify-center hover:cursor-pointer shadow-xl w-[250px] text-[#7d018c] md:ml-5 mr-5 rounded-lg py-2 px-2 hover:bg-[#7d018c] hover:text-white"
          onClick={handleClearCart}
          >
            <div className="md:font-medium md:text-base text-sm">Clear Shopping Cart</div>
            <div>
              <MdOutlineDeleteOutline
                color="#ffd814"
                size={25}
                className="hover:text-[#ffd814]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCartControls;
