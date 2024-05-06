"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import GalleryModal from "../../../(components)/gallery-crosel/GalleryModal";

const AboutGallery = () => {
  // const imageUrls = [
  //   "https://naiminathayurveda.org/wp-content/uploads/2021/10/Screenshot-2021-06-29-at-10.45.16-AM.png",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/Screenshot-2021-06-29-at-10_45_16-AM/3172699517.png",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/Screenshot-2021-06-29-at-10_44_46-AM/3269599887.png",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG_20210811_111157-1-scaled/2371784007.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG_20210811_111626-scaled/1153182267.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0051/1150043889.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0036/1741640649.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0050/1323374629.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0049/887123959.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0043/964380894.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0052/2637567585.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0046/2455516985.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0053/2930016827.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0047/2714674019.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0044/1356721890.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0034/2833758410.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0037/2096421506.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0038/965735375.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0039/468104662.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0042/3199664040.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0045/3421486291.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0033/4122665852.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0041/2963089133.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0048/864618023.jpg",
  //   "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0035/3010540637.jpg",
  // ];

  const imageUrls = Array.from({ length: 23 }, (url, index) => {
    if (index == 13 || index == 14) {
      return `/images/gallery/gallery${index + 1}-min.png`;
    } else {
      return `/images/gallery/gallery${index + 1}-min.jpg`;
    }
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
