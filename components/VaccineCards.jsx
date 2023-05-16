import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RiseLoader from "react-spinners/RiseLoader";
import { bearerToken } from "../bearerToken";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function VaccineCards() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [allVaccines, setAllVaccines] = useState([]);
  const [color, setColor] = useState("#7d018c");

  function HandleBooking(item) {
    const { id, name, price } = item;
    router.push({
      pathname: `/Booking/${id}`,
      query: { name: `${name}`, amount: `${price}` },
    });
  }

  useEffect(() => {
    setLoading(true);
    const fetchAllVaccines = async () => {
      try {
        const response = await fetch(
          "https://api.healthneutron.com/api/v1/vaccine/list",
          {
            Method: "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${bearerToken.token}`,
            },
          }
        );

        const fetchReponse = await response.json();
        setAllVaccines(fetchReponse?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllVaccines();
  }, []);



  return (
    <div>
      {loading && (
        <div className="m-20 flex items-center justify-center">
          <RiseLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="flex md:flex-row flex-col m-8 md:space-x-10 md:space-y-0 space-y-10 justify-center items-center font-montserrat flex-wrap">
        {allVaccines.map((vaccine, index) => {
          return (
            <div
              key={index}
              className="bg-white md:w-1/4 md:h-[50%] w-[90%] h-[90%] cursor-pointer mb-10"
              onClick={() => {
                HandleBooking(vaccine);
              }}
            >
              <img src={vaccine.image} alt="Vaccine Image" />
              <div className="space-y-1">
                <div className=" text-center text-base font-medium mt-2">
                  {vaccine.name}
                </div>
                <div className="text-lg font-semibold text-center text-[#7d018c]">
                  ₵{vaccine.price}
                </div>
                <div
                  className="bg-[#7d018c] mx-auto w-[50%] rounded-xl text-white py-2 text-center mt-2 "
                  onClick={() => {
                    HandleBooking(vaccine);
                  }}
                >
                  Book
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
}

export default VaccineCards;
