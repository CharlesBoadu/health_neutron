import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RiseLoader from "react-spinners/RiseLoader";

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
    const { id, name, amount } = item;
    router.push({
      pathname: `/Booking/${id}`,
      query: { name: `${name}`, amount: `${amount}` },
    });
  }

  // const items = [
  //   {
  //     id: 1,
  //     name: "HBV Vaccine",
  //     amount: "₵10.00",
  //     src: "https://picsum.photos/200/300",
  //   },
  // ];

  useEffect(() => {
    setLoading(true);
    const fetchAllVaccines = async () => {
      try {
        const response = await fetch(
          "https://sandbox.healthneutron.com/api/v1/vaccine/list",
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
        setAllVaccines(fetchReponse?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllVaccines();
  }, []);

  // console.log("all vaccines", allVaccines);
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
      {/* <div
        //   key={index}
        className="bg-white w-[250px] h-[400px] cursor-pointer ml-10 font-montserrat"
      > */}
        <div className="flex md:flex-row flex-col m-8 md:space-x-10 md:space-y-0 space-y-10 justify-center items-center font-montserrat">
          {allVaccines.map((vaccine, index) => {
            return (
                <div
                  key={index}
                  className="bg-white md:w-[200px] md:h-[350px] cursor-pointer"
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
                      className="bg-[#7d018c] mx-auto w-[70px] rounded-xl text-white py-1 text-center mt-2 "
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
