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
      name: "HEPATITIS B PROFILE AND HBV VIRAL LOAD",
      price: "1480.00",
      src: "/hepatitis_b.jpg",
    },
    {
      id: 2,
      name: "RANDOM BLOOD SUGAR",
      price: "142.00",
      src: "/random-blood-sugar_rnnl38.jpg",
    },
    {
      id: 3,
      name: "PSA",
      price: "244.00",
      src: "/psa_gtslvq.jpg",
    },
    {
      id: 4,
      name: "RENAL KIDNEY PROFILE",
      price: "300.00",
      src: "/RENAL (KIDNEY).jpg",
    },
    {
      id: 5,
      name: "END OF YEAR FAMILY LIFE PACKAGE",
      price: "750.00",
      src: "/End of year.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-row m-8 space-x-10 justify-center items-center font-montserrat">
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
              <div className="space-y-1">
                <div className=" text-center text-base font-medium mt-2">
                  {item.name.toUpperCase()}
                </div>
                <div className="text-lg font-semibold text-center text-[#7d018c]">
                  ₵{item.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LabCards;
