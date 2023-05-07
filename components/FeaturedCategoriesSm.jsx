import React from "react";
import { useRouter } from "next/router";

function FeaturedCategoriesSm() {

    const router = useRouter();
  
    function handleSort(name) {
    router.push({
      pathname: `/Sorted/${name}`,
      query: { name: `${name}` },
    });
  }
  
  return (
    <div className="block md:hidden">
      <div className="font-montserrat md:text-4xl text-2xl font-extrabold md:p-10 md:pb-0 pb-5 md:mb-[15px] md:ml-0 ml-5 bg-white">
        Featured Categories
      </div>
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-[60px] md:space-x-4 mr-10 ml-10 animate-in slide-in-from-right-96 duration-750">
        <div
          className="md:w-[20%] md:h-[200px] w-full rounded-lg hover:cursor-pointer"
          onClick={() => {
            handleSort("Hepatitis");
          }}
        >
          <div>
            <img src="/Hepatitis-B-Test-(HBsAg).jpg" alt="HEP B Image"/>
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hepatitis B
          </div>
        </div>
        <div
          className="md:w-[20%] w-full rounded-lg shadow-sm hover:cursor-pointer"
          onClick={() => {
            handleSort("Hepatitis");
          }}
        >
          <div>
            <img
              src="/hypertension.jpg"
              alt="Hypertension"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Hypertension
          </div>
        </div>
        <div
          className="md:w-[20%] w-full rounded-lg hover:cursor-pointer"
          onClick={() => {
            handleSort("Hepatitis");
          }}
        >
          <div>
            <img src="/diabetis.jpg" alt="Diabetes" />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Diabetes
          </div>
        </div>
        <div
          className="md:w-[20%] w-full rounded-lg hover:cursor-pointer"
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
        <div
          className="md:w-[20%] w-full rounded-lg hover:cursor-pointer"
          onClick={() => {
            handleSort("Hepatitis");
          }}
        >
          <div>
            <img
              src="/coronavirus-vaccine-composition-lab.jpg"
              alt="HEP B Image"
            />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Covid 19
          </div>
        </div>
        <div
          className="md:w-[20%] w-full rounded-lg hover:cursor-pointer"
          onClick={() => {
            handleSort("Hepatitis");
          }}
        >
          <div>
            <img
              src="/nurse-examining-senior-man-bed-bedroom.jpg"
              alt="HEP B Image"
            />
          </div>
          <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
            Homecare
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategoriesSm;
