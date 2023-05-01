import React from "react";

function MobilePayment() {
  return (
    <div className="mt-4 mx-auto">
      {/* {Name input field} */}
      <div className="pb-4">
        <label className={`block font-latoBold text-sm pb-2`} htmlFor="name">
          Name *
        </label>
        <input
          className="w-full border-0 border-b-2 p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
          type="text"
          name="name"
          //   value={values.address}
          //   onChange={(event) =>
          //     setValues({ ...values, address: event.target.value })
          //   }
          placeholder="Enter Name"
        />
      </div>

      {/* {Network input field} */}
      <div className="pb-4">
        <label className={"block font-latoBold text-sm pb-2"} htmlFor="country">
          Network
        </label>
        <select
          //   name="country"
          //   value={values.country}
          //   onChange={(event) =>
          //     setValues({ ...values, country: event.target.value })
          //   }
          className="w-full border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
        >
          <option value="">Select Network</option>
          <option value="MTN">MTN</option>
          <option value="Vodafone">Vodafone</option>
        </select>
      </div>

      {/* Mobile number Input field*/}
      <div className="pb-4">
        <label
          className={`block font-latoBold text-sm pb-2`}
          htmlFor="phone_number"
        >
          Mobile Number
        </label>
        <input
          className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          type="text"
          name="mobile_number"
        //   value={values.Mobile_number}
        //   onChange={(event) =>
        //     setValues({ ...values, Mobile_number: event.target.value })
        //   }
          placeholder="Enter your Mobile number"
        />
      </div>

      {/* {Payment Button} */}
      <div className="w-full bg-[#7d018c] py-2 text-center text-white text-sm mt-4">
        Pay ...
      </div>
    </div>
  );
}

export default MobilePayment;
