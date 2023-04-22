import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Carousel from "../components/Carousel";
import CardSetOne from "../components/CardSetOne";
import TopNavSecond from "../components/TopNavSecond";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  
  return (
    <>
      <TopNav cart={cart}  setIsShowCart={setIsShowCart}/>
      <TopNavSecond />
      <Carousel />
      <CardSetOne />
      <Footer />
      <FooterSecond />
    </>
  );
}
