import React, { useState } from "react";
import { bearerToken } from "../bearerToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function CardPayment({ name, amount }) {
  const [values, setValues] = useState({
    cardNumber: "",
    expirationDate: "",
    card: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    const req = await fetch(
      `https://sandbox.healthneutron.com/api/v1/genpay/debit/card`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken.token}`, //  'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
          description: "Payment for Covid Test",
          amount: amount,
          reference: "HNIV200040098",
          state: "Tema",
          city: "Accra",
          country: "GH",
          firstName: "Richard",
          lastName: "Arhin",
          cardNumber: "4042152070059069",
          cardExpiryYear: "2024",
          cardCVV: "701",
          email: "arhin@gmail.com",
          currency: "GHS",
          address: "Tema",
          callback_url: "",
          zip: "233",
          return_url: "",
          requestId: "43",
          transType: "lab_request",
          packageCode: "e43",
          packageName: "test",
          token: "242424",
        }),
      }
    );
    if (req.status != 200) {
      toast.error(`Error code: ${req.status}`);
      setLoading(false);
    } else {
      const res = await req.json();
      console.log({ res });
      setLoading(false);
      if (!res?.success) {
        toast.error(`Payment unsuccessful`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Awaiting confirmation");
        setLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    }

    setValues({
      cardNumber: "",
      expirationDate: "",
      card: "",
      name: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-4 mx-auto">
        {/* {Card Number input field} */}
        <div className="pb-4">
          <label
            className={`block font-latoBold text-sm pb-2`}
            htmlFor="cardNumber"
          >
            Card Number *
          </label>
          <input
            className="w-full border-0 border-b-2 p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="text"
            name="cardNumber"
            value={values.cardNumber}
            onChange={(event) =>
              setValues({ ...values, cardNumber: event.target.value })
            }
            placeholder="1111-2222-3333-4444"
          />
        </div>

        {/* {Expiration Date input field} */}
        <div className="pb-4">
          <label
            className={`block font-latoBold text-sm pb-2`}
            htmlFor="expiration_date"
          >
            Expirational Date
          </label>
          <input
            className="w-full p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="text"
            name="expiration_date"
            value={values.expirationDate}
            onChange={(event) =>
              setValues({ ...values, expirationDate: event.target.value })
            }
            placeholder="MM/YYYY"
          />
        </div>

        {/* Card Input field*/}
        <div className="pb-4">
          <label className={`block font-latoBold text-sm pb-2`} htmlFor="name">
            Card CVV
          </label>
          <input
            className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
            type="text"
            name="card"
            value={values.card}
            onChange={(event) =>
              setValues({ ...values, card: event.target.value })
            }
            placeholder="352"
          />
        </div>

        {/* Name Input field*/}
        <div className="pb-4">
          <label className={`block font-latoBold text-sm pb-2`} htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
            type="text"
            name="name"
            value={values.name}
            onChange={(event) =>
              setValues({ ...values, name: event.target.value })
            }
            placeholder={name}
          />
        </div>

        {/* {Payment Button} */}
        <div
          className="w-full bg-[#7d018c] py-2 text-center text-white text-sm mt-4 hover:cursor-pointer hover:bg-[#ffd814] hover:text-[#7d018c] font-bold text-lg"
          onClick={handleSubmit}
        >
          Pay ₵{amount}.00
        </div>
      </div>
    </>
  );
}

export default CardPayment;
