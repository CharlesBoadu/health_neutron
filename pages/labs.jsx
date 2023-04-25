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
        <div className="w-contain h-[40vh] m-4 bg-[#232f3e] flex items-center justify-center">
          <span className="font-montserrat text-4xl text-white">
            Welcome to Lab Page
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
