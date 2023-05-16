import React, { useState, CSSProperties } from "react";
import { bearerToken } from "../bearerToken";
import Image from "next/Image";
import vaccine_services from "../public/vaccine_services.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import PuffLoader from "react-spinners/PuffLoader";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function BookingForm({ name, amount }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#7d018c");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    amount: "",
    location: "",
    package: "",
    gender: "",
    visitDate: "",
    visitTime: "",
  });

  const handleSubmit = async (e) => {
    const req = await fetch(
      `https://api.healthneutron.com/api/v1/service/book`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${bearerToken.token}`, //  'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
          package: name,
          visitTime: values.visitTime,
          visitDate: values.visitDate,
          contact: values.contact,
          requestType: "Walkin",
          email: values.email,
          location: values.location,
          amount: amount,
          bookingType: 2,
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
        toast.error(`Failed to Book`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Vaccination Booking completed successfully");
        setLoading(false);
        setTimeout(() => {
          router.push("/vaccines");
        }, 3000);
      }
    }

    setValues({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      amount: "",
      location: "",
      package: "",
      gender: "",
      visitDate: "",
      visitTime: "",
    });
  };

  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="mt-20">
          <PuffLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="flex justify-center items-center font-montserrat hidden sm:block">
        <div className="mb-10 mt-3 flex rounded-lg w-full font-latoRegular h-contain">
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
                htmlFor="firstName"
              >
                First Name *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={(event) =>
                  setValues({ ...values, firstName: event.target.value })
                }
                placeholder="Enter First Name"
              />
            </div>

            {/* Last Name input field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="lastName"
              >
                Last Name *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={(event) =>
                  setValues({ ...values, lastName: event.target.value })
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
                htmlFor="contact"
              >
                Phone Number *
              </label>
              <input
                className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="text"
                name="contact"
                value={values.contact}
                onChange={(event) =>
                  setValues({ ...values, contact: event.target.value })
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
                htmlFor="visitDate"
              >
                Visit Date *
              </label>
              <input
                className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                type="date"
                name="visitDate"
                value={values.visitDate}
                onChange={(event) =>
                  setValues({ ...values, visitDate: event.target.value })
                }
                //   placeholder="Select Visit Date"
              />
            </div>

            {/* Visit Time field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="visitTime"
              >
                Visit Time
              </label>
              <select
                name="visitTime"
                value={values.visitTime}
                onChange={(event) =>
                  setValues({ ...values, visitTime: event.target.value })
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
      <div className="rounded-2xl relative h-[20vh] w-[75%] mb-10 flex justify-center text-center object-cover block md:hidden mx-auto">
        <Image
          alt="AddUser form image"
          src={vaccine_services}
          fill
          className="object-cover rounded-2xl h-full w-full"
        />
      </div>
      <div className="mr-10 ml-10 mx-auto block md:hidden font-montserrat">
        {/* First Name input field */}
        <div className="pb-4">
          <label
            className={"block font-latoBold text-sm pb-2"}
            htmlFor="firstName"
          >
            First Name *
          </label>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={(event) =>
              setValues({ ...values, firstName: event.target.value })
            }
            placeholder="Enter First Name"
          />
        </div>

        {/* Last Name input field */}
        <div className="pb-4">
          <label
            className={"block font-latoBold text-sm pb-2"}
            htmlFor="lastName"
          >
            Last Name *
          </label>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={(event) =>
              setValues({ ...values, lastName: event.target.value })
            }
            placeholder="Enter Last Name"
          />
        </div>

        {/* Email input field */}
        <div className="pb-4">
          <label className={`block font-latoBold text-sm pb-2`} htmlFor="email">
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
            htmlFor="contact"
          >
            Phone Number *
          </label>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="text"
            name="contact"
            value={values.contact}
            onChange={(event) =>
              setValues({ ...values, contact: event.target.value })
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
      <div className="mr-10 ml-10 mx-auto block md:hidden font-montserrat">
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
            htmlFor="visitDate"
          >
            Visit Date *
          </label>
          <input
            className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
            type="date"
            name="visitDate"
            value={values.visitDate}
            onChange={(event) =>
              setValues({ ...values, visitDate: event.target.value })
            }
            //   placeholder="Select Visit Date"
          />
        </div>

        {/* Visit Time field */}
        <div className="pb-4">
          <label
            className={"block font-latoBold text-sm pb-2"}
            htmlFor="visitTime"
          >
            Visit Time
          </label>
          <select
            name="visitTime"
            value={values.visitTime}
            onChange={(event) =>
              setValues({ ...values, visitTime: event.target.value })
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
    </>
  );
}

export default BookingForm;
