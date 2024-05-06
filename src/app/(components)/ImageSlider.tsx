"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {


  const SlickButtonFix = ({currentSlide, slideCount, children, ...props}:any) => (
    <span {...props}>{children}</span>
);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: (
      <SlickButtonFix>
        <div className="next-slick-arrow bg-slate-900"> ⫸ </div>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <div className="prev-slick-arrow bg-sky-900"> ⫷ </div>
      </SlickButtonFix>
    ),
  };

  return (
    <Slider {...settings}>
      {/* Add your slider images here */}
      <div className="h-fit md:h-[80vh] w-[100vw]">
 <img className="w-full h-full object-cover" src="/images/banner1.jpg" alt="Banner 1" />
</div>

<div className="h-fit md:h-[80vh] w-[100vw]">
   <a href = "https://naiminathayurveda.org/contactus">
  <img className="w-full h-full object-cover" src="/images/banner2.jpg" alt="Banner 2" /> </a>
</div>

<div className="h-fit md:h-[80vh] w-[100vw]">
   <a href = "https://naiminathayurveda.org/contactus">
  <img className="w-full h-full object-cover" src="/images/banner3.jpg" alt="Banner 3" /></a>
</div>

<div className="h-fit md:h-[80vh] w-[100vw]">
   <a href = "https://naiminathayurveda.org/contactus">
  <img className="w-full h-full object-cover" src="/images/banner4.jpg" alt="Banner 4" /> </a>
</div>

      {/* Add more images as needed */}
    </Slider>
  );
};

export default ImageSlider;
