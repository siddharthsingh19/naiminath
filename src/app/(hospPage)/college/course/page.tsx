"use client";
import { useGlobalContext } from "@/app/context/store";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFileWord,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Course = () => {
  const rounter = useRouter();
  const customSize: SizeProp = "sm";

  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(false);
  }, [setImageSlide]);

  
  return (
    <>
      <head>
        <title>
          Courses Offered - Naiminath Ayurveda : Top BAMS College in India
        </title>
        <meta name="description" content=" " />
      </head>

      <div className=" flex flex-col justify-center items-center">
        <div className=" text-3xl mt-10 text-gray-800 text-center font-sans font-bold">
          Courses Offered
        </div>
        <div className="md:w-[55vw] w-[90vw] bg-white p-6 rounded-md shadow-md ring-1 ring-slate-100 font-serif text-[#7f7f7f] my-12">
          <h1 className="text-3xl font-extrabold text-black mb-4">
            Bachelor of Ayurveda Medical and Surgery (BAMS)
          </h1>

          <p className="mb-4 ">
            Bachelor of Ayurveda Medical & Surgery (BAMS) is a five-year
            undergraduate program that offers an integrated course that covers a
            wide range of subjects of traditional Ayurveda and modern medical
            systems. The five and half a year-long course also includes the
            one-year mandatory internship.
          </p>

          <p className="mb-4">
            BAMS course provides the complete knowledge about ‘Ashtanga
            Ayurveda’ along with scientific advances in modern medicine along
            with extensive practical training. Central Council of Indian
            Medicine (CCIM) is the regulatory body for admission to Ayurveda
            education at undergraduate as well as postgraduate level and for
            practice Ayurvedic medicine in India.
          </p>

          <p className="mb-4">Intake capacity - 100 seats</p>

          <h2 className="text-2xl font-medium italic text-black mb-2">
            BAMS Course Eligibility
          </h2>

          <ul className="list-disc ml-6 mb-4">
            <li>
              Candidates are required to pass Class 12 or equivalent examination
              with science subjects (Physics, Chemistry and Biology) and English
              core in both Class 11 and 12 from a recognised board.
            </li>
            <li>
              He/she should have completed the age of 17 years at the time of
              admission or as on 31st December, 2019
            </li>
            <li>
              An aspirant from the general category needs to secure an aggregate
              of 50% in their Class 12 Board examination. While, for SC/ST/OBC
              candidates, the qualifying percentage is 40%.
            </li>
            <li>
              Candidates need to have qualified NEET 2020 by securing minimum
              qualifying cutoff percentile to get admission in BAMS course.
            </li>
            <li>
              For foreign students, any other equivalent qualification approved
              by the University will be allowed.
            </li>
          </ul>
          <a href="/doc/fee_st_namc.pdf">
            <div
              className="w-fit flex justify-center items-center rounded-sm bg-gradient-to-r from-[#fde03a] to-[#ffb047] 
        py-1 px-4 mt-8"
            >
              <FontAwesomeIcon
                color="#000000"
                icon={faFileWord}
                size={customSize}
                className="pr-2"
              />

              <span className=" text-black">Download Fee Structure</span>
            </div>
          </a>

          <div
            className="md:w-fit justify-center items-center rounded-sm bg-gradient-to-r from-[#fde03a] to-[#ffb047] 
        py-3 px-4 mt-4 flex flex-col border-[3px] border-[#ffaa4e] text-black"
          >
            <p className="text-xl font-semibold">
              FOR FEES STRUCTURE AND OTHER DETAILS PLEASE CONTACT US ON
            </p>
            <div className="flex md:flex-row flex-col justify-center items-center text-lg font-semibold font-sans mt-2">
              <FontAwesomeIcon
                color="#000000"
                icon={faPhone}
                size={customSize}
                className="pr-2 invisible md:visible"
              />
              <span className=" mr-3">+91-9528024473</span>
              <span className=" ">info@naiminathayurveda.org</span>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-black mb-2 mt-7">
            Career & Jobs
          </h2>

          <p className="mb-4">
            Day by day, the scope of Ayurvedic is overlapping to the other
            medical system not only in India but also in the world. In many
            cases, people have taken the experience for the trustfulness of the
            Ayurvedic system and medicines treating chronic and non-healable
            diseases. In many cases, when the allopathic system becomes a
            failure with a particular disease and surrenders, the Ayurvedic
            medicine does the magical effect to rejuvenate the illness or the
            patient. Some of the job profiles are –
          </p>

          <ol className="list-decimal ml-6">
            <li>Scientist</li>
            <li>Therapist</li>
            <li>Medical Officer</li>
            <li>Physician</li>
            <li>Manager/Executive in Insurance (Audit)</li>
            <li>Analyst in Healthcare IT companies</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Course;
