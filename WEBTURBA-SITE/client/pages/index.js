import Header from "@/components/Header";
import Design from "@/components/webDesign";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Strategy from "@/components/Strategy";
import FollowUS from "@/components/FollowUS";
import Layout from "@/layouts/Layout";

const index = () => {
  return (
    <div className="home">
      <div className="web-fond">
        
      </div>
      <FollowUS />
      
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"design"}
            Illustration={"/assets/images/Rectangle 6.jpg"}
            title={"WEB DESIGN"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"dev"}
            Illustration={"/assets/images/photo_8_2023-06-06_12-31-25.jpg"}
            title={"WEB DEV"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"media"}
            Illustration={"/assets/images/Rectangle 8.png"}
            title={"WEB MEDIA"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Strategy />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;

index.PageLayout = Layout