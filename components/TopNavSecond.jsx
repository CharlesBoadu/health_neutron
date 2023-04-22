import React from "react";
import SideNav from "./SideNav";

function TopNavSecond() {
  return (
    <div className="bg-gray-600 py-5 font-montserrat flex flex-row space-x-8 p-2">
      <div className="mr-4">
        <SideNav />
      </div>
      <div className="text-white">Labs</div>
      <div className="text-white">Second Heading</div>
      <div className="text-white">Third Heading</div>
    </div>
  );
}

export default TopNavSecond;
