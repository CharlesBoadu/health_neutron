import React from "react";
import SideNav from "./SideNav";
import { useRouter } from "next/router";


function TopNavSecond() {
  const router = useRouter();

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
    router.push("/blogs");
  }

  return (
    <div className="bg-gray-600 py-3 font-montserrat flex flex-row space-x-8 p-2">
      <div className="mr-4">
        <SideNav />
      </div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToLabs}>Labs</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToHomeCare}>Home Care</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToVaccines}>Vaccines</div>
      <div className="text-white cursor-pointer text-sm" onClick={handleNavigateToBlogs}>Blogs</div>
    </div>
  );
}

export default TopNavSecond;
