import React from "react";
import { useRouter } from "next/router";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";

function Footer() {
    const router = useRouter();

    function handleNavigationToBlog() {
        router.push("/blogs");
    }
    
    function handleNavigationToWebsite() {
        router.push("/blogs");
    }
    
    function handleNavigationToBusinessPortal() {
        router.push("/blogs");
    }

    function HandleNavigateToFacebook () {
        router.push("https://web.facebook.com/healthneutron/?_rdc=2&_rdr")
    }
    
    function HandleNavigateToTwitter () {
        router.push("https://twitter.com/healthneutron")
    }
    
    function HandleNavigateToInstagram () {
        router.push("https://www.instagram.com/accounts/login/?next=%2Fhealth_neutron%2F")
    }
    
    function HandleNavigateToPinterest () {
        router.push("")
    }
  return (
    <div className="w-full bg-black font-montserrat flex flex-row space-x-8 text-sm p-8">
      <div className="flex-1">
        <div className="text-white mb-5">
            <img src="/logo_white.png" alt="Footer Logo" />
        </div>
        <div className="text-white">
          Healthneutron is a preventive healthcare institution that help save a
          life today by either eliminating or preventing the courses of
          underlying health conditions. We do this by first providing free
          training to inform our partners, prospective customers and the general
          public about the various diseases and how it can be prevented. We then
          provide screening for the employees. (BP screening is free) Finally,
          we allow our medical practitioners to talk to the employees based on
          the lab report and advice them. We hope by this we would be able to
          increase life expectancy.
        </div>
        <div className="flex flex-row mt-4 space-x-4">
            <div className="cursor-pointer" onClick={HandleNavigateToFacebook}>
                <FiFacebook size={20} color="white"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToTwitter}>
                <FiTwitter size={20} color="white"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToInstagram}>
                <FiInstagram size={20} color="white"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToPinterest}>
                <FaPinterest size={20} color="white"/>
            </div>
        </div>
      </div>
      <div className="flex text-white flex-col">
        <div className="font-bold text-lg mb-5">PORTALS</div>
        <div className="flex flex-col space-y-2">
          <span onClick={handleNavigationToBusinessPortal} className="cursor-pointer">Business Portal</span>
          <span onClick={handleNavigationToWebsite} className="cursor-pointer">Website</span>
          <span onClick={handleNavigationToBlog} className="cursor-pointer">Blog</span>
        </div>
      </div>
      <div className="flex text-white flex-col">
        <div className="font-bold text-lg mb-5">SERVICES</div>
        <div className="flex flex-col space-y-2">
          <span>Endocrinology : diabetes</span>
          <span>Urology & Oncology</span>
          <span>Cardiology</span>
          <span>Gastroenterology</span>
          <span>Nephrology</span>
          <span>Obs & Gynae</span>
        </div>
      </div>
      <div className="flex text-white flex-col">
        <div className="font-bold text-lg mb-5">CONTACT US</div>
        <div className="flex flex-col space-y-2">
            <span>Technology House,</span>
            <span>East Legon, Accra,</span>
            <span>Ghana +233 59 236 0072</span>
            <span>Info@healthneutron.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
