"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const { setImageSlide } = useGlobalContext();
  
  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);
  
  return (
    <>
    
    <head>
    <title>IPD - Naiminath Ayurveda </title>
    </head>

    <div className="flex flex-col items-center justify-center font-sans h-full w-full">
      <div
        className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] md:text-[32px] text-[28px] font-extrabold border-b-[0.009px] border-[#8b939465]"
      >
        IPD
      </div>
      <div className="flex md:flex-row flex-col md:w-[74vw] w-[94vw] 
      justify-center md:items-start items-center gap-6 mt-10">
        <Image
          src="/images/ipd_img1.png"
          className="md:w-[400px] md:h-[300px] w-[300px] h-[300px] rounded-[7px] "
          alt="about image"
          width={1600}
          height={800}
        />
        <div className="text-[#7c7777] text-[17px]">
          <p>
            The IPD at Naiminath Ayurveda, Agra has a capacity of 100 beds which
            have been distributed according to the regulations among the
            following departments:-
          </p>
          <p className="mt-10">
            Kaya Chikitsa
            <br />
            Panchakarma
            <br />
            Shalya Tantra
            <br />
            Shalakya Tantra
            <br />
            Prasuti Evam Stri Rog
            <br />
            Kaumarabhritya (Bal Rog)
          </p>
          <p className="mt-10">
            These IPD departments have different category of rooms ranging from
            General ward, Semi private ward, private rooms and deluxe rooms,
            thus catering to every economic strata.
          </p>
        </div>
      </div>
      <div className="md:w-[75vw] w-[94vw] mt-10  text-justify text-[#7c7777] text-[17px]">
        <p>
          The in-house canteen at Naiminath Ayurveda caters a full experience
          which aids in the treatment of patients. The Institution promotes an
          alcohol free environment which helps to produce a healing effect on
          the human body. Naiminath Ayurveda also follows and promotes a
          complete vegetarian diet. It believes that vegetarian food is easy to
          digest and contains antioxidants, fibres, vitamins and is low in
          calories, sugar and fat. This further reduces the chance of getting
          diagnosed with diabetes, heart disease, hypertension and obesity. The
          Institution uses and encourages food without preservatives. ‘Prana’ is
          the vitality of food and preserved and canned food loses the vitality
          and essential nutrients. Their intake increases the vicious circle of
          aggravated ‘doshas’ and causes obesity and other ailments. Preserved
          and canned foods are adulterated and fail to breakdown the heat and
          supply the required nutrients to the body. Almost all the vegetables
          are indigenously grown in the farm within the premises of Naiminath
          Ayurveda.
        </p>
      </div>
      <div className=" flex md:flex-row flex-col md:items-start items-center md:w-[75vw] w-[94vw] my-12 ">
        <Image
          src="/images/ipd_img2.jpg"
          className="md:w-[800px] md:h-[370px] w-[300px] h-[300px] rounded-[7px] md:basis-[27%] flex-none 
          shadow-[0_0px_20px_1px_rgba(0,0,0,0.2)]"
          alt="about image"
          width={1600}
          height={800}
        />
        <div className=" flex-1 md:px-5  text-justify text-[#7c7777] text-[17px] md:mt-0 mt-5">
          <p>
            Naiminath has its own organic farms that are free from pesticides,
            chemicals and preservatives that snatch away the piquant essence and
            purity of food. The organic plantation is not only sustainable but
            enhances soil fertility and biological diversity. It is devoid of
            prohibiting synthetic pesticides, antibiotics, synthetic
            fertilizers, genetically modified organisms and growth hormones.
            Chemicals do no good to anyone except for adding a plethora of
            maladies. Nutrition-less food makes you prone to diseases like
            diabetes, cholesterol, blood pressure, hormonal disorders and many
            more which can even turn to be fatal.
          </p>
          <p className="mt-4">
            The patients are welcome and encouraged to help out in the farms. In
            the process, we help to make you understand the importance of
            holistic and pure surrounding and its effect on your system.
          </p>
        </div>
        <Image
          src="/images/ipd_img3.jpg"
          className="md:mt-0 mt-5 md:w-[800px] md:h-[370px]  w-[300px] h-[300px] rounded-[7px] md:basis-[27%] flex-none shadow-[0_0px_20px_1px_rgba(0,0,0,0.2)]"
          alt="about image"
          width={1600}
          height={800}
        />
      </div>
    </div>
    </>
    
  );
};
export default AboutUs;
