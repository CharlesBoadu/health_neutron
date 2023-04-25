import React from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";

function SideNavTwo() {
  const router = useRouter();

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
    router.push("/blogs");
  }

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10 overflow-hidden">
      <div className="bg-white w-[250px] h-full absolute left-0 overflow-y-scroll animate-fade-in">
        <h1 className="bg-[#7d018c] py-2 text-left pl-10 text-white">All</h1>
        <div className="text-left flex flex-col space-y-4 ml-10 py-4">
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onClick={handleNavigateToLabs}
          >
            <div className="">Labs</div>
            <div className="">
              <AiOutlineRight size={20} />
            </div>
          </div>
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onClick={handleNavigateToHomeCare}
          >
            <div className="">Home Care</div>
            <div className="r">
              <AiOutlineRight size={20} />
            </div>
          </div>
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onClick={handleNavigateToVaccines}
          >
            <div className="">Vaccines</div>
            <div className="">
              <AiOutlineRight size={20} />
            </div>
          </div>
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onClick={handleNavigateToBlogs}
          >
            <div className="">Blogs</div>
            <div className="">
              <AiOutlineRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavTwo;
