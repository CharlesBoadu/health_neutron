import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TbTilde } from "react-icons/tb";

function CustomerReviewCard() {
  return (
    <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-20 justify-evenly mr-[80px] md:ml-[100px] ml-[50px] md:mt-[50px] mt-[1500px]">
      <div className="md:h-[30vh] md:w-[350px] w-[200px] ml-[-20px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
        <div className="md:m-4 m-8 font-montserrat text-sm py-2 md:leading-6 leading-loose">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c"/>
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
          <ImQuotesRight color="#7d018c"/>
        </div>
      </div>
      <div className="md:h-[30vh] md:w-[350px] ml-[-20px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
        <div className="md:m-4 m-8 font-montserrat text-sm py-2 md:leading-6 leading-loose">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c"/>
          </div>
          So far the best, Joined their app somewhere last year, and now my 
          colleagues are on it too, tells you how useful it has become.
          <div className="flex items-center justify-center mt-2">
            <TbTilde />
            <span className="ml-2">MICHAEL OHENE GYAMFI</span>
          </div>
        </div>
        <div className="flex justify-end mb-[100px] mt-[-40px] mr-[10px]">
          <ImQuotesRight color="#7d018c"/>
        </div>
      </div>
      <div className="md:h-[30vh] md:w-[350px] ml-[-20px] rounded-lg bg-white flex flex-col justify-between shadow-xl hover:cursor-pointer">
      <div className="md:m-4 m-8 font-montserrat text-sm py-2 md:leading-6 leading-loose">
          <div className="mb-1">
            <ImQuotesLeft color="#7d018c"/>
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
          <ImQuotesRight color="#7d018c"/>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
