import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import CartList from "../components/CartList";
import TopNavSecond from "../components/TopNavSecond";
import CheckOut from "../components/CheckOut";

function cart() {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div>
        <div className="w-contain h-[30vh] m-4 bg-black flex items-center justify-center">
          <span className="font-montserrat text-4xl text-white">
            Shopping Cart
          </span>
        </div>
        <div className="flex flex-row">
          <div className="flex-1">
            {cartItem.length <= 0 ? (
              <h1 className="text-center text-4xl m-32">Your Cart Is Empty</h1>
            ) : (
              cartItem.map((item) => <CartList key={item.id} data={item} />)
            )}
          </div>
          <div className="flex">
              <CheckOut />
          </div>
        </div>
        {cartItem.length > 0 && (
          <div className="mx-auto mt-4">
            <h2 className="text-center text-3xl font-bold">
              Total: ${totalPrice()}
            </h2>
            {/* <button
              className="text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800"
              onClick={createCheckoutSession}
            >
              Checkout
            </button> */}
          </div>
        )}
        {/* <div className="flex flex-row bg-gray-200 w-[90%] h-[200px] mx-auto m-4">
          <div className="flex w-[300px] h-full">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="flex-1 w-[600px] flex flex-row justify-between m-4 p-4">
            <div className="flex flex-col space-y-4">
              <span>Delete</span>
              <span>Add</span>
              <span>Subtract</span>
            </div>
            <div className="mr-4 space-y-4">
              <div>
                <div>Price</div> 
                <div>Price of Item goes here</div> 
              </div>
              <div>
                <div>Quantity</div>
                <div>Quantity of Item goes here...</div>
              </div>
            </div>
          </div>
        </div> */}
      {/* <div>
        <CheckOut />
      </div> */}
      </div>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default cart;
