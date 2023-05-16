import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import LabCards from "../components/LabCards";
import TopNavSecond from "../components/TopNavSecond";
import FooterSecond from "../components/FooterSecond";

function labs() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div>
        <div className="w-contain md:h-[40vh] h-[30vh] bg-[#232f3e] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="font-montserrat md:text-7xl text-3xl text-white">
            We tell your inside story
          </span>
        </div>
        <LabCards />
      </div>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default labs;
