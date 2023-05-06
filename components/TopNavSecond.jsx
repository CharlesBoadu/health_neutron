import React, { useState } from "react";
import { useRouter } from "next/router";
import SideNavTwo from "./SideNavTwo";
import { GoThreeBars } from "react-icons/go";


function TopNavSecond() {
  const router = useRouter();
  const [showSideNav, setShowSideNav] = useState(false);

  function handleNavigateToHome () {
    router.push("/");
  }

  function handleNavigateToLabs () {
    router.push("/labs");
  }
  
  function handleNavigateToHomeCare () {
    router.push("/homecare");
  }
  
  function handleNavigateToVaccines () {
    router.push("/vaccines");
  }

  function handleNavigateToBlogs () {
    router.push("https://healthneutron.com/blogs/", undefined, { target: '_blank' });
  }

  function handleOpenSideNav () {
    setShowSideNav(!showSideNav);
  }

  return (
    <div className="bg-gray-600 py-6 font-montserrat md:w-full flex md:flex-row md:space-x-8 md:p-2 flex flex-col w-screen">
      <div onClick={handleOpenSideNav}>
        <div className="flex flex-row space-x-8">
          <div>
            <GoThreeBars
                className="absolute cursor-pointer md:w-7 w-10 border-dark-purple md:mt-[1.5px] mt-[-10px]"
                color="white"
              />
          </div>
          <div className="text-white cursor-pointer text-sm hidden sm:block">
            All
          </div>
        </div>
        {showSideNav && (
          <SideNavTwo showSideNav={showSideNav}/>
        )}
      </div>
      <div className="text-white cursor-pointer text-sm hidden sm:block" onClick={handleNavigateToHome}>Home</div>
      <div className="text-white cursor-pointer text-sm hidden sm:block" onClick={handleNavigateToLabs}>Labs</div>
      <div className="text-white cursor-pointer text-sm hidden sm:block" onClick={handleNavigateToHomeCare}>Home Care</div>
      <div className="text-white cursor-pointer text-sm hidden sm:block" onClick={handleNavigateToVaccines}>Vaccines</div>
      <div className="text-white cursor-pointer text-sm hidden sm:block" onClick={handleNavigateToBlogs}>Blogs</div>
    </div>
  );
}

export default TopNavSecond;
