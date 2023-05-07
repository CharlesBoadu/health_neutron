import React from "react";
import { useRouter } from "next/router";

function FeaturedCategoriesCardTwo() {

  const router = useRouter();

  function handleSort(name) {
    router.push({
      pathname: `/Sorted/${name}`,
      query: {name: `${name}`},
    });
  }

  return (
    <div className="flex items-center justify-center w-full h-full ml-[200px] space-x-10 mr-[200px]">
      <div
        className="h-[40vh] w-[350px] w-full rounded-lg bg-gray-200 shadow-xl hover:cursor-pointer"
        onClick={() => {
          handleSort("Hepatitis");
        }}
      >
        <div>
          <img src="/comprehensive_labs.jpg" alt="HEP B Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Comprehensive Labs
        </div>
      </div>
      <div className="h-[40vh] w-[350px] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
      onClick={() => {
        handleSort("comprehensive_labs");
      }}
      >
        <div>
          <img src="/coronavirus-vaccine-composition-lab.jpg" alt="Hypertension Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Covid 19
        </div>
      </div>
      <div className="h-[40vh] w-[350px] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
      onClick={() => {
        handleSort("covid19");
      }}
      >
        <div>
          <img src="/nurse-examining-senior-man-bed-bedroom.jpg" alt="Diabetes Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Homecare
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategoriesCardTwo;
