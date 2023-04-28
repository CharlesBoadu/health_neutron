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
        <div className="w-contain h-[40vh] m-4 bg-[#232f3e] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="font-montserrat text-4xl text-white">
            Vaccines available
          </span>
        </div>
          <VaccineCards />
      </div>
      <Footer />
    </>
  );
}

export default vaccines;
