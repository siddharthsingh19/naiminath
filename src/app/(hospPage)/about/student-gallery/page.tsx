
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import GalleryModal from "../../../(components)/gallery-crosel/GalleryModal";

const AboutGallery = () => {
  const imageUrls = Array.from({ length: 18 }, (url, index) => {
 //   if (index == 13 || index == 14) {
  //    return `/images/gallery/student-gallery${index + 1}-min.png`;
  //  } else {

 return `/images/gallery/student-gallery${index + 1}-min.jpeg`;
  });

  const { setImageSlide } = useGlobalContext();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderImageContent = (src: string, index: number) => (
    <div
      key={index}
      className="flex-none w-fit h-fit basis-1/5"
      onClick={() => openModal(index)}
    >
      <div className="rounded-md relative md:w-[300px] md:h-[200px] w-[80px] h-[70px] overflow-hidden">
        <Image
          fill
          src={src}
          alt={`image ${index}`}
          className=" object-cover w-full h-full"
        />
        <div
          className="absolute w-full h-full hover:bg-[#24242465] flex justify-center items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white rounded-full bg-[#00000071]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const findPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex !== null ? prevIndex - 1 : null));
  };

  const findNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== null && prevIndex + 1 < imageUrls.length
        ? prevIndex + 1
        : null
    );
  };

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-2 md:mx-10 my-10">
      {imageUrls.map(renderImageContent)}

      <GalleryModal
        closeModal={closeModal}
        findPrev={findPrev}
        findNext={findNext}
        hasPrev={currentIndex !== null && currentIndex > 0}
        hasNext={currentIndex !== null && currentIndex + 1 < imageUrls.length}
        src={currentIndex !== null ? imageUrls[currentIndex] : ""}
      />
    </div>
  );
};

export default AboutGallery;
