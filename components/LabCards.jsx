import React, { useEffect, useState, CSSProperties } from "react";
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
      <div className="flex flex-row m-8 space-x-10 justify-center items-center font-montserrat">
        {labItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-[200px] h-[350px] cursor-pointer"
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
