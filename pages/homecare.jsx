import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import TopNavSecond from "../components/TopNavSecond";
import HomeCareForm from "../components/HomeCareForm";
import CarouselSecond from "../components/CarouselSecond";

const slides = [
  "/Health-Neutron-B2B-Web-banner20.jpg",
  "/Health-Neutron-B2B-Web-banner20.jpg",
  "/Health-Neutron-B2B-Web-banner20.jpg",
  // "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  // "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  // "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  // "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  // "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
];

function homecare() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div>
        {/* <CarouselSecond autoSlide={true} autoSlideInterval={5000}>
          {[...slides.map((s, i) => <img src={s} key={i}/>)]}
        </CarouselSecond> */}
        <div className="w-contain md:h-[40vh] h-[30vh] bg-[#232f3e] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="font-montserrat md:text-[55px] text-3xl text-white text-center">
          We support you to take care of your loved ones.
          </span>
        </div>
        <div>
          {/* <div className="md:text-4xl text-2xl font-extrabold font-montserrat text-gray-700 mt-10 mb-5 ml-10">
            HOMECARE SERVICES...
          </div> */}
          {/* <div className="text-sm font-montserrat text-gray-500 md:mb-10 mb-10 ml-10 mr-10">
            We provide quality home care for the aged, the physically
            challenged, children, the sick and patients recovering from surgery
            and other medical procedures.
          </div> */}
        </div>
        <HomeCareForm />
      </div>
      <Footer />
      <FooterSecond />
    </>
  );
}

export default homecare;
