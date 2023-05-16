import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import ShoppingCartControls from "../components/ShoppingCartControls";
import FooterSecond from "../components/FooterSecond";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartState";
import CartList from "../components/CartList";
import TopNavSecond from "../components/TopNavSecond";
import CheckOut from "../components/CheckOut";
import { RxArrowTopLeft } from "react-icons/rx";
import { useRouter } from "next/router";

function cart() {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [controlState, setControlState] = useState(false);
  const router = useRouter();

  const { newTotalPrice } = router.query;

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += parseFloat(item?.price)));
    return total;
  };

  function handleContinue () {
    router.push("/")
  }

  useEffect(() => {
    if (cartItem.length >= 1) {
      setControlState(true);
    } else {
      setControlState(false);
    }
  }, [])


  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div>
        <div className="w-contain md:h-[30vh] h-[30vh] md:m-4 bg-[#232f3e] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="font-montserrat md:text-4xl text-2xl text-white ">
            Shopping Cart
          </span>
        </div>
        <div className="flex md:flex-row flex-col font-montserrat">
          <div className="flex-1">
            {cartItem.length <= 0 ? (
              <div className="flex flex-col items-center justify-center md:mt-32 mt-16">
                <div className="text-center md:text-4xl text-2xl">
                    Your Cart Is Empty
                </div>
                <div className="flex items-center flex-row space-x-2 mt-3 cursor-pointer shadow-sm" onClick={handleContinue}>
                  <div>
                    <RxArrowTopLeft size={25} color="#7d018c"/>
                  </div>
                  <div className="text-[#7d018c]">
                    Continue shopping
                  </div>
                </div>
              </div>
            ) : (
              cartItem.map((item) => <CartList key={item.bundle_id} data={item} totalPrice={totalPrice}/>)
            )}
          </div>
          <div className="flex mx-auto">
            <CheckOut totalPrice={totalPrice()} />
          </div>
        </div>
      </div>
      <ShoppingCartControls controlState={controlState}/>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default cart;
