import React, { useState } from "react";
import TopNav from "../components/TopNav";
import CardSetOne from "../components/CardSetOne";
import TopNavSecond from "../components/TopNavSecond";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import Carousel from "../components/Carousel";
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

export default function Home() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <CarouselSecond autoSlide={true} autoSlideInterval={5000}>{[...slides.map((s) => <img src={s} />)]}</CarouselSecond>
      <Carousel /> 
      {/* autoSlide={true} autoSlideInterval={5000}*/}
        {/* {[...slides.map((s) => <img src={s} />)]} */}
      {/* </Carousel> */}
      <CardSetOne />
      <Footer />
      <FooterSecond />
    </>
  );
}
