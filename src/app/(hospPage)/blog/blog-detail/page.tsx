"use client";
import { Blogs, postData } from "@/app/(data)/data";
import { useGlobalContext } from "@/app/context/store";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";

const BlogDetail = () => {
  const { blogData } = useGlobalContext();
  const [data, setdata] = useState(postData[0])

  // const searchParams = useSearchParams();
  // const data = searchParams?.get("data") ?? "";
  // console.log("params====", data);
  return (
    <div className={`w-full h-screen flex flex-row justify-center mt-10`}>
      <div
        className="md:basis-1/2 md:mx-0 mx-5 bg-white shadow-slate-400 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.3)] 
      px-3 z-10 border-slate-400 rounded-[15px] min-h-[350px] max-h-[90%] overflow-scroll flex flex-col items-center gap-5"
      >

        <div className=" bg-[#ded636] text-center font-bold text-white text-[20px] py-2 font-sans w-full">
          {data.college}
        </div>

        {/* image */}
        <div>
          <img className="w-full object-cover" src="/images/blog/blog1.png" alt="Banner 1" />
        </div>

        {/* location */}

        {/* <h1 className="font-bold text-xl">
        </h1> */}
        <div className="px-4">
          <span className=" text-black font-semibold">Affiliated by- </span>
          {data.affiliated_by}
        </div>

        <div className="flex gap-5 md:flex-row flex-col">
          <h2 className="font-bold ">{data.district}</h2>
          <h2 className="font-bold "> {data.state}</h2>
          <h2 className="font-bold "> Established At :-  {data.established}</h2>
        </div>

        <div className="text-center px-3 text-purple-700 font-bold">
          {data.address}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: blogData }}
          className="px-5"
        ></div>

        {/* course offered */}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            Course Offered
          </h1>
          <p>
            {data.course_offered.conts}
          </p>
        </div>

        {/* BAMS Admission 2024-25*/}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            BAMS Admission 2024-25
          </h1>
          <p>
            {data.admission}
          </p>
        </div>


        {/*   BAMS Syllabus*/}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            BAMS Syllabus.
          </h1>

          <div>
            <img className="w-full object-cover" src="/images/blog/Syllabus.png" alt="Banner 1" />
          </div>
        </div>

        {/*Counselling Process*/}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            Counselling Process.
          </h1>

          <p>
            {data.counselling_process}
          </p>
        </div>

        {/* Course Fee*/}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            Course Fee:
          </h1>

          <div>
            <img className="w-full object-cover" src="/images/blog/fee.png" alt="Banner 1" />
          </div>
        </div>


        {/*BAMS Internship*/}
        <div className="px-5 flex gap-3 flex-col">
          <h1 className=" font-semibold text-blue-900 text-xl">
            BAMS Internship:
          </h1>

          <div>
            <img className="w-full object-cover" src="/images/blog/Internship.png" alt="Banner 1" />
          </div>
        </div>
        <div className=" bg-slate-400 h-[20px] py-2 font-sans w-full"></div>
      </div>
    </div>
  );
};
export default BlogDetail;
