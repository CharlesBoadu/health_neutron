import React from "react";
import { useRouter } from "next/router";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

function Footer() {
    const router = useRouter();

    function handleNavigationToBlog() {
      window.open("https://healthneutron.com/blogs/", '_blank');
    }
    
    function handleNavigationToWebsite() {
      window.open("https://healthneutron.com/", '_blank');
    }
    
    function handleNavigationToBusinessPortal() {
      window.open("https://healthneutron.com/", '_blank');
    }

    function HandleNavigateToFacebook () {
        window.open("https://web.facebook.com/healthneutron/?_rdc=2&_rdr", '_blank');
    }
    
    function HandleNavigateToTwitter () {
        window.open("https://twitter.com/healthneutron", '_blank');      
    }
    
    function HandleNavigateToInstagram () {
      window.open("https://www.instagram.com/accounts/login/?next=%2Fhealth_neutron%2F", '_blank');      
    }
    
    function HandleNavigateToLinkedIn () {
      window.open("https://www.instagram.com/accounts/login/?next=%2Fhealth_neutron%2F", '_blank');      
    }

  return (
    <div className="md:w-full w-screen bg-[#232f3e] md:font-montserrat flex md:flex-row flex-col md:space-x-8 space-y-4 md:text-sm text-xl p-8">
      <div className="flex-1">
        <div className="text-white mb-5 ">
            <img src="/logo_white.png" alt="Footer Logo" className=""/>
        </div>
        <div className="text-white md:text-base text-sm md:leading-5 font-montserrat">
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
        <div className="flex flex-row md:mt-4 mt-8 md:space-x-4 space-x-8">
            <div className="cursor-pointer" onClick={HandleNavigateToFacebook}>
                <FiFacebook size={20} color="white" className="md:h-6 md:w-7 h-8 w-8"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToTwitter}>
                <FiTwitter size={20} color="white" className="md:h-6 md:w-7 h-8 w-8"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToInstagram}>
                <FiInstagram size={20} color="white" className="md:h-6 md:w-7 h-8 w-8"/>
            </div>
            <div className="cursor-pointer" onClick={HandleNavigateToLinkedIn}>
                <FiLinkedin size={20} color="white" className="md:h-6 md:w-7 h-8 w-8"/>
            </div>
        </div>
      </div>
      <div className="flex md:flex-row md:space-x-6 flex-col md:py-0 md:justify-evenly md:space-y-0 space-y-8 py-8">
        <div className="flex text-white flex-col">
          <div className="font-bold md:text-lg text-sm mb-5">PORTALS</div>
          <div className="flex flex-col md:space-y-2 space-y-2 md:text-base text-xs font-montserrat">
            <span onClick={handleNavigationToBusinessPortal} className="cursor-pointer">Business Portal</span>
            <span onClick={handleNavigationToWebsite} className="cursor-pointer">Website</span>
            <span onClick={handleNavigationToBlog} className="cursor-pointer">Blog</span>
          </div>
        </div>
        <div className="flex text-white flex-col">
          <div className="font-bold md:text-lg text-sm mb-5">SERVICES</div>
          <div className="flex flex-col md:space-y-2 space-y-2 md:text-base text-xs font-montserrat">
            <span>Homecare</span>
            <span>Mobile Pharmacy</span>
            <span>Online consultations</span>
            <span>Mobile Labs</span>
            <span>Health Talks and training</span>
          </div>
        </div>
        <div className="flex text-white flex-col">
          <div className="font-bold md:text-lg text-sm mb-5">CONTACT US</div>
          <div className="flex flex-col md:space-y-2 space-y-2 md:text-base text-xs font-montserrat">
              <span>Technology House,</span>
              <span>East Legon, Accra,</span>
              <span>Adjacent ABSA Bank,</span>
              <span>Ghana +233 59 236 0072</span>
              <span>Info@healthneutron.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
