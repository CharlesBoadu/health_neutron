import React from "react";

function FeaturedCategoriesMain() {
  return (
    <div className="hidden sm:block">
      <div className="font-montserrat md:text-4xl text-2xl font-extrabold md:p-10 p-10 mb-[15px] bg-white">
        Featured Categories
      </div>
      <div className="flex flex-row items-center justify-center">
        <div
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            // handleSort("Hepatitis");
            console.log("I have been clicked");
          }}
        >
          <div>
            <img src="/hypertension.jpg" alt="HEP B Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hepatitis B
          </div>
        </div>
        <div
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
        //   onClick={() => {
        //     handleSort("Hypertension");
        //   }}
        >
          <div>
            <img src="/hypertension.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hypertension
          </div>
        </div>
        <div
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
        //   onClick={() => {
        //     handleSort("Diabetes");
        //   }}
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
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
          onClick={() => {
            // handleSort("Hepatitis");
            console.log("I have been clicked");
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
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
        //   onClick={() => {
        //     handleSort("Hypertension");
        //   }}
        >
          <div>
            <img src="/coronavirus-vaccine-composition-lab.jpg" alt="Hypertension Image" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Covid 19
          </div>
        </div>
        <div
          className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
        //   onClick={() => {
        //     handleSort("Diabetes");
        //   }}
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
