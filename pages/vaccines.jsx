import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import VaccineCards from "../components/VaccineCards";
import TopNavSecond from "../components/TopNavSecond";

function vaccines() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div>
        <div className="w-contain md:h-[40vh] h-[30vh] bg-[#232f3e] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="font-montserrat md:text-[50px] text-3xl text-white text-center">
          Choose life so you and your loved ones will live.
          </span>
        </div>
          <VaccineCards />
      </div>
      <Footer />
    </>
  );
}

export default vaccines;
