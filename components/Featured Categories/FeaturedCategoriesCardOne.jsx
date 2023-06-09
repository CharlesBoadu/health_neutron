import React from "react";
import { useRouter } from "next/router";

function FeaturedCategoriesCardOne() {
  const router = useRouter();

  function handleSort(name) {
    router.push({
      pathname: `/Sorted/${name}`,
      query: {name: `${name}`},
    });
  }

  return (
    <div className="flex items-center justify-center space-x-10">
      <div
        className="w-[50vh] h-[50vh] rounded-lg bg-gray-200 shadow-xl hover:cursor-pointer"
        onClick={() => {
          handleSort("Hepatitis");
        }}
      >
        <div>
          <img src="/Hepatitis-B-Test-(HBsAg).jpg" alt="HEP B Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Hepatitis B
        </div>
      </div>
      <div className="w-[50vh] h-[50vh] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
      onClick={() => {
        handleSort("Hypertension");
      }}
      >
        <div>
          <img src="/HEPTest_New.jpg" alt="Hypertension Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Hypertension
        </div>
      </div>
      <div className="w-[50vh] h-[50vh] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
      onClick={() => {
        handleSort("Diabetes");
      }}
      >
        <div>
          <img src="/diabetis.jpg" alt="Diabetes Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Diabetes
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategoriesCardOne;
