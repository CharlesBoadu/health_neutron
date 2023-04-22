import React from "react";

function SmallCards() {
  return (
    <>
    <div className="ml-10 text-lg font-montserrat font-bold">Heading 1</div>
      <div className="flex flex-row justify-center items-center space-x-3 py-2">
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300"></div>
          <div className="text-sm text-gray-300">Item 1</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300"></div>
          <div className="text-sm text-gray-300">Item 2</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-3 py-2">
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300"></div>
          <div className="text-sm text-gray-300">Item 3</div>
        </div>
        <div className="flex flex-col">
          <div className="w-[100px] h-[100px] bg-gray-300"></div>
          <div className="text-sm text-gray-300">Item 4</div>
        </div>
      </div>
    </>
  );
}

export default SmallCards;
