"use client";
import ContactUsForm from "@/app/(components)/ContactUsForm";
import { useGlobalContext } from "@/app/context/store";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(false);
  }, [setImageSlide]);

  const customSize: SizeProp = "sm";
  return (
    <>
      <head>
      <title>Contact Us - Naiminath Ayurveda</title>
      <meta name="description" content=" "/>
      </head>

      <div className="flex flex-col items-center justify-center font-sans h-full w-full pb-16">
        <div
          className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
    text-[#54595f] md:text-[32px] text-[28px] font-extrabold border-b-[0.009px] border-[#8b939465]"
        >
          Contact Us
        </div>
        <div className="flex md:flex-row flex-col justify-between w-[70vw] mt-10 items-start text-[#333333] md:gap-0 gap-4">
          <div className=" text-[18px] font-serif">
            Naiminath Ayurvedic Medical College
            <br /> Hospital and Research Centre <br />
            Agra
          </div>
          <div className="text-[15px] font-medium font-serif">
            <strong className="text-[15px]">Address-</strong>
            <br />
            N.H. 19, Nawalpur, Kuberpur,
            <br /> Behind Maruti TrueValue Showroom,
            <br />
            Etmadpur, Agra – 283202, Uttar Pradesh, India.
          </div>
          <div className=" flex flex-col">
            <div className="text-[14px] font-serif font-medium text-start mt-1">
              <div className=" flex flex-row">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <span>info@naiminathayurveda.org</span>
              </div>

              <div className="mt-2 flex flex-row">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <span>namcagra@gmail.com</span>
              </div>
            </div>
            <div className="text-[14px] font-serif font-medium text-start mt-1">
              <div className=" cursor-pointer hover:text-white flex flex-row">
                <FontAwesomeIcon
                  icon={faPhone}
                  size={customSize}
                  className="pr-2"
                />
                <span>+91-9528024473</span>
              </div>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUs;
