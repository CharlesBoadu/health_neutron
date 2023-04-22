import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Options = [
    {
        list: "Labs",
    },
    {
        list: "Home Care",
    }, 
    {
        list: "Vaccines",
    },
    {
        list: "Blogs",
    }
]

function TopNav() {
  return (
    <div className="bg-black py-2 flex flex-row w-full space-x-4 font-montserrat px-2">
      <div className="flex w-[300px] text-white pl-2">Health Neutron</div>
      <div className="flex-1 w-[600px] flex flex-row">
        <div className="flex w-[50px] z-10  px-2 mr-[-62px] rounded-sm justify-center items-center cursor-pointer">
          {/* <div>All</div>
          <div>
             <IoMdArrowDropdown />
          </div> */}
          <select
              className="font-semibold text-sm block w-[70px] px-4 py-2 bg-[#e3e6e6] border border-gray-200 active:border-gray-300 outline-none rounded-sm"
            //   required={true}
            //   onChange={(e) => {
            //     setValues({
            //       ...values,
            //       which_employee: e.target.value,
            //     });
            //   }}
              placeholder="All"
            //   value={values.which_employee}
            >
            {/* {console.log(fetchAllEmployees)} */}
            <option value="" className="">
                All
            </option>
              {Options.map((em, i) => (
                <option key={i} className="font-montserrat text-sm">
                  {em.list}
                </option>
              ))}
            </select>
        </div>
        <div>
          <input type="text" className="w-[700px] rounded-lg z-2" />
        </div>
        <div className="flex w-[50px] bg-[#f3a847] ml-[-50px] justify-center items-center cursor-pointer">
          <FiSearch size={25} />
        </div>
      </div>
      {/* <div className='flex w-[50px] bg-[#f3a847] justify-center items-center'>
        </div> */}
      <div className="flex flex-row w-[100px] text-white">
        <div>
          <div className="font-montserrat font-bold ml-4 mb-[-12px] mt-[-5px]">
            0
          </div>
          <div>
            <BsCart4 size={35} />
          </div>
        </div>
        <div className="mt-4">cart</div>
      </div>
    </div>
  );
}

export default TopNav;
