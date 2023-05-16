import React, { useState } from "react";
import { useRouter } from "next/router";
import SideNavTwo from "./SideNavTwo";
import { GoThreeBars } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import { BsCart4 } from "react-icons/bs";

function TopNavSecond() {
  const router = useRouter();
  const [showSideNav, setShowSideNav] = useState(false);
  const [cartItem] = useRecoilState(cartState);

  function handleNavigateToCart() {
    router.push("/cart");
  }

  function handleNavigateToHome() {
    router.push("/");
  }

  function handleNavigateToLabs() {
    router.push("/labs");
  }

  function handleNavigateToHomeCare() {
    router.push("/homecare");
  }

  function handleNavigateToVaccines() {
    router.push("/vaccines");
  }

  function handleNavigateToBlogs() {
    window.open("https://healthneutron.com/blogs/", "_blank");
  }

  function handleOpenSideNav() {
    setShowSideNav(!showSideNav);
  }

  function HandleNavigateToFacebook() {
    router.push("https://web.facebook.com/healthneutron/?_rdc=2&_rdr");
  }

  function HandleNavigateToTwitter() {
    router.push("https://twitter.com/healthneutron");
  }

  function HandleNavigateToInstagram() {
    router.push(
      "https://www.instagram.com/accounts/login/?next=%2Fhealth_neutron%2F"
    );
  }

  function HandleNavigateToPinterest() {
    router.push("");
  }

  return (
    <div className="bg-gray-600 md:py-3 py-3 font-montserrat md:w-full flex md:flex-row md:space-x-8 md:p-2 flex flex-col">
      <div onClick={handleOpenSideNav}>
        <div className="flex flex-row space-x-8">
          <div>
            <GoThreeBars
              className="hidden sm:block absolute cursor-pointer w-7 border-dark-purple mt-[1.5px]"
              color="white"
            />
            <GoThreeBars
              className="block md:hidden absolute cursor-pointer w-10 border-dark-purple mt-[1px] ml-2"
              color="white"
              size={35}
            />
          </div>
          <div className="text-white cursor-pointer text-sm hidden sm:block">
            All
          </div>
        </div>
        {showSideNav && <SideNavTwo showSideNav={showSideNav} />}
      </div>
      <div
        className="text-white cursor-pointer text-sm hidden sm:block"
        onClick={handleNavigateToHome}
      >
        Home
      </div>
      <div
        className="text-white cursor-pointer text-sm hidden sm:block"
        onClick={handleNavigateToLabs}
      >
        Labs
      </div>
      <div
        className="text-white cursor-pointer text-sm hidden sm:block"
        onClick={handleNavigateToHomeCare}
      >
        Home Care
      </div>
      <div
        className="text-white cursor-pointer text-sm hidden sm:block"
        onClick={handleNavigateToVaccines}
      >
        Vaccines
      </div>
      <div
        className="text-white cursor-pointer text-sm hidden sm:block"
        onClick={handleNavigateToBlogs}
      >
        Blogs
      </div>
      {/* <div className="block md:hidden flex flex-row-reverse space-x-3">
        <div className="cursor-pointer" onClick={HandleNavigateToFacebook}>
          <FiFacebook size={15} color="white" className="ml-2 mr-2"/>
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToTwitter}>
          <FiTwitter size={15} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToInstagram}>
          <FiInstagram size={15} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToPinterest}>
          <FaPinterest size={15} color="white" />
        </div>
      </div> */}
      <div
        className="block md:hidden flex flex-row-reverse text-white"
        onClick={handleNavigateToCart}
      >
        <div>
          <div className="font-montserrat font-bold ml-3 mr-2 mb-[-8px] mt-[-15px] text-[#fa8900]">
            {cartItem.length}
          </div>
          <div>
            <BsCart4 size={35} className="mr-2" />
          </div>
        </div>
        {/* <div className="mt-4">cart</div> */}
      </div>
      <div className="md:w-full md:py-1 md:text-white md:flex-1 md:flex md:justify-end md:font-montserrat md:space-x-10 md:space-x-8 md:pr-5 md:p-4 hidden sm:block">
        <div className="flex flex-col md:mt-0 mt-4">
          <div className="md:text-sm text-xs text-white">
            Convenient . Customer centric . Confidential
          </div>
          {/* <div className="md:text-sm text-xs">
            eliminating & preventing the causes of underlying health conditions
          </div> */}
        </div>
        <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2">
          <div>
            <BsFillTelephoneFill
              color="white"
              size={20}
              className=""
            />
          </div>
          <div className="md:text-sm text-xs ">+233 59 236 0072</div>
        </div>
      </div>
    </div>
  );
}

export default TopNavSecond;
