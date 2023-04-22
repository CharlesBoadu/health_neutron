import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import LabCards from '../components/LabCards'
import TopNavSecond from "../components/TopNavSecond"
import FooterSecond from '../components/FooterSecond'

function labs() {
  const [cart, setCart] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);


  return (
    <>
    <TopNav cart={cart}  setIsShowCart={setIsShowCart}/>
    <TopNavSecond />
    <div>
      <div className='w-contain h-[40vh] m-4 bg-black flex items-center justify-center'>
        <span className='font-montserrat text-4xl text-white'>Welcome to Lab Section</span>
      </div>
      <LabCards />
    </div>
    <Footer />
    <FooterSecond />
    </>
  )
}

export default labs