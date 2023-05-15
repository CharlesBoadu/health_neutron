import React from "react";
import { useRouter } from "next/router";

function FeaturedCategoriesMain() {

  const router = useRouter();

  function handleSort(name) {
    router.push({
      pathname: `/Sorted/${name}`,
      query: {name: `${name}`},
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
            handleSort("Hepatitis");
            console.log("Hepatitis");
          }}
        >
          <div>
            <img src="/Hepatitis-B-Test-(HBsAg).jpg" alt="HEP B Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hepatitis B
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort("Hypertension");
            console.log("Hypertension");
          }}
        >
          <div>
            <img src="/hypertension.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hypertension
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort("Diabetes");
            console.log("Diabetes");
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
            handleSort("comprehensive_labs");
            console.log("Comprehensive Labs");
          }}
        >
          <div>
            <img src="/comprehensive_labs.jpg" alt="HEP B Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Comprehensive Labs
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort("covid_19");
            console.log("covid");
          }}
        >
          <div>
            <img src="/coronavirus-vaccine-composition-lab.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Covid 19
          </div>
        </div>
        <div
          className="w-[50vh] h-[40vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            handleSort("homecare");
            console.log("Homecare");
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
    </div>
  );
}

export default FeaturedCategoriesMain;
