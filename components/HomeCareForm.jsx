import React, { useState, useEffect, CSSProperties } from "react";
import Homecare_services from "../public/Homecare_services.jpg";
import Image from "next/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import PuffLoader from "react-spinners/PuffLoader";
import { bearerToken } from "../bearerToken";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function HomeCareForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [packageTypes, setPackageTypes] = useState([]);
  const [servicePrices, setServicePrices] = useState([]);
  const [color, setColor] = useState("#7d018c");
  const [values, setValues] = useState({
    service_type: "",
    package: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    location: "",
    gender: "",
    visitDate: "",
    visitTime: "",
  });

  useEffect(() => {
    const fetchAllPackageTypes = async () => {
      try {
        const response = await fetch(
          "https://sandbox.healthneutron.com/api/v1/homeservice/price-list/by-category?key=doctor_type&partnerToken=",
          {
            Method: "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              Authorization:
                `Bearer ${bearerToken.token}`, //  'Access-Control-Allow-Origin':'*'
            },
          }
        );
        const fetchReponse = await response.json();
        setPackageTypes(fetchReponse?.data);
        if (values.service_type == "General Practice") {
          setServicePrices(packageTypes[0].price_list);
        } else if (values.service_type == "Dietician") {
          setServicePrices(packageTypes[1].price_list);
        } else if (values.service_type == "Psychologist") {
          setServicePrices(packageTypes[2].price_list);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPackageTypes();
  }, [values.service_type]);

  const handleSubmit = async (e) => {
    const req = await fetch(
      `https://sandbox.healthneutron.com/api/v1/service/book`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTc4MjRjYjU4NTYxYTczZTAxMDRlMzVkNTI1MjM5ODY0MmJlMzgwMDAzYjM4ZGVlNGE5MjE0MGVjNWE5MWEzNzM5ZjIzMDA0N2U5NWYwNWEiLCJpYXQiOjE2ODMwMjMwNTguOTE2MTg1LCJuYmYiOjE2ODMwMjMwNTguOTE2MTg5LCJleHAiOjE3MTQ2NDU0NTguODkzNTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZLi9YhRFQ9KGzNJ9RJVLO5Am19tPxlJY0Q_tLNY9TvERxc4lpy5ok3zWDZnpK9Qb_pqqdcjfz0vBM3xUYgM-ITq9GpHtHEmfjDBmD90LH23ydOGwF9WljZM_RaNobubRkfF6wiIrnS3VSTJKtv6Qql3KUPfoAlYp18mx7yig3kvcCVJ9Nt11W5zBxVkWabTgFKhs_Qc-XqM2_5tU5O0yDsOxTKwKOBfCLCPI6peDPkiF2nLYsWNSGc1Jsaj6QnDZ0WB_boX-7l3ZgEFgF8zJSH3QQAXTmQQpqfjBHSSEOVcNFFCJfJLt8n_dBUEf6Y-opmnaVED92147loTNO7VNuzBZjbMHf8vI5nB-exRBTH80VN9NAGFHxA85RS4kK6kFHmlaBfYbHwZFWftfk3bHwXVdKfa3vGT8TLoQQO3dskDVT8Om53ScrR3RFg0Fu-i5pJoE0Np2MJuPDKQ5L-mITAHymN0aAe6dWRXiN3B7-Wc0qYGDkM3zFL95ekNdkPffgcG8wApTSsZhsyYy1kx-b1SI__IWqyPBd5NpHsrEM5ZRApFniVyJ-u8C_jQ4vwDHw61MHEUMZVpeXutWuvkGSt9NZM2VMSNDr1StCGasMODOnflhQdlXS0oHOAsmA4HjUPH7Cr0JhwvXBOgCdOl_vc2IkOVpYBQ83tKedW5FrTA", //  'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
          package: values.package,
          visitTime: values.visitTime,
          visitDate: values.visitDate,
          contact: values.contact,
          requestType: "Walkin",
          email: values.email,
          location: values.location,
          amount: values.package,
          bookingType: 3,
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
        toast.error(`Failed to Book for Homecare`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        toast.success("Homecare Booking completed successfully");
        setLoading(false);
        setTimeout(() => {
          router.push("/homecare");
        }, 3000);
      }
    }

    setValues({
      service_type: "",
      package: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      location: "",
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
          <div className="md:flex-1 hidden sm:block text-black p-5">
            <div className="rounded-2xl relative h-full w-full mb-4 flex justify-center text-center object-cover">
              <Image
                alt="AddUser form image"
                src={Homecare_services}
                fill
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
          </div>
          <div className="md:flex-1 md:m-5 mt-5 hidden md:block">
            {/* Service Type field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="service_type"
              >
                Service Type *
              </label>
              <select
                name="service_type"
                value={values.service_type}
                onChange={(event) =>
                  setValues({ ...values, service_type: event.target.value })
                }
                placeholder="Select Dr. Type"
                className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
              >
                <option value="">Select Dr. Type</option>
                {packageTypes.map((packageType, index) => (
                  <option key={index}>{packageType.cat_name}</option>
                ))}
              </select>
            </div>

            {/* Package Type field */}
            <div className="pb-4">
              <label
                className={"block font-latoBold text-sm pb-2"}
                htmlFor="package"
              >
                Package Type *
              </label>
              <select
                name="package"
                value={values.package}
                onChange={(event) =>
                  setValues({ ...values, package: event.target.value })
                }
                className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
              >
                <option value="">Select Package Type</option>
                {servicePrices.map((data, index) => (
                  <option key={index}>
                    {data.name} - {data.price}
                  </option>
                ))}
                {/* <option value="general_practice">General Practice</option>
                <option value="dietician">Dietician</option>
                <option value="psychologist">Psychologist</option>
                <option value="nursing">Nursing</option>
                <option value="physiotherapy">Physiotherapy</option> */}
              </select>
            </div>

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
          </div>

          <div className="flex-1 m-5 flex flex-col hidden md:block">
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
            <div className="pb-4 hidden sm:block">
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
          src={Homecare_services}
          fill
          className="object-cover rounded-2xl h-full w-full"
        />
      </div>
      <div className="mr-10 ml-10 mx-auto block md:hidden font-montserrat">
        {/* Service Type field */}
        <div className="pb-4">
          <label
            className={"block font-latoBold text-sm pb-2"}
            htmlFor="service_type"
          >
            Service Type *
          </label>
          <select
            name="service_type"
            value={values.service_type}
            onChange={(event) =>
              setValues({ ...values, service_type: event.target.value })
            }
            placeholder="Select Dr. Type"
            className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          >
            <option value="">Select Dr. Type</option>
            {packageTypes.map((packageType, index) => (
              <option key={index}>{packageType.cat_name}</option>
            ))}
          </select>
        </div>

        {/* Package Type field */}
        <div className="pb-4">
          <label
            className={"block font-latoBold text-sm pb-2"}
            htmlFor="package"
          >
            Package Type *
          </label>
          <select
            name="package"
            value={values.package}
            onChange={(event) =>
              setValues({ ...values, package: event.target.value })
            }
            className="w-full rounded-lg bg-gray-200 text-xs focus:border-[#7d018c] focus:ring-[#7d018c]"
          >
            <option value="">Select Package Type</option>
            {servicePrices.map((data, index) => (
              <option key={index}>
                {data.name} - {data.price}
              </option>
            ))}
            {/* <option value="general_practice">General Practice</option>
                <option value="dietician">Dietician</option>
                <option value="psychologist">Psychologist</option>
                <option value="nursing">Nursing</option>
                <option value="physiotherapy">Physiotherapy</option> */}
          </select>
        </div>

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
      </div>
      <div className="mr-10 ml-10 mx-auto block md:hidden font-montserrat">
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

export default HomeCareForm;
