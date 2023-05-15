import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function FeaturedCategoriesMain() {
  const router = useRouter();

  function handleSort(id) {
    router.push({
      pathname: `/Sorted/${id}`,
      query: {id: `${id}`},
    });
  }

  return (
    <div className="hidden sm:block">
      <div className="font-montserrat text-4xl font-extrabold p-10 mb-[15px] bg-white">
        Featured Categories
      </div>
      <div className="flex flex-row items-center justify-center">
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(5);
          }}
        >
          <div>
            <img src="/HEPTest_New.jpg" alt="HEP B Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hepatitis B
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(6);
          }}
        >
          <div>
            <img src="/HypNew.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hypertension
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(7);
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
      <div className="flex flex-row items-center justify-center">
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(8);
          }}
        >
          <div>
            <img src="/CompLab.jpg" alt="HEP B Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Comprehensive Labs
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(9);
          }}
        >
          <div>
            <img src="/covidNew.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Covid 19
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort(10);
          }}
        >
          <div>
            <img src="/homeCare.jpg" alt="Diabetes Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Homecare
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategoriesMain;
