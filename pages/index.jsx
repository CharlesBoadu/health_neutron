import React from "react";
import TopNav from "../components/TopNav";
import Carousel from "../components/Carousel";
import CardSetOne from "../components/CardSetOne";
import TopNavSecond from "../components/TopNavSecond";

export default function Home() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <Carousel />
      <CardSetOne />
    </>
  );
}
