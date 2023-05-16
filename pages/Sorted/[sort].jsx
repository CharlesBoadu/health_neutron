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
import { bearerToken } from "../../bearerToken";
import PropagateLoader from "react-spinners/PropagateLoader";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

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

  const { id } = router.query;
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [loading, setLoading] = useState(false);
  const [sortedItems, setSortedItems] = useState([]);
  const [color, setColor] = useState("#7d018c");


  useEffect(() => {
    setLoading(true)
    const fetchAllSortedItems = async () => {
      try {
        const response = await fetch(
          `https://api.healthneutron.com/api/v1/fetch/labs/bundles?slug=&type=&searchKey=&parentSlugId=${id}`,
          {
            Method: "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              Authorization:
                `Bearer ${bearerToken.token}`, //  'Access-Control-Allow-Origin':'*'
            },
          }
        );
  
        const fetchReponse = await response.json();
        setSortedItems(fetchReponse?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
  
    };
    fetchAllSortedItems();
  }, [])


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

  // useEffect(() => {
  //     if ( name === 'Hepatitis B') {
  //       setHBVItems(true);
  //       setHypertension(false);
  //     } else if (name === 'Hypertension') {
  //       setHBVItems(false);
  //       setHypertension(true);
  //     }
  // }, [])

  return (
    <>
      <TopNav />
      <TopNavSecond />
      {/* <SideNav /> */}
      <CarouselSecond autoSlide={true} autoSlideInterval={5000}>
        {[...slides.map((s, i) => <img src={s} key={i}/>)]}
      </CarouselSecond>
      {loading && (
        <div className="mt-20 flex justify-center items-center">
          <PropagateLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="flex flex-row m-10 space-x-10 justify-center items-center font-montserrat">
        {sortedItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-[30%] h-[30%] cursor-pointer"
            >
              <img src={item?.image_url} alt="Lab Image" />
              <div className="space-y-2">
                <div className=" text-center text-base font-medium mt-2">
                  {item?.bundle_name?.toUpperCase()}
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
        })
        }
      </div>
      {/* {
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
      } */}
      <Footer />
      <FooterSecond />
    </>
  );
}

export default Sort;
