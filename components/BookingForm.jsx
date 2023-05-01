import React, { useState } from "react";
import Image from "next/Image";
import vaccine_services from "../public/vaccine_services.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookingForm({ name, amount }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    amount: amount,
    location: "",
    package: name,
    gender: "",
    visit_date: "",
    visit_time: "",
  });

  const handleSubmit = async (e) => {
    const req = await fetch(``, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          amount: values.amount,
          location: values.location,
          package: values.package,
          gender: values.gender,
          visit_date: values.visit_date,
          visit_time: values.visit_time
      }),
    });
    if (req.status != 200) {
      toast.error(`Error code: ${req.status}`);
      setLoading(false);
    } else {
      const res = await req.json();
      console.log({ res });
      setLoading(false);
      if (res?.statusCode != "MT00") {
        toast.error(`Failed to Book`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Booking completed successfully");
        setLoading(false);
        // setTimeout(() => {
        //   setHome(true);
        //   setUser(false);
        // }, 3000);
      }
    }

    setValues({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      amount: "",
      location: "",
      package: "",
      gender: "",
      visit_date: "",
      visit_time: ""
    });
  };

  
  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center font-montserrat">
        <div className="mr-5 ml-5 mb-10 mt-3 flex rounded-lg w-full font-latoRegular h-contain">
          <div className="flex-1 text-black p-5">
            <div className="rounded-2xl relative h-full w-full mb-4 flex justify-center text-center object-cover">
              <Image
                alt="AddUser form image"
                src={vaccine_services}
                fill
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1 m-5">
            {/* First Name input field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="first_name"
              >
                First Name *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={(event) =>
                  setValues({ ...values, first_name: event.target.value })
                }
                placeholder="Enter First Name"
              />
            </div>

            {/* Last Name input field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="last_name"
              >
                Last Name *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={(event) =>
                  setValues({ ...values, last_name: event.target.value })
                }
                placeholder="Enter Last Name"
              />
            </div>

            {/* Email input field */}
            <div className="pb-4">
              <label
                className={`block font-latoBold text-sm pb-2`}
                htmlFor="email"
              >
                Email *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="email"
                value={values.email}
                onChange={(event) =>
                  setValues({ ...values, email: event.target.value })
                }
                placeholder="Enter Email"
              />
            </div>

            {/* Phone Number input field */}
            <div className="pb-4">
              <label
                className={`block font-latoBold text-sm pb-2`}
                htmlFor="phone_number"
              >
                Phone Number *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="phone_number"
                value={values.phone_number}
                onChange={(event) =>
                  setValues({ ...values, phone_number: event.target.value })
                }
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Amount Input field*/}
            <div className="pb-4">
              <label
                className={`block font-latoBold text-sm pb-2`}
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="amount"
                value={values.amount}
                onChange={(event) =>
                  setValues({ ...values, amount: event.target.value })
                }
                placeholder={amount}
                disabled
              />
            </div>
          </div>

          <div className="flex-1 m-5">
            {/* Location Input field*/}
            <div className="pb-4">
              <label
                className={`block font-latoBold text-sm pb-2`}
                htmlFor="location"
              >
                Location *
              </label>
              <input
                className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="location"
                value={values.location}
                onChange={(event) =>
                  setValues({ ...values, location: event.target.value })
                }
                placeholder="Enter Location"
              />
            </div>

            {/* Package Input field*/}
            <div className="pb-4">
              <label
                className={`block font-latoBold text-sm pb-2`}
                htmlFor="package"
              >
                Package *
              </label>
              <input
                className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="package"
                value={values.package}
                onChange={(event) =>
                  setValues({ ...values, package: event.target.value })
                }
                placeholder={name}
                disabled
              />
            </div>

            {/* Gender field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                name="gender"
                value={values.gender}
                onChange={(event) =>
                  setValues({ ...values, gender: event.target.value })
                }
                className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Visit Date input Field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="visit_date"
              >
                Visit Date *
              </label>
              <input
                className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="date"
                name="visit_date"
                value={values.visit_date}
                onChange={(event) =>
                  setValues({ ...values, visit_date: event.target.value })
                }
                //   placeholder="Select Visit Date"
              />
            </div>

            {/* Visit Time field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="visit_time"
              >
                Visit Time
              </label>
              <select
                name="visit_time"
                value={values.visit_time}
                onChange={(event) =>
                  setValues({ ...values, visit_time: event.target.value })
                }
                className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
              >
                <option value="">Select a slot</option>
                <option value="10am - 12pm">10am - 12pm</option>
                <option value="12pm - 2pm">12pm - 2pm</option>
                <option value="2pm - 4pm">2pm - 4pm</option>
              </select>
            </div>
            {/* Submit Button */}
            <div className="pb-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-sm bg-black font-latoBold text-white py-3 mt-4 rounded-lg w-full hover:bg-[#7d018c]"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
