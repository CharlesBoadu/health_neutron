import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FiSearch, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

const Options = [
  {
    list: "Labs",
  },
  {
    list: "Home Care",
  },
  {
    list: "Vaccines",
  },
  {
    list: "Blogs",
  },
];

function TopNav() {
  const router = useRouter();
  const [cartItem] = useRecoilState(cartState);
  const [searchValue, setSearchValue] = useState({
    search: "",
  });

  function handleNavigateToCart() {
    router.push("/cart");
  }

  function handleNavigationToHome() {
    router.push("/");
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

  function handleSelect(e) {
    console.log("I have been selected", e.target.value);
    // if (e.target.value === 'Labs') {
    //   router.push("/labs");
    // } else if (e.target.value === 'Home Care') {
    //   router.push("/homecare");
    // } else if (e.target.value === 'Vaccines') {
    //   router.push("/vaccines");
    // } else if (e.target.value === 'Blogs') {
    //   router.push("/blogs");
    // }
  }

  return (
    <div className="bg-[#7d018c] py-2 flex flex-row w-full space-x-4 font-montserrat px-2">
      <div
        className="flex w-[300px] text-white pl-2 cursor-pointer"
        onClick={handleNavigationToHome}
      >
        <img src="/logo_white.png" alt="Logo" width={200} />
      </div>
      <div className="flex-1 w-[600px] flex flex-row">
        <div className="flex w-[50px] z-10  px-2 mr-[-62px] rounded-sm justify-center items-center cursor-pointer">
          {/* <div>All</div>
          <div>
             <IoMdArrowDropdown />
          </div> */}
          <select
            className="font-semibold text-sm block w-[150px] pr-8 py-[9px] bg-[#e3e6e6] border border-gray-200 active:border-gray-300 outline-none rounded-sm cursor-pointer"
            //   required={true}
            onChange={(e) => {
              setSearchValue({
                ...searchValue,
                search: e.target.value,
              });
            }}
            placeholder="All"
          >
            <option className="">All</option>
            {Options.map((em, i) => (
              <option
                key={i}
                className="font-montserrat text-sm select option:select{py-3}"
              >
                {em.list}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input type="text" className="lg:w-[700px] lg:w-[200px] rounded-lg z-2 pl-[110px] text-sm py-[10px]" placeholder="Search HealthNeutron"/>
        </div>
        <div className="flex w-[50px] bg-[#f3a847] ml-[-50px] justify-center items-center cursor-pointer">
          <FiSearch size={25} />
        </div>
      </div>
      <div className="flex flex-row mt-3 space-x-4 w-[150px]">
        <div className="cursor-pointer" onClick={HandleNavigateToFacebook}>
          <FiFacebook size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToTwitter}>
          <FiTwitter size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToInstagram}>
          <FiInstagram size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToPinterest}>
          <FaPinterest size={18} color="white" />
        </div>
      </div>
      <div
        className="flex flex-row w-[100px] text-white cursor-pointer"
        onClick={handleNavigateToCart}
      >
        <div>
          <div className="font-montserrat font-bold ml-4 mb-[-12px] mt-[-5px] text-[#fa8900]">
            {cartItem.length}
          </div>
          <div>
            <BsCart4 size={35} />
          </div>
        </div>
        <div className="mt-4">cart</div>
      </div>
    </div>
  );
}

export default TopNav;
