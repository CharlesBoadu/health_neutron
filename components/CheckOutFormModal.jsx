import React, { useState, CSSProperties, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function CheckOutFormModal({ visible = true, closeModal, amount }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#7d018c");
  const [allCountries, setAllCountries] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contact: "",
    testDate: "",
    timeOfTest: "",
    nationality: "",
    address: "",
    state: "",
    city: "",
  });

  const handleSubmit = async () => {
    const req = await fetch(
      "https://sandbox.healthneutron.com/api/v1/lab/wlk-book",
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDE5ZTY4NjVmMmRmNzRmM2IxOWE1ODE3MWM4ZjQwMmIwNmM3YmFjYWE0MDNiMGU3NGFlN2M1M2YyYzY0ZGM1ODMyYWM5ZjVmNDk1ZDA0ZGUiLCJpYXQiOjE2ODQxNDI4MjIuOTAyNywibmJmIjoxNjg0MTQyODIyLjkwMjcwMiwiZXhwIjoxNzE1NzY1MjIyLjg5Mjk3Nywic3ViIjoiMjUzIiwic2NvcGVzIjpbXX0.fmZSU8HlvS-9T_xoiEBIsHqkAcJM2-VPPqfUhgSdl06EIH3vgL3dY02wiPutowbsg2s9BAmLUPyuniiiGwy2SNxBvc_3lkNhDHDGymRAqfOG-xTt9bmmV904voLzDYptoplEHs25oeKyFzLJX2j-frjDYxmBF5MPJ8GgpRU1q_Y6JgNkVE8x8ogCNWlSphkkN1Bxo6fZGekshi8tNOyj5Ono7GJGCQrZNeCO0kyq25Rv8f38oRZFtRtG2FZSPva_q9DKYNtuhVwyFFJoz_xJ_wQ1BQKLrNBrMoxoyMi6eoUwAvT_smx-iQoL6HBQQuKsUJfhXk3xsChtFD7IynoYgDRX0KRdgNF_y3upcvlt8graieV_Tk6L7mKY02UBPujE8qOLouBWFoC0EcfvPzozqbEodwjc3mMnfNkACtwZDR4WbkU1h2qapXKfPCPQD3gadJUX4TnUsgSkYLT5R1mE5I_K9pq58H38wgl_f9_f4g2YYjH-esPDdnDsXBwnhZnyLFzLJ62L2V74J0bcM2q-WADtUNBRveacZErJk-JG_9s6xAPMT2_588H5jG3dYDYUryBnG7NRdUj-ey7zJgWD_gpVsN5rapnnZq2ChycCtG9yc1Gs8qoJ6lcbvxqd_u2hM3bwAdeKVNVKkJD5YxLZPQG5o4M2TviaJTR6h_uIPkM", //  'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
          labId: "90",
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
          email: values.email,
          requesterToken: "n_a",
          consultationId: "8888",
          patientToken: "n_a",
          labDetails: "Well woman|790",
          labType: "FBC",
          facilitator: "HealthNeutron",
          sampleLocation: "n_a",
          testDate: values.testDate,
          dob: "2023-02-04",
          timeOfTest: values.timeOfTest,
          landmark: "n_a",
          contact: values.contact,
          nationality: values.nationality,
          amount: amount,
          cart: "3",
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
        toast.error(`Failed to Proceed to Checkout page`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Proceeding to Payment page");
        setLoading(false);
        setTimeout(() => {
          router.push({
            pathname: "/paymentPage",
            query: {
              name: res?.data.name,
              contact: values.contact,
              amount: amount,
              token: res?.token,
              request_id: res?.request_id,
            },
          });
        }, 3000);
      }
    }

    setValues({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      contact: "",
      testDate: "",
      timeOfTest: "",
      nationality: "",
      address: "",
      state: "",
      city: "",
    });
  };


  return (
    <>
      {!visible ? (
        <></>
      ) : (
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
          <div className="md:fixed md:inset-0 md:bg-[rgba(0,0,0,0.4)] md:backdrop-blur-sm md:z-10 md:overflow-y-auto md:pt-4 hidden sm:block">
            <div className="bg-white absolute right-0 animate-in slide-in-from-right-96 items-center w-[700px] pr-4 pl-4 rounded-md transition duration-700">
              <div className="w-full flex justify-end top-20 right-5 relative">
                <button
                  className="text-black px-2 border-2 border-black hover:border-[#7d018c] rounded-full"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col w-full mr-5 ml-5 mb-5 mt-[-22px]">
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

                  {/* Contact input field */}
                  <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="contact"
                    >
                      Contact *
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
                </div>

                <div className="flex mt-[97px] flex-col w-full m-5">
                  {/* Preferred Time Input field*/}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="timeOfTest"
                    >
                      Preferred Time
                    </label>
                    <select
                      name="timeOfTest"
                      value={values.timeOfTest}
                      onChange={(event) =>
                        setValues({
                          ...values,
                          timeOfTest: event.target.value,
                        })
                      }
                      className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                    >
                      <option value="">Select Preferred Time</option>
                      <option value="7am - 9am">7am - 9am</option>
                      <option value="9am - 11am">9am -11am</option>
                      <option value="11am - 1pm">11am -1pm</option>
                      <option value="1pm - 3pm">1pm - 3pm</option>
                      <option value="3pm - 5pm">3pm - 5pm</option>
                    </select>
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
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  {/* nationality field */}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="nationality"
                    >
                      Nationality
                    </label>
                    <select
                      name="nationality"
                      value={values.nationality}
                      onChange={(event) =>
                        setValues({
                          ...values,
                          nationality: event.target.value,
                        })
                      }
                      className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                    >
                      <option value="">Select nationality</option>
                      {countries.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))}
                    </select>
                  </div>

                  {/* Address input field */}
                  {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="address"
                    >
                      Address *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={(event) =>
                        setValues({ ...values, address: event.target.value })
                      }
                      placeholder="Enter Address"
                    />
                  </div> */}

                  {/* Test Date Input field*/}
                  <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="testDate"
                    >
                      Test Date
                    </label>
                    <input
                      className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="date"
                      name="testDate"
                      value={values.testDate}
                      onChange={(event) =>
                        setValues({ ...values, testDate: event.target.value })
                      }
                      //   placeholder={amount}
                      //   disabled
                    />
                  </div>

                  {/* State input field */}
                  {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="state"
                    >
                      State *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={(event) =>
                        setValues({ ...values, state: event.target.value })
                      }
                      placeholder="Enter State"
                    />
                  </div> */}

                  {/* City input field */}
                  {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="city"
                    >
                      City *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={(event) =>
                        setValues({ ...values, city: event.target.value })
                      }
                      placeholder="Enter City"
                    />
                  </div> */}
                  {/* Submit Button */}
                  <div className="pb-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="text-sm bg-black font-latoBold text-white py-3 mt-4 rounded-lg w-full hover:bg-[#7d018c]"
                    >
                      Book
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      <span className="font-extrabold text-[#7d018c]">
                        NB:{" "}
                      </span>
                      After booking you will be redirected to a checkout page
                      where you will make payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-10 block md:hidden overflow-y-auto animate-in slide-in-from-top">
            <div className="bg-white flex flex-col items-center justify-center w-[90%] h-contain block md:hidden block pr-4 pl-4 pt-10">
              <div className="w-full flex justify-end -top-5 relative">
                <button
                  className="text-black px-2 border-[1px] border-black hover:border-[#7d018c] rounded-full"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>

              <div className="flex flex-col w-[80%] mr-5 ml-5 mb-5 mt-[-22px]">
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

                {/* Contact input field */}
                <div className="pb-4">
                  <label
                    className={`block font-latoBold text-sm pb-2`}
                    htmlFor="contact"
                  >
                    Contact *
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
              </div>

              <div className="flex flex-col w-[80%] m-5">
                {/* Preferred Time Input field*/}
                <div className="pb-4">
                  <label
                    className={"block font-latoBold text-sm pb-2"}
                    htmlFor="timeOfTest"
                  >
                    Preferred Time
                  </label>
                  <select
                    name="timeOfTest"
                    value={values.timeOfTest}
                    onChange={(event) =>
                      setValues({
                        ...values,
                        timeOfTest: event.target.value,
                      })
                    }
                    className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                  >
                    <option value="">Select Preferred Time</option>
                    <option value="7am - 9am">7am - 9am</option>
                    <option value="9am - 11am">9am -11am</option>
                    <option value="11am - 1pm">11am -1pm</option>
                    <option value="1pm - 3pm">1pm - 3pm</option>
                    <option value="3pm - 5pm">3pm - 5pm</option>
                  </select>
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* nationality field */}
                <div className="pb-4">
                  <label
                    className={"block font-latoBold text-sm pb-2"}
                    htmlFor="nationality"
                  >
                    Nationality
                  </label>
                  <select
                    name="nationality"
                    value={values.nationality}
                    onChange={(event) =>
                      setValues({
                        ...values,
                        nationality: event.target.value,
                      })
                    }
                    className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                  >
                    <option value="">Select nationality</option>
                    {allCountries.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Address input field */}
                {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="address"
                    >
                      Address *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={(event) =>
                        setValues({ ...values, address: event.target.value })
                      }
                      placeholder="Enter Address"
                    />
                  </div> */}

                {/* Test Date Input field*/}
                <div className="pb-4">
                  <label
                    className={`block font-latoBold text-sm pb-2`}
                    htmlFor="testDate"
                  >
                    Test Date
                  </label>
                  <input
                    className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                    type="date"
                    name="testDate"
                    value={values.testDate}
                    onChange={(event) =>
                      setValues({ ...values, testDate: event.target.value })
                    }
                    //   placeholder={amount}
                    //   disabled
                  />
                </div>

                {/* State input field */}
                {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="state"
                    >
                      State *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={(event) =>
                        setValues({ ...values, state: event.target.value })
                      }
                      placeholder="Enter State"
                    />
                  </div> */}

                {/* City input field */}
                {/* <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="city"
                    >
                      City *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={(event) =>
                        setValues({ ...values, city: event.target.value })
                      }
                      placeholder="Enter City"
                    />
                  </div> */}
                {/* Submit Button */}
                <div className="pb-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-sm bg-black font-latoBold text-white py-3 mt-4 rounded-lg w-full hover:bg-[#7d018c]"
                  >
                    Book
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-extrabold text-[#7d018c]">NB: </span>
                    After booking you will be redirected to a checkout page
                    where you will make payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CheckOutFormModal;
