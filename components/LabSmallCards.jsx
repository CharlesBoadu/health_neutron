import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function LabSmallCards() {
  const router = useRouter();

  function handleNavigationToLabs() {
    router.push("/labs");
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center md:space-x-3 space-x-10 py-2 z-1 hover:cursor-pointer" onClick={handleNavigationToLabs}>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[380px] h-[250px] bg-gray-300">
            <img
              src="/HN-MOM&DAD(STA).jpg"
              alt="Lab Image 1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-4xl text-gray-600 flex flex-col">
            <div>Honor your Mom</div>
            <div>{"&"} Dad (Standard)</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[380px] h-[250px] bg-gray-300">
            <img
              src="/PCR -Covid19.png"
              alt="Lab Image 2"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-4xl text-gray-600">Covid - Express</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center md:space-x-3 space-x-10 py-2 hover:cursor-pointer" onClick={handleNavigationToLabs}>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[380px] h-[250px] bg-gray-300">
            <img
              src="/Covid - Standard.png"
              alt="Lab Image 3"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-4xl text-gray-600">Covid - Standard</div>
        </div>
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[380px] h-[250px] bg-gray-300">
            <img
              src="/HN-MOM&DAD{PREM.).jpg"
              alt="Lab Image 4"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-4xl text-gray-600">
            <div>Honor your Mom</div>
            <div>{"&"} Dad (Premium)</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabSmallCards;
