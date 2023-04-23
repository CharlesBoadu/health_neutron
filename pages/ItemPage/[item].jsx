import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav";
import TopNavSecond from "../../components/TopNavSecond";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import FooterSecond from "../../components/FooterSecond";
import { cartState } from "../../atoms/CartState";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";

function Item() {
  const router = useRouter();
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [itemId, setItemId] = useState("");
  // const { state } = useLocation();
  // const { name, price } = state;
  // console.log("Heya", name);
  const items = [
    {
      id: 1,
      name: "Item1",
      quantity: 0,
      details:
        "This lab package includes, Lipid profile (Cholesterol), Fasting blood sugar, Cardiac enzymes and Hepatitis B",
      price: "10.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Item2",
      quantity: 0,
      details:
        "Lipids are fat and fat-like substance found in the body. A cholesterol test, also called a lipid profile, measures the fats in the blood. The measurements can help determine the risk of having a heart attack or other heart disease.",
      price: "15.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Item3",
      quantity: 0,
      details:
        "RANDOM FASTING SUGAR A blood test done to evaluate the level of glucose in blood at any point of time in a day.",
      price: "20.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Item4",
      quantity: 0,
      details:
        "Take advantage of the December/Football season discount and book now!!! Millions of people are likely to die from kidney failure when left untreated.",
      price: "25.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Item5",
      quantity: 0,
      details:
        "A Pap smear, also called a Pap test, is a procedure to test for cervical cancer in women. Detecting cervical cancer early with a Pap smear gives you a greater chance at a cure. A Pap smear can also detect changes in your cervical cells that suggest cancer may develop in the future",
      price: "30.00",
      src: "https://picsum.photos/200/300",
    },
  ];

  //Adding items to Cart
  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === itemId) === -1) {
      items[itemId - 1].quantity += 1;
      setCartItem((prevState) => [...prevState, items[itemId - 1]]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }

    toast(`${itemId} added to cart`);
  };

  //Handle Remove from cart
  // function handleRemoveFromCart (id) {
  //   setCart((prev) => {
  //     return prev.reduce((cal, item) => {
  //       if (item.id === id) {
  //         if (item.amount === 1) return cal;

  //         return [...cal, { ...item, amount: item.amount - 1 }];
  //       }

  //       return [...cal, { ...item }];
  //     }, []);
  //   });
  // };

  useEffect(() => {
    const { query } = router;
    // console.log("Hello", query);
    setItemId(query.item);
  }, [itemId]);

  // console.log("Heya", itemId)

  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div className="flex flex-row bg-gray-200 w-[900px] h-[200px] mx-auto m-4 items-center justify-center">
        <div className="flex w-[300px] h-full">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="flex-1 w-[600px] space-y-3">
          <div>Details of Item{itemId}</div>
          <div className="space-y-1 text-xs">
            <div
              className="bg-[#ffd814] hover:bg-[#fa8900] cursor-pointer w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center"
              onClick={addItemsToCart}
            >
              Add to Cart
            </div>
            <div className="bg-[#fa8900] hover:bg-[#ffd814] w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center">
              Buy Now
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default Item;
