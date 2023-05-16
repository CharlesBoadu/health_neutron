import React, { useState } from "react";
import { bearerToken } from "../bearerToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Pusher from "pusher";

function MobilePayment({ name, contact, amount, token, request_id }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    customerName: "",
    network: "",
    mno: "",
    contact: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    const req = await fetch(
      `https://api.healthneutron.com/api/v1/genpay/debit/momo`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${bearerToken.token}`, //  'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
          customerName: values.customerName,
          requestId: request_id,
          mno: values.mno,
          amount: amount,
          msisdn: values.contact,
          description: "Payment",
          token: token,
          callback_url: "",
          packageName: "test",
          packageCode: "pv00534",
          transType: "lab_request",
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
        toast.success("Awaiting Confirmation");
        setLoading(false);
        setTimeout(() => {
          router.push({
            pathname: `/pendingPayment`,
            query: {token: `${token}`},
          });
        }, 3000);
      }
    }

    setValues({
      customerName: "",
      network: "",
      mno: "",
      contact: "",
    });
  };

  return (
    <>
    <ToastContainer />
    <div className="mt-4 mx-auto">
      {/* {Name input field} */}
      <div className="pb-4">
        <label className={`block font-latoBold text-sm pb-2`} htmlFor="name">
          Name *
        </label>
        <input
          className="w-full border-0 border-b-2 p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
          type="text"
          name="customerName"
          value={values.customerName}
          onChange={(event) =>
            setValues({ ...values, customerName: event.target.value })
          }
          placeholder={name}
        />
      </div>

      {/* {Network input field} */}
      <div className="pb-4">
        <label className={"block font-latoBold text-sm pb-2"} htmlFor="country">
          Network
        </label>
        <select
          name="mno"
          value={values.mno}
          onChange={(event) =>
            setValues({ ...values, mno: event.target.value })
          }
          className="w-full border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
        >
          <option value="">Select Network</option>
          <option value="MTN">MTN</option>
          <option value="Vodafone">Vodafone</option>
        </select>
      </div>

      {/* Mobile number Input field*/}
      <div className="pb-4">
        <label className={`block font-latoBold text-sm pb-2`} htmlFor="contact">
          Mobile Number
        </label>
        <input
          className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          type="text"
          name="contact"
          value={values.contact}
          onChange={(event) =>
            setValues({ ...values, contact: event.target.value })
          }
          placeholder={contact}
        />
      </div>

      {/* {Payment Button} */}
      <div
        className="w-full bg-[#7d018c] py-2 text-center text-white text-sm mt-4 text-lg hover:cursor-pointer hover:bg-[#ffd814] hover:text-[#7d018c] font-bold text-lg"
        onClick={handleSubmit}
      >
        Pay ₵{amount}.00
      </div>
    </div>
    </>
  );
}

export default MobilePayment;
