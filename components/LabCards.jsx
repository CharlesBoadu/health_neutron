import React from "react";
import { useRouter } from "next/router";
import CartSideNav from "./CartSideNav";

function LabCards() {
  const router = useRouter();

  function handleNavigateToItem(item) {
    router.push({
      pathname: `/ItemPage/${item}`,
      query: `${item}`,
    });
  }

  const items = [
    {
      name: "Item1",
      src: "https://picsum.photos/200/300",
    },
    {
      name: "Item2",
      src: "https://picsum.photos/200/300",
    },
    {
      name: "Item3",
      src: "https://picsum.photos/200/300",
    },
    {
      name: "Item4",
      src: "https://picsum.photos/200/300",
    },
    {
      name: "Item5",
      src: "https://picsum.photos/200/300",
    },
  ];

  return (
    <>
      <div className="flex flex-row m-4 space-x-10 justify-center items-center">
        {items.map((item, index) => {
          // console.log("Hello", item.name);
          return (
            <div
              key={index}
              className="bg-white w-[200px] h-[350px] cursor-pointer"
              onClick={() => {
                handleNavigateToItem(item.name);
              }}
            >
              <img src={item.src} alt="Lab Image" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LabCards;
