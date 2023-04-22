import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { useRouter } from "next/router";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const Menus = [
    { title: "Labs", src: "labs" },
    { title: "Home Care", src: "Chat" },
    { title: "Vaccines", src: "User"},
    { title: "Blogs", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];

  function handleNavigation(title) {
    if (title === "Labs") {
      router.push("/labs");
    } else if (title === "Home Care") {
      router.push("/homecare");
    } else if (title === "Vaccines") {
      router.push("/vaccines");
    } else if (title === "Blogs") {
      router.push("/blogs");
    }
  }

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60  h-[50%]" : "w-8"
        } bg-dark-purple h-[5px] relative duration-300`}
      >
        <div className="flex flex-row space-x-8" onClick={handleOpen}>
          <GoThreeBars
            className={`absolute cursor-pointer w-7 border-dark-purple mt-[1.5px]
            ${!open && "rotate-180"}`}
            color="white"
          />
          <div className="text-white cursor-pointer text-sm">All</div>
        </div>
        {/* <img
          src="../public/control.png"
          className={`absolute cursor-pointer w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          {/* <img
            src="../public/control.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <span className={`${!open && "hidden"} origin-left duration-200`} onClick={() => {
                handleNavigation(Menu.title)
              }
              }>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};

export default SideNav;
