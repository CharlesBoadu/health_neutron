import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TbTilde } from "react-icons/tb";

function CustomerReviewSm() {
  return (
    <div className="block md:hidden mr-10 ml-10 mb-10 flex flex-col space-y-10">
      <div className="flex flex-col space-y-6 h-contain rounded-lg bg-gray-200">
        <div className="m-6 font-montserrat text-sm py-2">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c" />
          </div>
          Quality service, heard from a friend so I decided to download their
          app, consultations has been free and a lab guy has been to my house to
          come take samples. No stress at all.
          <div className="flex items-center justify-center mt-2">
            <TbTilde />
            <span className="ml-2">RITA ABAAFI</span>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <ImQuotesRight color="#7d018c" className="mt-[-45px] mr-6"/>
        </div>
      </div>
      <div className=" flex flex-col space-y-6 h-contain rounded-lg bg-gray-200">
        <div className="m-6 font-montserrat text-sm py-2">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c" />
          </div>
          So far the best, Joined their app somewhere last year, and now my
          colleagues are on it too, tells you how useful it has become.
          <div className="flex items-center justify-center mt-2">
            <TbTilde />
            <span className="ml-2">MICHAEL OHENE GYAMFI</span>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <ImQuotesRight color="#7d018c" className="mt-[-45px] mr-6"/>
        </div>
      </div>
      <div className=" flex flex-col space-y-6 h-contain rounded-lg bg-gray-200">
        <div className="m-6 font-montserrat text-sm py-2">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c" />
          </div>
          Thank you! I am pleased to have used their service to travel, the
          urgency was well understood by them and they delivered exactly the
          service they promised.
          <div className="flex items-center justify-center mt-2">
            <TbTilde />
            <span className="ml-2">CYNTHIA ABENA HOMELULU</span>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <ImQuotesRight color="#7d018c" className="mt-[-45px] mr-6"/>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewSm;
