import React, { useState, useEffect } from "react";
import { bearerToken } from "../bearerToken";
import { useRouter } from "next/router";

function LabSmallCards() {
  const router = useRouter();
  const [labItems, setLabItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function handleNavigateToItem(item) {
    // const { bundle_id, name, price } = item;
    router.push({
      pathname: `/ItemPage/${item?.bundle_id}`,
      query: `${item?.bundle_id}`,
    });
  }

  function handleNavigationToLabs() {
    router.push("/labs");
  }


  // const items = [
  //   {
  //     src: "https://res.cloudinary.com/dfiu8t1if/image/upload/v1647520807/GeneralAsset/qfami7pcljrfwcrkcvie.png",
  //     name: "Liver Function Test",
  //     price: "3.00",
  //     description: "",
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dfiu8t1if/image/upload/v1628521097/assests/fertility_vhn140.jpg",
  //     name: "Fertility Test",
  //     price: "500",
  //     description:
  //       "Kidney function tests are a group of tests that is performed together to evaluate kidney (renal) function. The tests measure levels of various substances, including several minerals, electrolytes, and proteins in the blood to determine the current health of the kidneys. If the kidneys are not functioning properly, waste products can accumulate in the blood and fluid levels can increase to dangerous volumes, causing damage to the body or a potentially life-threatening situation. This lead to Acute Kidney Disease or Chronic Kidney Disease (CKD) or Chronic Kidney failure. Some of the factors that may increase the risk of chronic kidney disease include diabetes, high blood pressure, heart disease, smoking, obesity. In Healthneutron we believe in preventive healthcare and seen firsthand that early detection saves life In line of this we provide home blood sampling for kidney function test and subsequent free online consultation via our Healthneutron app for review of kidney function test lab result",
  //   },
  //   {
  //     src: "/Covid - Standard.png",
  //     name: "Covid - standard",
  //     price: "",
  //     description: "",
  //   },
  //   {
  //     src: "/HN-MOM&DAD{PREM.).jpg",
  //     name: "Honor your mom and dad (premium)",
  //     price: "",
  //     description: "",
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

  console.log(labItems[4]);
  return (
    <>
      <div className="flex flex-row justify-center items-center md:space-x-3 space-x-7 py-2 z-1 hover:cursor-pointer">
        <div className="flex flex-col" onClick={() => {
          handleNavigateToItem(labItems[2])
        }
      }>
          <div className="md:w-[150px] md:h-[100px] w-[120px] bg-gray-300">
            <img
              src={labItems[2]?.image_url}
              alt="Lab Image 1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-xs text-gray-600 flex flex-col font-montserrat">
            <div>{labItems[2]?.bundle_name}</div>
          </div>
        </div>
        <div className="flex flex-col" onClick={() => {
          handleNavigateToItem(labItems[1])
        }
      }>
          <div className="md:w-[150px] md:h-[100px] w-[120px] bg-gray-300">
            <img
              src={labItems[1]?.image_url}
              alt="Lab Image 2"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-xs text-gray-600 font-montserrat">
            {labItems[1]?.bundle_name}
          </div>
        </div>
      </div>
      <div
        className="flex flex-row justify-center items-center md:space-x-3 space-x-7 py-2 hover:cursor-pointer"
        onClick={() => {
          handleNavigateToItem(labItems[0])
        }}
      >
        <div className="flex flex-col">
          <div className="md:w-[150px] md:h-[100px] w-[120px] bg-gray-300">
            <img
              src={labItems[0]?.image_url}
              alt="Lab Image 3"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-xs text-gray-600 font-montserrat">
            {labItems[0]?.bundle_name}
          </div>
        </div>
        <div className="flex flex-col" onClick={() => {
          handleNavigateToItem(labItems[4])
        }
      }>
          <div className="md:w-[150px] md:h-[100px] w-[120px] bg-gray-300">
            <img
              src={labItems[4]?.image_url}
              alt="Lab Image 4"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:text-sm text-xs text-gray-600 font-montserrat">
            <div>{labItems[4]?.bundle_name.toLowerCase()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabSmallCards;
