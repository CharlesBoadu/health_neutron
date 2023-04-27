import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav";
import TopNavSecond from "../../components/TopNavSecond";
// import SideNav from "../../components/SideNav";
import CarouselSecond from "../../components/CarouselSecond";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/CartState";
import Footer from "../../components/Footer";
import FooterSecond from "../../components/FooterSecond";
import { useRouter } from "next/router";

const hbvItems = [
  {
    id: 1,
    name: "HEPATITIS B TEST HBSBAG",
    price: "1480.00",
    src: "/hepatitis-b_tvvx7k.jpg",
  },
  {
    id: 2,
    name: "HEPATITIS B VIRAL LOAD",
    price: "142.00",
    src: "/hepatitis-b-viral-load_rhlvce.jpg",
  },
];

const hypertensionItems = [
    {
        id: 3,
        name: "PSA",
        price: "244.00",
        src: "/psa_gtslvq.jpg",
      },
      {
        id: 4,
        name: "RENAL KIDNEY PROFILE",
        price: "300.00",
        src: "/RENAL (KIDNEY).jpg",
      },
      {
        id: 5,
        name: "END OF YEAR FAMILY LIFE PACKAGE",
        price: "750.00",
        src: "/End of year.jpg",
      },
];

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

function Sort() {
  const router = useRouter();

  const { name } = router.query;
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [HBVitems, setHBVItems] = useState(false);
  const [hypertension, setHypertension] = useState(false);


  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === items[itemId - 1].id) === -1) {
      setCartItem((prevState) => [...prevState, items[itemId - 1]]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === items[itemId - 1].id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }

    toast.success(`${items[itemId - 1].name} added to cart`);
  };

  useEffect(() => {
      if ( name === 'Hepatitis') {
        setHBVItems(true);
        setHypertension(false);
      } else if (name === 'Hypertension') {
        setHBVItems(false);
        setHypertension(true);
      }
  }, [])

  return (
    <>
      <TopNav />
      <TopNavSecond />
      <SideNav />
      <CarouselSecond autoSlide={true} autoSlideInterval={5000}>
        {[...slides.map((s) => <img src={s} />)]}
      </CarouselSecond>
      {
      HBVitems && (
      <div className="flex flex-row m-10 space-x-10 justify-center items-center font-montserrat">
        {hbvItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-[200px] h-[350px] cursor-pointer"
            >
              <img src={item.src} alt="Lab Image" />
              <div className="space-y-2">
                <div className=" text-center text-base font-medium mt-2">
                  {item.name.toUpperCase()}
                </div>
                <div className="text-lg font-semibold text-center text-[#7d018c]">
                  ₵{item.price}
                </div>
                <div
                  className="bg-[#ffd814] hover:bg-[#fa8900] mx-auto cursor-pointer w-[120px] px-3 py-1 rounded-2xl font-montserrat text-center text-sm"
                  onClick={addItemsToCart}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )
      }
      {
      hypertension && (
      <div className="flex flex-row m-10 space-x-10 justify-center items-center font-montserrat">
        {hypertensionItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-[200px] h-[350px] cursor-pointer"
            >
              <img src={item.src} alt="Lab Image" />
              <div className="space-y-2">
                <div className=" text-center text-base font-medium mt-2">
                  {item.name.toUpperCase()}
                </div>
                <div className="text-lg font-semibold text-center text-[#7d018c]">
                  ₵{item.price}
                </div>
                <div
                  className="bg-[#ffd814] hover:bg-[#fa8900] mx-auto cursor-pointer w-[120px] px-3 py-1 rounded-2xl font-montserrat text-center text-sm"
                  onClick={addItemsToCart}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )
      }
      <Footer />
      <FooterSecond />
    </>
  );
}

export default Sort;
