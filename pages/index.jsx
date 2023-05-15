import React, { useState } from "react";
import TopNav from "../components/TopNav";
import CardSetOne from "../components/CardSetOne";
import TopNavSecond from "../components/TopNavSecond";
import TopNavThird from "../components/TopNavThird";
import SupportServices from "../components/SupportServices";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import Carousel from "../components/Carousel";
import CarouselSecond from "../components/CarouselSecond";
import CustomerReviews from "../components/CustomerReviews";
import FeaturedCategoriesCardOne from "../components/Featured Categories/FeaturedCategoriesCardOne";
import FeaturedCategoriesCardTwo from "../components/Featured Categories/FeaturedCategoriesCardTwo";
import FeaturedCategories from "../components/Featured Categories/FeaturedCategories";
import FeaturedCategoriesSm from "../components/FeaturedCategoriesSm";
import CustomerReviewCard from "../components/CustomerReviewCard";
import CustomerReviewSm from "../components/CustomerReviewSm";
import FeaturedCategoriesMain from "../components/Featured Categories/FeaturedCategoriesMain";

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

const cardSetOneSlides = [
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
];

const featured = [
  // <FeaturedCategoriesCardOne key={1}/>,
  // <FeaturedCategoriesCardTwo key={2}/>
  ["/Hepatitis-B-Test-(HBsAg).jpg", "/hypertension.jpg", "/diabetis.jpg"],
  ["/Hepatitis-B-Test-(HBsAg).jpg", "/hypertension.jpg", "/diabetis.jpg"],
  ["/hypertension.jpg", "/Hepatitis-B-Test-(HBsAg).jpg", "/diabetis.jpg"],
];

const customerReviews = [
  <CustomerReviewCard key={1} />,
  // <CustomerReviewCard key={2}/>
];

export default function Home() {
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <CarouselSecond autoSlide={true} autoSlideInterval={5000}>
        {[...slides.map((s, i) => <img src={s} key={i} />)]}
      </CarouselSecond>
      <TopNavThird />
      <Carousel />
      {/* autoSlide={true} autoSlideInterval={5000}*/}
      {/* {[...slides.map((s) => <img src={s} />)]} */}
      {/* </Carousel> */}
      <CardSetOne autoSlide={true} autoSlideInterval={5000}>
        {[...cardSetOneSlides.map((s, i) => <img src={s} key={i} />)]}
      </CardSetOne>
      {/* <FeaturedCategories 
      autoSlide={true} 
      autoSlideInterval={5000}
      >
      {[...featured.map((s) => s)]}
      {[...featured.map((s, i) => 
        <div
        className="w-[50vh] h-[50vh] rounded-lg m-4 hover:cursor-pointer"
        onClick={() => {
          // handleSort("Hepatitis");
          console.log("I have been clicked", i)
        }}
        key={i}
      >
        <div>
          <img src={s[i]} alt="HEP B Image" />
        </div>
        <div className="bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm">
          Hepatitis B
        </div>
      </div>
        )]}
      </FeaturedCategories> */}
      <FeaturedCategoriesMain />
      <FeaturedCategoriesSm />
      <CustomerReviews>{[...customerReviews.map((s) => s)]}</CustomerReviews>
      <CustomerReviewSm />
      <SupportServices />
      <Footer />
      <FooterSecond />
    </>
  );
}
