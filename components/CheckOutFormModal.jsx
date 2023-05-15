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

  // const countries = [
  //   "Afghanistan",
  //   "Albania",
  //   "Algeria",
  //   "Andorra",
  //   "Angola",
  //   "Antigua and Barbuda",
  //   "Argentina",
  //   "Armenia",
  //   "Australia",
  //   "Austria",
  //   "Azerbaijan",
  //   "Bahamas",
  //   "Bahrain",
  //   "Bangladesh",
  //   "Barbados",
  //   "Belarus",
  //   "Belgium",
  //   "Belize",
  //   "Benin",
  //   "Bhutan",
  //   "Bolivia (Plurinational State of)",
  //   "Bosnia and Herzegovina",
  //   "Botswana",
  //   "Brazil",
  //   "Brunei Darussalam",
  //   "Bulgaria",
  //   "Burkina Faso",
  //   "Burundi",
  //   "Cabo Verde",
  //   "Cambodia",
  //   "Cameroon",
  //   "Canada",
  //   "Central African Republic",
  //   "Chad",
  //   "Chile",
  //   "China",
  //   "Colombia",
  //   "Comoros",
  //   "Congo",
  //   "Costa Rica",
  //   "Côte d'Ivoire",
  //   "Croatia",
  //   "Cuba",
  //   "Cyprus",
  //   "Czech Republic",
  //   "Democratic People's Republic of Korea",
  //   "Democratic Republic of the Congo",
  //   "Denmark",
  //   "Djibouti",
  //   "Dominica",
  //   "Dominican Republic",
  //   "Ecuador",
  //   "Egypt",
  //   "El Salvador",
  //   "Equatorial Guinea",
  //   "Eritrea",
  //   "Estonia",
  //   "Eswatini",
  //   "Ethiopia",
  //   "Fiji",
  //   "Finland",
  //   "France",
  //   "Gabon",
  //   "Gambia",
  //   "Georgia",
  //   "Germany",
  //   "Ghana",
  //   "Greece",
  //   "Grenada",
  //   "Guatemala",
  //   "Guinea",
  //   "Guinea-Bissau",
  //   "Guyana",
  //   "Haiti",
  //   "Honduras",
  //   "Hungary",
  //   "Iceland",
  //   "India",
  //   "Indonesia",
  //   "Iran (Islamic Republic of)",
  //   "Iraq",
  //   "Ireland",
  //   "Israel",
  //   "Italy",
  //   "Jamaica",
  //   "Japan",
  //   "Jordan",
  //   "Kazakhstan",
  //   "Kenya",
  //   "Kiribati",
  //   "Kuwait",
  //   "Kyrgyzstan",
  //   "Lao People's Democratic Republic",
  //   "Latvia",
  //   "Lebanon",
  //   "Lesotho",
  //   "Liberia",
  //   "Libya",
  //   "Liechtenstein",
  //   "Lithuania",
  //   "Luxembourg",
  //   "Madagascar",
  //   "Malawi",
  //   "Malaysia",
  //   "Maldives",
  //   "Mali",
  //   "Malta",
  //   "Marshall Islands",
  //   "Mauritania",
  //   "Mauritius",
  //   "Mexico",
  //   "Micronesia (Federated States of)",
  //   "Monaco",
  //   "Mongolia",
  //   "Montenegro",
  //   "Morocco",
  //   "Mozambique",
  //   "Myanmar",
  //   "Namibia",
  //   "Nauru",
  //   "Nepal",
  //   "Netherlands",
  //   "New Zealand",
  //   "Nicaragua",
  //   "Niger",
  //   "Nigeria",
  //   "North Macedonia",
  //   "Norway",
  //   "Oman",
  //   "Pakistan",
  //   "Palau",
  //   "Panama",
  //   "Papua New Guinea",
  //   "Paraguay",
  //   "Peru",
  //   "Philippines",
  //   "Poland",
  //   "Portugal",
  //   "Qatar",
  //   "Republic of Korea",
  //   "Republic of Moldova",
  //   "Romania",
  //   "Russian Federation",
  //   "Rwanda",
  //   "Saint Kitts and Nevis",
  //   "Saint Lucia",
  //   "Saint Vincent and the Grenadines",
  //   "Samoa",
  // ];

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
                      {/* {countries.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))} */}
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, Democratic Republic of the Congo
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Cote D'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curacao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libyan Arab Jamahiriya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthelemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="CS">Serbia and Montenegro</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.s.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
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
