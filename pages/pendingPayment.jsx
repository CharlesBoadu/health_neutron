import React, { useState, CSSProperties, useEffect } from "react";
import TopNav from "../components/TopNav";
import TopNavSecond from "../components/TopNavSecond";
import Footer from "../components/Footer";
import FooterSecond from "../components/FooterSecond";
import { DotLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Pusher from "pusher-js";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function pendingPayment() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#7d018c");

  const router = useRouter();
  const { token } = router.query;
  console.log("Token", token);


  useEffect(() => {
    const channelname = token + "-ipncallback";
    Pusher.logToConsole = true;
    const pusherPrivate = new Pusher("5eb52517408396ca89d6", {
      cluster: "eu",
    });
    const channel = pusherPrivate.subscribe(channelname);

    pusherPrivate.bind("payment-status-event", function (data) {
      const obj = JSON.parse(JSON.stringify(data));
      console.log("This is the object ****** ", obj);
      if (obj.data.status === "Success") {
        // Your React-specific code here
        // Example: update state, show/hide modals, display toast, etc.
        // Make sure to use appropriate React libraries for these operations.
        // Here's a simplified example using React Bootstrap and react-toastify:
        hideModals(); // Example function to hide modals
        showToast("Payment Successful"); // Example function to show toast
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      channel.unbind("payment-status-event");
      pusherPrivate.unsubscribe(channelname);
    };
  }, []);
  // let channelname = token + "-ipncallback";

  // Pusher.logToConsole = true;
  // const pusherPrivate = new Pusher("5eb52517408396ca89d6", {
  //   cluster: "eu",
  // });
  // const channel = pusherPrivate.subscribe(channelname);

  // channel.bind("payment-status-event", function (data) {
  //   const obj = JSON.parse(JSON.stringify(data));
  //   console.log("This is the object ****** ", obj);
  //   if (obj.data.status === "Success") {
  //     $("#myModalMtn").modal("hide");
  //     $("#myModalVodafone").modal("hide");
  //     $("#myModalTigo").modal("hide");
  //     toast.success("Payment Successful");
  //     setTimeout(function () {
  //       window.location.href = "/";
  //     }, 2000);
  //   }
  // });

  return (
    <>
      <ToastContainer />
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
