import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// slider image
import slider1 from "../../../assets/banner/slider-1.webp";
import slider2 from "../../../assets/banner/slider-2.webp";
import slider3 from "../../../assets/banner/slider-3.webp";
import slider4 from "../../../assets/banner/slider-4.webp";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
