import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import VaccineCards from "../components/VaccineCards";

function vaccines() {
  return (
    <>
      <TopNav />
      <div>
        <div className="w-contain h-[40vh] m-4 bg-[#232f3e] flex items-center justify-center">
          <span className="font-montserrat text-4xl text-white">
            Welcome to the Vaccines Page
          </span>
        </div>
          <VaccineCards />
      </div>
      <Footer />
    </>
  );
}

export default vaccines;
