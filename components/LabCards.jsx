import React, { useEffect, useState, CSSProperties } from "react";
import { bearerToken } from "../bearerToken";
import { useRouter } from "next/router";
import CartSideNav from "./CartSideNav";
import FadeLoader from "react-spinners/FadeLoader";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LabCards() {
  const router = useRouter();
  const [labItems, setLabItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#7d018c");

  function handleNavigateToItem(item) {
    const { bundle_id, name, price } = item;
    router.push({
      pathname: `/ItemPage/${bundle_id}`,
      query: `${bundle_id}`,
      // state: { name, price },
    });
  }

  // const items = [
  //   {
  //     id: 1,
  //     name: "HEPATITIS B PROFILE AND HBV VIRAL LOAD",
  //     price: "1480.00",
  //     src: "/hepatitis_b.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "RANDOM BLOOD SUGAR",
  //     price: "142.00",
  //     src: "/random-blood-sugar_rnnl38.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "PSA",
  //     price: "244.00",
  //     src: "/psa_gtslvq.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "RENAL KIDNEY PROFILE",
  //     price: "300.00",
  //     src: "/RENAL (KIDNEY).jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "END OF YEAR FAMILY LIFE PACKAGE",
  //     price: "750.00",
  //     src: "/End of year.jpg",
  //   },
  // ];

  useEffect(() => {
    setLoading(true)
    const fetchAllLabItems = async () => {
      try {
        const response = await fetch(
          "https://sandbox.healthneutron.com/api/v1/fetch/labs/bundles?slug=single_featured&type=&assignedGroup=",
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
        setLabItems(fetchReponse?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
  
    };
    fetchAllLabItems();
  }, [])

  return (
    <>
    {loading && (
      <div className="mt-20">
        <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )}
      <div className="flex md:flex-row flex-col m-8 md:space-x-10 md:space-y-0 space-y-10 justify-center items-center font-montserrat">
        {labItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white md:w-[50%] md:h-[50%] w-[90%] h-[90%] cursor-pointer"
              onClick={() => {
                handleNavigateToItem(item);
              }}
            >
              <img src={item.image_url} alt="Lab Image" />
              <div className="space-y-1">
                <div className=" text-center text-base font-medium mt-2">
                  {item.bundle_name.toUpperCase()}
                </div>
                <div className="text-lg font-semibold text-center text-[#7d018c]">
                  ₵{item.items[0].price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LabCards;
