import React from "react";

function LabSmallCards() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-3 py-2 z-1">
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/hepatitis_b.jpg" alt="Lab Image 1" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Hepatitis B</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/psa_gtslvq.jpg" alt="Lab Image 2" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">PSA</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-3 py-2">
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/random-blood-sugar_rnnl38.jpg" alt="Lab Image 3" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Blood Sugar</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[150px] h-[100px] bg-gray-300">
            <img src="/renal (kidney).jpg" alt="Lab Image 4" className="object-cover h-full w-full"/>
          </div>
          <div className="text-sm text-gray-600">Renal Kidney</div>
        </div>
      </div>
    </>
  );
}

export default LabSmallCards;
