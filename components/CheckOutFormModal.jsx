import React from "react";

function CheckOutFormModal({ visible = true, closeModal }) {
  return (
    <>
      {!visible ? (
        <></>
      ) : (
        <>
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
            <div className="flex flex-col w-[500px] m-5">
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
                  htmlFor="gender"
                >
                  Preferred Time
                </label>
                <select
                  name="preferred_time"
                  // value={values.privilege}
                  // onChange={(event) =>
                  //   setValues({ ...values, privilege: event.target.value })
                  // }
                  className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
                >
                  <option value="">Select Preferred Time</option>
                  <option value="">7am - 9am</option>
                  <option value="">9am -11am</option>
                  <option value="">11am -1pm</option>
                  <option value="">1pm - 3pm</option>
                  <option value="">3pm - 5pm</option>
                </select>
              </div>

              {/* Country field */}
              <div className="pb-4">
                <label
                  className={"block font-latoBold text-sm pb-2"}
                  htmlFor="gender"
                >
                  Country
                </label>
                <select
                  name="country"
                  // value={values.privilege}
                  // onChange={(event) =>
                  //   setValues({ ...values, privilege: event.target.value })
                  // }
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
                  // value={values.email}
                  // onChange={(event) =>
                  //   setValues({ ...values, email: event.target.value })
                  // }
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
                  // value={values.email}
                  // onChange={(event) =>
                  //   setValues({ ...values, email: event.target.value })
                  // }
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
                  // value={values.email}
                  // onChange={(event) =>
                  //   setValues({ ...values, email: event.target.value })
                  // }
                  placeholder="Enter City"
                />
              </div>
              {/* Submit Button */}
              <div className="pb-4">
                <button
                  type="submit"
                  // onClick={handleSubmit}
                  className="text-sm bg-black font-latoBold text-white py-3 mt-4 rounded-lg w-full hover:bg-[#7d018c]"
                >
                  Book
                </button>
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
