import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomeBanner.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const HomeBanner = () => {
  const [basicImage] = useBasicImage();

  const bannerImage1 = basicImage.find((item) => item.name === "background-img");
  const bannerImage2 = basicImage.find((item) => item.name === "men-fashion");

  return (
    <div className="h-[38rem]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loopFillGroupWithBlank={true}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={bannerImage1?.image} alt="" />
          <div className="absolute">
            <h1 className="text-[#021B29] text-5xl font-semibold">
              Be The Attention <br /> With Our Best Fragrant
            </h1>
            <button className="mt-8 py-2 px-3 font-semibold border border-[#021B29] hover:bg-[#021B29] text-[aliceblue]">
              Learn More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={bannerImage2?.image} alt="" />
          <div className="absolute">
            <h1 className="text-[aliceblue] text-5xl font-semibold">
              Men's Perfume <br /> Extracted From Nature
            </h1>
            <button className="mt-8 py-2 px-3 font-semibold border border-[#9B5A43] hover:bg-[#9B5A43] text-[aliceblue]">
              See Collection
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
