import React, { useState, useEffect } from "react";
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
  const [searchSelect, setSearchSelect] = useState("");
  const [sorted, setSorted] = useState("");

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
    return setSearchSelect(e.target.value);
  }

  useEffect(() => {
    console.log("Current search value: ", searchSelect)
  }, [searchSelect])

  function handleSearch () {
    useEffect(() => {
      const sortedFetch = async () => {
        try {
          const response = await fetch("", {
            headers: {
              Method: "GET",
              mode: "cors",
              Accept: "application/json",
              Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTc4MjRjYjU4NTYxYTczZTAxMDRlMzVkNTI1MjM5ODY0MmJlMzgwMDAzYjM4ZGVlNGE5MjE0MGVjNWE5MWEzNzM5ZjIzMDA0N2U5NWYwNWEiLCJpYXQiOjE2ODMwMjMwNTguOTE2MTg1LCJuYmYiOjE2ODMwMjMwNTguOTE2MTg5LCJleHAiOjE3MTQ2NDU0NTguODkzNTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZLi9YhRFQ9KGzNJ9RJVLO5Am19tPxlJY0Q_tLNY9TvERxc4lpy5ok3zWDZnpK9Qb_pqqdcjfz0vBM3xUYgM-ITq9GpHtHEmfjDBmD90LH23ydOGwF9WljZM_RaNobubRkfF6wiIrnS3VSTJKtv6Qql3KUPfoAlYp18mx7yig3kvcCVJ9Nt11W5zBxVkWabTgFKhs_Qc-XqM2_5tU5O0yDsOxTKwKOBfCLCPI6peDPkiF2nLYsWNSGc1Jsaj6QnDZ0WB_boX-7l3ZgEFgF8zJSH3QQAXTmQQpqfjBHSSEOVcNFFCJfJLt8n_dBUEf6Y-opmnaVED92147loTNO7VNuzBZjbMHf8vI5nB-exRBTH80VN9NAGFHxA85RS4kK6kFHmlaBfYbHwZFWftfk3bHwXVdKfa3vGT8TLoQQO3dskDVT8Om53ScrR3RFg0Fu-i5pJoE0Np2MJuPDKQ5L-mITAHymN0aAe6dWRXiN3B7-Wc0qYGDkM3zFL95ekNdkPffgcG8wApTSsZhsyYy1kx-b1SI__IWqyPBd5NpHsrEM5ZRApFniVyJ-u8C_jQ4vwDHw61MHEUMZVpeXutWuvkGSt9NZM2VMSNDr1StCGasMODOnflhQdlXS0oHOAsmA4HjUPH7Cr0JhwvXBOgCdOl_vc2IkOVpYBQ83tKedW5FrTA"
            },
          });
          const fetchResponse = await response.json();
          setSorted(fetchResponse);
        } catch (error) {
          console.log(error);
        }
      }

      sortedFetch();
    }, [])
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
        <div className="flex w-[50px] z-0  px-2 mr-[-62px] rounded-sm justify-center items-center cursor-pointer"
        onClick={handleSelect}
        >
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
          <input type="text" className="lg:w-[700px] lg:w-[200px] rounded-lg z-2 pl-[110px] text-sm py-[10px] focus:border-[#7d018c] focus:ring-[#7d018c]" placeholder="Search HealthNeutron"/>
        </div>
        <div className="flex w-[50px] bg-[#f3a847] ml-[-50px] justify-center items-center cursor-pointer"
        onClick={handleSearch}
        >
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
