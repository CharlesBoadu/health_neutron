import React from "react";
import { useRouter } from "next/router";

const items = [
  {
    id: 1,
    name: "HBV Vaccine",
    price: "₵10.00",
    src: "https://picsum.photos/200/300",
  },
];

function VaccineCards() {
  const router = useRouter();

  function HandleBooking() {
    const { id, name, price } = item;
    router.push({
      pathname: `/ItemPage/${id}`,
      query: `${id}`,
      // state: { name, price },
    });
  }

  return (
    <div>
      <div
        //   key={index}
        className="bg-white w-[250px] h-[400px] cursor-pointer ml-10 font-montserrat"
      >
        <img src="/HBV.jpg" alt="Vaccines Image" />
        <div className="space-y-1">
          {items.map((item, index) => {
            return (
              <>
                <div className="text-center">{item.name}</div>
                <div key={index} className="text-center">
                  {item.price}
                </div>
              </>
            );
          })}
          <div
            className="bg-[#7d018c] mx-auto w-[70px] rounded-xl text-white py-1 text-center mt-2 "
            onClick={HandleBooking}
          >
            Book
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaccineCards;
