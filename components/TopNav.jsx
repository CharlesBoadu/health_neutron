import React, { useState, useEffect } from "react";
import { bearerToken } from "../bearerToken";
import { BsCart4 } from "react-icons/bs";
import { FiSearch, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
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

  function HandleNavigateToLinkedIn() {
    router.push("https://linkedin.com/healthneutron");
  }

  function handleSelect(e) {
    return setSearchSelect(e.target.value);
  }

  useEffect(() => {
    console.log("Current search value: ", searchSelect);
  }, [searchSelect]);

  function handleSearch() {
    useEffect(() => {
      const sortedFetch = async () => {
        try {
          const response = await fetch("", {
            headers: {
              Method: "GET",
              mode: "cors",
              Accept: "application/json",
              Authorization:
              `Bearer ${bearerToken.token}`,
            },
          });
          const fetchResponse = await response.json();
          setSorted(fetchResponse);
        } catch (error) {
          console.log(error);
        }
      };

      sortedFetch();
    }, []);
  }
  return (
    <div className="bg-[#7d018c] md:py-2 py-2 flex md:flex-row md:w-full space-x-4 font-montserrat px-2">
      <div
        className="flex md:w-[300px] w-[150px] text-white pl-2 cursor-pointer"
        onClick={handleNavigationToHome}
      >
        <img
          src="/logo_white.png"
          alt="Logo"
          width={200}
          className="md:w-[200px] w-50"
        />
      </div>
      <div className="flex-1 md:w-[600px] flex md:flex-row w-full">
        <div
          className="md:flex md:w-[50px] md:z-0  md:px-2 md:mr-[-62px] md:rounded-sm md:justify-center md:items-center md:cursor-pointer hidden sm:block"
          onClick={handleSelect}
        >
          <select
            className="font-semibold text-sm block md:w-[150px] w-[70px] md:pr-8 pr-2 py-[9px] bg-[#e3e6e6] border border-gray-200 active:border-gray-300 outline-none rounded-sm cursor-pointer"
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
        <div className="w-full">
          <div className="block md:hidden flex flex-row">
            <input
              type="text"
              className="w-full rounded-lg z-1 text-xs focus:border-[#7d018c] focus:ring-[#7d018c] pr-6 truncate"
              placeholder="Search HealthNeutron"
            />
            <div className="ml-[-12%] mt-[8px]">
              <FiSearch color="#777a76"/>
            </div>
          </div>
          <input
            type="text"
            className="md:w-[95%] w-full rounded-lg z-2 md:pl-[110px] md:text-sm text-xs md:py-[10px] focus:border-[#7d018c] focus:ring-[#7d018c] hidden sm:block"
            placeholder="Search HealthNeutron"
          />
        </div>
        <div
          className="md:flex md:w-[50px] bg-[#f3a847] md:ml-[-8%] md:justify-center md:items-center md:cursor-pointer hidden sm:block"
          onClick={handleSearch}
        >
          <FiSearch size={25} className="md:w-[25px] w-[20px]" />
        </div>
      </div>
      <div className="md:flex md:flex-row md:mt-3 md:space-x-4 md:w-[150px] hidden sm:block">
        <div className="cursor-pointer" onClick={HandleNavigateToFacebook}>
          <FiFacebook size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToTwitter}>
          <FiTwitter size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToInstagram}>
          <FiInstagram size={18} color="white" />
        </div>
        <div className="cursor-pointer" onClick={HandleNavigateToLinkedIn}>
          <FiLinkedin size={18} color="white" />
        </div>
      </div>
      <div
        className="md:flex md:flex-row md:w-[100px] md:text-white md:cursor-pointer hidden sm:block"
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
