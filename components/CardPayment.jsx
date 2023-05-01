import React from "react";

function CardPayment() {
  return (
    <div className="mt-4 mx-auto">
      {/* {Card Number input field} */}
      <div className="pb-4">
        <label
          className={`block font-latoBold text-sm pb-2`}
          htmlFor="card_number"
        >
          Card Number *
        </label>
        <input
          className="w-full border-0 border-b-2 p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
          type="text"
          name="name"
          //   value={values.address}
          //   onChange={(event) =>
          //     setValues({ ...values, address: event.target.value })
          //   }
          placeholder="Card Number"
        />
      </div>

      {/* {Expiration Date input field} */}
      <div className="pb-4">
        <label
          className={`block font-latoBold text-sm pb-2`}
          htmlFor="expiration_date"
        >
          Expiration Date
        </label>
        <input
          className="w-full p-2 focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
          type="date"
          name="expiration_date"
          // value={values.employee_id}
          // onChange={(event) =>
          //   setValues({ ...values, employee_id: event.target.value })
          // }
          //   placeholder={amount}
          //   disabled
        />
      </div>

      {/* Card Input field*/}
      <div className="pb-4">
        <label
          className={`block font-latoBold text-sm pb-2`}
          htmlFor="name"
        >
          Card
        </label>
        <input
          className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          type="text"
          name="name"
          //   value={values.Mobile_number}
          //   onChange={(event) =>
          //     setValues({ ...values, Mobile_number: event.target.value })
          //   }
          placeholder="Enter Card Number"
        />
      </div>

      {/* Name Input field*/}
      <div className="pb-4">
        <label
          className={`block font-latoBold text-sm pb-2`}
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full p-2 border-0 border-b-2 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          type="text"
          name="name"
          //   value={values.Mobile_number}
          //   onChange={(event) =>
          //     setValues({ ...values, Mobile_number: event.target.value })
          //   }
          placeholder="Enter name"
        />
      </div>

      {/* {Payment Button} */}
      <div className="w-full bg-[#7d018c] py-2 text-center text-white text-sm mt-4">
        Pay ...
      </div>
    </div>
  );
}

export default CardPayment;
