import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

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
      `https://sandbox.healthneutron.com/api/v1/genpay/debit/momo`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTc4MjRjYjU4NTYxYTczZTAxMDRlMzVkNTI1MjM5ODY0MmJlMzgwMDAzYjM4ZGVlNGE5MjE0MGVjNWE5MWEzNzM5ZjIzMDA0N2U5NWYwNWEiLCJpYXQiOjE2ODMwMjMwNTguOTE2MTg1LCJuYmYiOjE2ODMwMjMwNTguOTE2MTg5LCJleHAiOjE3MTQ2NDU0NTguODkzNTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZLi9YhRFQ9KGzNJ9RJVLO5Am19tPxlJY0Q_tLNY9TvERxc4lpy5ok3zWDZnpK9Qb_pqqdcjfz0vBM3xUYgM-ITq9GpHtHEmfjDBmD90LH23ydOGwF9WljZM_RaNobubRkfF6wiIrnS3VSTJKtv6Qql3KUPfoAlYp18mx7yig3kvcCVJ9Nt11W5zBxVkWabTgFKhs_Qc-XqM2_5tU5O0yDsOxTKwKOBfCLCPI6peDPkiF2nLYsWNSGc1Jsaj6QnDZ0WB_boX-7l3ZgEFgF8zJSH3QQAXTmQQpqfjBHSSEOVcNFFCJfJLt8n_dBUEf6Y-opmnaVED92147loTNO7VNuzBZjbMHf8vI5nB-exRBTH80VN9NAGFHxA85RS4kK6kFHmlaBfYbHwZFWftfk3bHwXVdKfa3vGT8TLoQQO3dskDVT8Om53ScrR3RFg0Fu-i5pJoE0Np2MJuPDKQ5L-mITAHymN0aAe6dWRXiN3B7-Wc0qYGDkM3zFL95ekNdkPffgcG8wApTSsZhsyYy1kx-b1SI__IWqyPBd5NpHsrEM5ZRApFniVyJ-u8C_jQ4vwDHw61MHEUMZVpeXutWuvkGSt9NZM2VMSNDr1StCGasMODOnflhQdlXS0oHOAsmA4HjUPH7Cr0JhwvXBOgCdOl_vc2IkOVpYBQ83tKedW5FrTA", //  'Access-Control-Allow-Origin':'*'
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
        toast.success("Check your phone to confirm payment");
        setLoading(false);
        setTimeout(() => {
          router.push("/");
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
        Pay ₵{amount}
      </div>
    </div>
    </>
  );
}

export default MobilePayment;
