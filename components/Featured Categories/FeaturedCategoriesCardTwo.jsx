import React from "react";

function FeaturedCategoriesCardTwo() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="md:w-[50%] w-full rounded-lg bg-gray-200 shadow-xl hover:cursor-pointer"
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
      <div className="md:h-[30vh] md:w-[350px] w-[280px] h-[20vh] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
      onClick={() => {
        handleSort("Hypertension");
      }}
      >
        <div>
          <img src="/hypertension.jpg" alt="Hypertension Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Hypertension
        </div>
      </div>
      <div className="md:h-[30vh] md:w-[350px] w-[280px] h-[20vh] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl hover:cursor-pointer"
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

export default FeaturedCategoriesCardTwo;
