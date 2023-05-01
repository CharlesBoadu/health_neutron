import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckOutFormModal({ visible = true, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    preferred_time: "",
    country: "",
    address: "",
    state: "",
    city: ""
  });

  const handleSubmit = async (e) => {
    const req = await fetch(``, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify({
        preferred_time: values.preferred_time,
        country: values.country,
        address: values.address,
        state: values.state,
        city: values.city,
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
        toast.error(`Failed to Proceed to Checkout page`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Proceeding to Checkout page");
        setLoading(false);
        // setTimeout(() => {
        //   setHome(true);
        //   setUser(false);
        // }, 3000);
      }
    }

    setValues({
      preferred_time: "",
      country: "",
      address: "",
      state: "",
      city: ""
    });
  };
  return (
    <>
      {!visible ? (
        <></>
      ) : (
        <>
          <ToastContainer />
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white items-center w-[900px] pr-4 pl-4 rounded-md ">
              <div className="w-full flex justify-end top-20 right-5 relative">
                <button
                  className="text-black px-2 border-2 border-black hover:border-[#7d018c] rounded-full"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col w-[500px] mr-5 ml-5 mb-5 mt-[-22px]">
                  {/* First Name input field */}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="name"
                    >
                      First Name *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="name"
                      // value={values.name}
                      // onChange={(event) =>
                      //   setValues({ ...values, name: event.target.value })
                      // }
                      placeholder="Enter First Name"
                    />
                  </div>

                  {/* Last Name input field */}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="name"
                    >
                      Last Name *
                    </label>
                    <input
                      className="w-full bg-gray-100 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="text"
                      name="name"
                      // value={values.name}
                      // onChange={(event) =>
                      //   setValues({ ...values, name: event.target.value })
                      // }
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
                      // value={values.email}
                      // onChange={(event) =>
                      //   setValues({ ...values, email: event.target.value })
                      // }
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
                      // value={values.email}
                      // onChange={(event) =>
                      //   setValues({ ...values, email: event.target.value })
                      // }
                      placeholder="Enter Phone Number"
                    />
                  </div>

                  {/* Test Date Input field*/}
                  <div className="pb-4">
                    <label
                      className={`block font-latoBold text-sm pb-2`}
                      htmlFor="test_date"
                    >
                      Test Date
                    </label>
                    <input
                      className="w-full bg-gray-200 p-2 rounded-md focus:border-[#7d018c] focus:ring-[#7d018c] text-xs"
                      type="date"
                      name="test_date"
                      // value={values.employee_id}
                      // onChange={(event) =>
                      //   setValues({ ...values, employee_id: event.target.value })
                      // }
                      //   placeholder={amount}
                      //   disabled
                    />
                  </div>
                </div>

                <div className="flex mt-[97px] flex-col w-[500px] m-5">
                  {/* Preferred Time Input field*/}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="preferred_time"
                    >
                      Preferred Time
                    </label>
                    <select
                      name="preferred_time"
                      value={values.preferred_time}
                      onChange={(event) =>
                        setValues({ ...values, preferred_time: event.target.value })
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

                  {/* Country field */}
                  <div className="pb-4">
                    <label
                      className={"block font-latoBold text-sm pb-2"}
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <select
                      name="country"
                      value={values.country}
                      onChange={(event) =>
                        setValues({ ...values, country: event.target.value })
                      }
                      className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                    >
                      <option value="">Select Country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                    </select>
                  </div>

                  {/* Address input field */}
                  <div className="pb-4">
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
                  </div>

                  {/* State input field */}
                  <div className="pb-4">
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
                  </div>

                  {/* City input field */}
                  <div className="pb-4">
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
        </>
      )}
    </>
  );
}

export default CheckOutFormModal;
