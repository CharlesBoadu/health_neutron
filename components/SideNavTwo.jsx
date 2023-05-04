import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";

const Menus = [
  { title: "Hepatitis B" },
  { title: "Hypertension" },
  { title: "Diabetes" },
  { title: "Comprehensive Lab" },
];

function SideNavTwo() {
  const router = useRouter();
  const [showSubLabs, setShowSubLabs] = useState(false);

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
    router.push("https://healthneutron.com/blogs/", undefined, {
      target: "_blank",
    });
  }

  function handleShowSideLabs() {
    setShowSubLabs(true);
  }

  function handleSort(name) {
    router.push({
      pathname: `/Sorted/${name}`,
      query: {name: `${name}`},
    });
  }

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10 overflow-hidden">
      <div className="bg-white w-[250px] h-full absolute left-0 animate-in slide-in-from-left-72">
        <h1 className="bg-[#7d018c] py-2 text-left pl-10 text-white">All</h1>
        <div className="text-left flex flex-col space-y-4 ml-10 py-4">
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onClick={handleNavigateToHome}
          >
            <div className="">Home</div>
            <div className="">
              <AiOutlineRight size={20} />
            </div>
          </div>
          <div
            className="flex flex-row justify-between w-[150px] cursor-pointer hover:bg-[#7d018c] hover:text-white py-2 p-2 hover:rounded-lg"
            onMouseEnter={handleShowSideLabs}
            onClick={handleNavigateToLabs}
          >
            <div className="">Labs</div>
            <div className="">
              <AiOutlineRight size={20} />
            </div>
          </div>
          {showSubLabs && (
            <div className="flex">
              <div
                className={` ${
                  open ? "w-60" : "w-8"
                } bg-dark-purple h-full relative duration-300 pl-4`}
              >
                <ul
                  className=" space-y-2"
                  onMouseLeave={() => {
                    setShowSubLabs(false);
                  }}
                >
                  {Menus.map((Menu, index) => (
                    <li
                      key={index}
                      className={`flex rounded-md cursor-pointer hover:bg-light-white text-black text-sm items-center 
                       ${
                         Menu.gap
                           ? ""
                           : "hover:bg-[#7d018c] hover:text-white py-1 px-1 w-[150px] hover:rounded-lg"
                       } ${index === 0 && "bg-light-white"} `}
                    >
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                        onClick={() => {
                          handleSort(Menu.title);
                        }}
                      >
                        <div className="flex flex-row justify-between space-x-4">
                          <div>{Menu.title}</div>
                          <div className="mt-1">
                            <AiOutlineRight />
                          </div>
                        </div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
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
