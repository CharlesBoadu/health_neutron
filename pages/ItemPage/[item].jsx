import React, { useState, useEffect, CSSProperties } from "react";
import TopNav from "../../components/TopNav";
import TopNavSecond from "../../components/TopNavSecond";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import FooterSecond from "../../components/FooterSecond";
import { cartState } from "../../atoms/CartState";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsArrowLeftShort } from "react-icons/bs";
import PulseLoader from "react-spinners/PulseLoader";


export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Item() {
  const router = useRouter();
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [itemId, setItemId] = useState("");
  const [foundItem, setFoundItem] = useState("");
  const [newUpdatedItem, setNewUpdatedItem] = useState("");
  const [labItems, setLabItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#7d018c");



  // const items = [
  //   {
  //     id: 1,
  //     name: "HEPATITIS B PROFILE AND HBV VIRAL LOAD",
  //     quantity: 1,
  //     details:
  //       "This lab package includes, Lipid profile (Cholesterol), Fasting blood sugar, Cardiac enzymes and Hepatitis B",
  //     price: "1480.00",
  //     src: "/hepatitis_b.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "RANDOM BLOOD SUGAR",
  //     quantity: 1,
  //     details:
  //       "Lipids are fat and fat-like substance found in the body. A cholesterol test, also called a lipid profile, measures the fats in the blood. The measurements can help determine the risk of having a heart attack or other heart disease.",
  //     price: "142.00",
  //     src: "/random-blood-sugar_rnnl38.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "PSA",
  //     quantity: 1,
  //     details:
  //       "RANDOM FASTING SUGAR A blood test done to evaluate the level of glucose in blood at any point of time in a day.",
  //     price: "244.00",
  //     src: "/psa_gtslvq.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "RENAL KIDNEY PROFILE",
  //     quantity: 1,
  //     details:
  //       "Take advantage of the December/Football season discount and book now!!! Millions of people are likely to die from kidney failure when left untreated.",
  //     price: "300.00",
  //     src: "/RENAL (KIDNEY).jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "END OF YEAR FAMILY LIFE PACKAGE",
  //     quantity: 1,
  //     details:
  //       "A Pap smear, also called a Pap test, is a procedure to test for cervical cancer in women. Detecting cervical cancer early with a Pap smear gives you a greater chance at a cure. A Pap smear can also detect changes in your cervical cells that suggest cancer may develop in the future",
  //     price: "750.00",
  //     src: "/End of year.jpg",
  //   },
  // ];

  function handleGoBack() {
    router.back();
  }

  useEffect(() => {
    setLoading(true);
    const fetchLabItems = async () => {
      try {
        const response = await fetch(
          "https://sandbox.healthneutron.com/api/v1/fetch/labs/bundles?slug=single_featured&type=&assignedGroup=",
          {
            Method: "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTc4MjRjYjU4NTYxYTczZTAxMDRlMzVkNTI1MjM5ODY0MmJlMzgwMDAzYjM4ZGVlNGE5MjE0MGVjNWE5MWEzNzM5ZjIzMDA0N2U5NWYwNWEiLCJpYXQiOjE2ODMwMjMwNTguOTE2MTg1LCJuYmYiOjE2ODMwMjMwNTguOTE2MTg5LCJleHAiOjE3MTQ2NDU0NTguODkzNTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZLi9YhRFQ9KGzNJ9RJVLO5Am19tPxlJY0Q_tLNY9TvERxc4lpy5ok3zWDZnpK9Qb_pqqdcjfz0vBM3xUYgM-ITq9GpHtHEmfjDBmD90LH23ydOGwF9WljZM_RaNobubRkfF6wiIrnS3VSTJKtv6Qql3KUPfoAlYp18mx7yig3kvcCVJ9Nt11W5zBxVkWabTgFKhs_Qc-XqM2_5tU5O0yDsOxTKwKOBfCLCPI6peDPkiF2nLYsWNSGc1Jsaj6QnDZ0WB_boX-7l3ZgEFgF8zJSH3QQAXTmQQpqfjBHSSEOVcNFFCJfJLt8n_dBUEf6Y-opmnaVED92147loTNO7VNuzBZjbMHf8vI5nB-exRBTH80VN9NAGFHxA85RS4kK6kFHmlaBfYbHwZFWftfk3bHwXVdKfa3vGT8TLoQQO3dskDVT8Om53ScrR3RFg0Fu-i5pJoE0Np2MJuPDKQ5L-mITAHymN0aAe6dWRXiN3B7-Wc0qYGDkM3zFL95ekNdkPffgcG8wApTSsZhsyYy1kx-b1SI__IWqyPBd5NpHsrEM5ZRApFniVyJ-u8C_jQ4vwDHw61MHEUMZVpeXutWuvkGSt9NZM2VMSNDr1StCGasMODOnflhQdlXS0oHOAsmA4HjUPH7Cr0JhwvXBOgCdOl_vc2IkOVpYBQ83tKedW5FrTA", //  'Access-Control-Allow-Origin':'*'
            },
          }
        );

        const fetchReponse = await response.json();
        setLabItems(fetchReponse?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLabItems();
  }, []);

  const item = labItems.find((element) => element?.bundle_id == itemId);

  //Adding items to Cart
  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === item.bundle_id) === -1) {
      setCartItem((prevState) => [...prevState, item]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === item.bundle_id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }

    toast.success(`${item.bundle_name} added to cart`);
  };

  //Handle Remove from cart
  // function handleRemoveFromCart (id) {
  //   setCart((prev) => {
  //     return prev.reduce((cal, item) => {
  //       if (item.id === id) {
  //         if (item.amount === 1) return cal;

  //         return [...cal, { ...item, amount: item.amount - 1 }];
  //       }

  //       return [...cal, { ...item }];
  //     }, []);
  //   });
  // };

  useEffect(() => {
    const { query } = router;
    setItemId(query.item);
  }, [itemId]);

  return (
    <>
      <ToastContainer />
      <TopNav />
      <TopNavSecond />
      {loading ? (
      <div className="flex justify-center items-center m-40">
        <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    ) : (
      <>
      <div className="flex flex-row bg-gray-200 w-[1000px] h-full mx-auto m-4 items-center justify-center space-x-8">
        <div className="flex-1 w-full h-full">
          <img src={item?.image_url} alt="Lab Item Image" />
        </div>
        <div className="flex flex-col w-[600px] space-y-3">
          <div className="text-lg font-bold font-montserrat">
            {item?.bundle_name}
          </div>
          <div className="font-montserrat text-sm pr-4">
            {item?.description}
          </div>
          <div className="space-y-1 text-xs">
            <div className="text-lg mb-2 font-montserrat font-bold">
            ₵{item?.items[0]?.price}
            </div>
            <div
              className="bg-[#ffd814] hover:bg-[#fa8900] cursor-pointer w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center"
              onClick={addItemsToCart}
            >
              Add to Cart
            </div>
            {/* <div className="bg-[#fa8900] hover:bg-[#ffd814] w-[200px] px-3 py-1 rounded-2xl font-montserrat text-center">
              Buy Now
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="py-4 font-montserrat flex flex-row items-center justify-center space-x-4 hover:text-[#7d018c] hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <div>
          <BsArrowLeftShort />
        </div>
        <div>Go back</div>
      </div>
      </>
    )
    }
      <Footer />
      <FooterSecond />
    </>
  );
}

export default Item;
