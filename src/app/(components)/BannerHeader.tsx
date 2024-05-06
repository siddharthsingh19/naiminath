"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import dynamic from "next/dynamic";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

// const Header = dynamic(
//   () => import('./Header'),
//   { ssr: false }
// )
// const ImageSlider = dynamic(
//   () => import('./ImageSlider'),
//   { ssr: false }
// )

const BannerHeader = () => {
  const { imageSlide, setImageSlide } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);


  const [isMobile, setIsMobile] = useState(false);
  const rounter= useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const imageSlide = false;
  return (
    <div className=" md:relative">

      {isMobile && (<div className=" flex flex-row justify-between w-full my-5">

        <div className="w-[200px] h-[50px] bg-[url('/images/ayurvedalogo.png')] bg-no-repeat  bg-contain ml-5 cursor-pointer"
        onClick={
          ()=>{rounter.push('/home')}
        }></div>

        <div className=" absolute z-20 right-0">
          {!isExpanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-5"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {isExpanded && (
            <MobileNavBar isOpen={isExpanded} setOpen={setIsExpanded} />
          )}

        </div>

      </div>)}

      {!isMobile && <Header imageSlider={imageSlide} />}
      <div className="">{imageSlide && <ImageSlider />}</div>
    </div>
  );
};
export default BannerHeader;
