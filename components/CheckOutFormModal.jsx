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
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTYwZmFiZmMzOTBlYmQ0M2FmMjc2ZjlmOTU3M2NjNTBjODAwZjk3MGU3N2FjZDM0N2E2ZTFlOGJiNjRkNDIwMDg4ZjEyZWY1ZjFlOWFmYmUiLCJpYXQiOjE2ODMxMjgxNTMuMjQ5MDE3LCJuYmYiOjE2ODMxMjgxNTMuMjQ5MDIxLCJleHAiOjE3MTQ3NTA1NTMuMjM2Nzg5LCJzdWIiOiI0OTQiLCJzY29wZXMiOltdfQ.pPOziLokbsT9pgSG13fuCIpbzSnxS5UFPwRaXc4A2NjbHQ6cBpg5J3zGbIJlxaYf9YHUThpiDCta7gTiJbP_YfulZMyO_k7_MwQEXreanV1WL2zayyhHUIS_cqx2e3RaEM0Mie-vrgEy8RXuJt6DGX6WpXTtxE9yqGAOBy_26hdKdpKE_R3H-nU6CAvrzGxUF6uAxKsl7z64l-hyhf3x8F7kbBL6BQeIlhGTVHvH_SnCWY3VXjgqB86HSiLP5X_ccL-UvmFLSMXuxCNMQBqrEEwCeQ6RAqsdgJZkzLwr_wC3bF3fGkPFf9qvn9V5raEmKRb6JE31QR2vUdXietTG-J5RnePAvmPGqZOUMn8irmh8SZ7CNNekPfjPwBGEXPMS0DdvzEbe5r4qeFzmQbkB4gLRZ5a-5wTYb_4WsGf5SWY-9tX4JuAXFNHuwmdQz_2iDsl173PmehxdRAkJyCss7wcnc6Tpq4UfoQw55G8ceT_Tw1gxDEdg2qdA70SbSBUvq9sX3Upj33VKnE8QjwF3rKSv5XeUFglP3udTBrPDHzhd83obKvcWEzBXzGe-2c-aF4tJ4jRyd64-TTcxQOp4JpfyixMRDiF0CZtTrGAK6x2zhPmZkkTQ1KGVfQSO4ReA79Fj14JKQKJeVhguju42l3y78ccaclYbgtTJccV64h0", //  'Access-Control-Allow-Origin':'*'
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

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia (Federated States of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
  ];

  // useEffect(() => {
  //   const fetchAllCountries = async () => {
  //     try {
  //       const req = await fetch("https://restcountries.com/v3.1/all");
  //       const fetchResponse = await req.json();
  //       setAllCountries(fetchResponse?.data);
  //       console.log("hello", allCountries);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchAllCountries();
  // }, [])

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
