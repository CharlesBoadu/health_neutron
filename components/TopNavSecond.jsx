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
    <div className="bg-gray-600 py-3 font-montserrat flex flex-row space-x-8 p-2">
      <div onClick={handleOpenSideNav}>
        <div className="flex flex-row space-x-8">
          <div>
            <GoThreeBars
                className="absolute cursor-pointer w-7 border-dark-purple mt-[1.5px]"
                color="white"
              />
          </div>
          <div className="text-white cursor-pointer text-sm">
            All
          </div>
        </div>
        {showSideNav && (
          <SideNavTwo showSideNav={showSideNav}/>
        )}
      </div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToHome}>Home</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToLabs}>Labs</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToHomeCare}>Home Care</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToVaccines}>Vaccines</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToBlogs}>Blogs</div>
    </div>
  );
}

export default TopNavSecond;
