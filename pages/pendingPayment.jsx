import React, { useState, CSSProperties } from "react";
import TopNav from "../components/TopNav";
import TopNavSecond from "../components/TopNavSecond";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import { DotLoader } from "react-spinners";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function pendingPayment() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#7d018c");
  return (
    <>
      <TopNav />
      <TopNavSecond />
      <div className="text-4xl text-center text-[#62276a] font-montserrat mt-10">
        Payment Pending, Awaiting confirmation
      </div>
      {loading && (
      <div className="mt-10 mb-10">
        <DotLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )}
      <Footer />
      <FooterSecond />
    </>
  );
}

export default pendingPayment;
