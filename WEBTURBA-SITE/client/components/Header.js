import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useSwiper } from "swiper/react";

const Header = () => {
  const videoPath =
    "/assets/images/video.mp4";
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const swiper = useSwiper();


  return (
    <div className="header">
      <Nav />
      <div className="bg">
        {hasWindow && (
          <ReactPlayer
            url={videoPath}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <div className="header-content">
        <h1>L'AGENCE WEB INNOVANTE</h1>
        <div className="header-services">
          <div className="wraper" onClick={() => swiper.slideTo(1)}>
            <Image
              src="/assets/images/design.png"
              width={54}
              priority
              height={54}
              alt="image design"
            />
            <h3>DESIGN</h3>
          </div>
          <div className="wraper" onClick={() => swiper.slideTo(2)}>
            <Image
              src="/assets/images/coding 1.png"
              width={54}
              priority
              height={54}
              alt="image deveoppement"
            />
            <h3>DEVELOPPEMENT</h3>
          </div>
          <div className="wraper" onClick={() => swiper.slideTo(3)}>
            <Image
              src="/assets/images/social.png"
              width={54}
              priority
              height={54}
              alt="image social media"
            />
            <h3>SOCIAL MEDIA</h3>
          </div>
          <div className="wraper" onClick={() => swiper.slideTo(4)}>
            <Image
              src="/assets/images/goals 1.png"
              width={54}
              priority
              height={54}
              alt="image strategies"
            />
            <h3>STRATEGIES</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
