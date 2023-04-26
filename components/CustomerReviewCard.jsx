import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TbTilde } from "react-icons/tb";

function CustomerReviewCard() {
  return (
    <div className="flex flex-row space-x-8 justify-evenly mr-[80px] ml-[80px] mt-[40px]">
      <div className="h-[30vh] w-[350px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
        <div className="m-4 font-montserrat text-sm py-2 leading-6">
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
        <div className="flex justify-end mb-[100px] mt-[-40px] mr-[10px]">
          <ImQuotesRight color="#7d018c" />
        </div>
      </div>
      <div className="h-[30vh] w-[350px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
        <div className="m-4 font-montserrat text-sm py-2 leading-6">
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
        <div className="flex justify-end mb-[100px] mt-[-40px] mr-[10px]">
          <ImQuotesRight color="#7d018c" />
        </div>
      </div>
      <div className="h-[30vh] w-[350px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
      <div className="m-4 font-montserrat text-sm py-2 leading-6">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c" />
          </div>
          Thank you! I am pleased to have used their service to travel,
          the urgency was well understood by them and they delivered 
          exactly the service they promised.
          <div className="flex items-center justify-center mt-2">
            <TbTilde />
            <span className="ml-2">
                CYNTHIA ABENA HOMELULU
            </span>
          </div>
        </div>
        <div className="flex justify-end mb-[100px] mt-[-40px] mr-[10px]">
          <ImQuotesRight color="#7d018c" />
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
