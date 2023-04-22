import React from "react";
import TopNav from "../components/TopNav";
import Carousel from "../components/Carousel";
import CardSetOne from "../components/CardSetOne";
import TopNavSecond from "../components/TopNavSecond";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <Carousel />
      <CardSetOne />
      <Footer />
    </>
  );
}
