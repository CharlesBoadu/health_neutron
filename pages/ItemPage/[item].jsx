import React, {useState, useEffect } from "react";
import TopNav from "../../components/TopNav";
import TopNavSecond from "../../components/TopNavSecond";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import FooterSecond from "../../components/FooterSecond";

function Item() {
  const [isShowCart, setIsShowCart] = useState(false);
  const router = useRouter();
  const [itemName, setItemName] = useState("");
  const [cart, setCart] = useState([]);

  //Handle Add to Cart
  function handleAddToCart (product) {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      //Firt
      return [...prev, { ...product, amount: 1 }];
    });
  };

  //Handle Remove from cart
  function handleRemoveFromCart (id) {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  useEffect(() => {
    const { query, query1 } = router;
    console.log(query);
    setItemName(query.item);
  }, [itemName]);

  return (
    <>
      <TopNav cart={cart} setIsShowCart={setIsShowCart}/>
      <TopNavSecond />
      <div className="flex flex-row bg-gray-200 w-[900px] h-[200px] mx-auto m-4 items-center justify-center">
        <div className="flex w-[300px] h-full">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="flex-1 w-[600px] space-y-3">
          <div>
            Details of {itemName}
          </div>
          <div className="space-y-1 text-xs">
            <div className="bg-[#ffd814] hover:bg-[#fa8900] cursor-pointer w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center"
            onClick={() =>{
              handleAddToCart(itemName)
            }}
            >
              Add to Cart
            </div>
            <div className="bg-[#fa8900] hover:bg-[#ffd814] w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center">
              Buy Now
            </div>
          </div>
        </div>
        {isShowCart && (
          <CartSideNav
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleAddToCart={handleAddToCart}
            setIsShowCart={setIsShowCart}
          />
        )}
      </div>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default Item;
