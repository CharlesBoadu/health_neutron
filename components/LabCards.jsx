import React from "react";
import { useRouter } from "next/router";
import CartSideNav from "./CartSideNav";

function LabCards() {
  const router = useRouter();

  function handleNavigateToItem(item) {
    const { id, name, price } = item;
    router.push({
      pathname: `/ItemPage/${id}`,
      query: `${id}`,
      // state: { name, price },
    });
  }

  const items = [
    {
      id: 1,
      name: "Item1",
      price: "10.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Item2",
      price: "15.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Item3",
      price: "20.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Item4",
      price: "25.00",
      src: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Item5",
      price: "30.00",
      src: "https://picsum.photos/200/300",
    },
  ];

  return (
    <>
      <div className="flex flex-row m-4 space-x-10 justify-center items-center">
        {items.map((item, index) => {
          // console.log("Hello", item.id);
          return (
            <div
              key={index}
              className="bg-white w-[200px] h-[350px] cursor-pointer"
              onClick={() => {
                handleNavigateToItem(item);
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
