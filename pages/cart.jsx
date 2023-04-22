import React, { useState } from 'react'
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import FooterSecond from '../components/FooterSecond';

function cart() {
  const [cart, setCart] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <>
        <TopNav cart={cart} setIsShowCart={setIsShowCart}/>
        <div>cart</div>
        <Footer />
        <FooterSecond />
    </>
  )
}

export default cart