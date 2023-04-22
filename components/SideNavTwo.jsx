import React from "react";
import { useRouter } from "next/router";

function SideNavTwo() {
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
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10 overflow-hidden"
    >
      <div
        className="bg-white w-[250px] h-full absolute left-0 overflow-y-scroll animate-fade-in"
      >
        <h1 className="bg-black/90 py-2 text-left pl-10 text-white">All</h1>
        <div className="text-left flex flex-col space-y-4 ml-10 py-4">
          <span className="cursor-pointer" onClick={handleNavigateToLabs}>Labs</span>
          <span className="cursor-pointer" onClick={handleNavigateToHomeCare}>Home Care</span>
          <span className="cursor-pointer" onClick={handleNavigateToVaccines}>Vaccines</span>
          <span className="cursor-pointer" onClick={handleNavigateToBlogs}>Blogs</span>
        </div>
      </div>
    </div>
  );
}

export default SideNavTwo;
