import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Mousewheel } from "swiper";

import { scrollData } from "./Data";
import { motion } from "framer-motion";

import "./Verticool.css";

export default function VerticoolScrool() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-lg w-screen h-screen  md:hidden  ">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          slidesPerView={1}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="mySwiper"
        >
          {scrollData.map(({ title, img, desc }, i) => (
            <SwiperSlide key={i}>
              {console.log(i)}
              <div className="flex justify-center items-center  w-screen h-screen z-50 ">
                <div className="text-white">
                  <motion.h1
                    className="text-5xl font-paci"
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: i > 0 ? 0.4 : 1.2,
                    }}
                  >
                    {title}
                  </motion.h1>
                  <motion.p
                    className="text-2xl pl-1 mt-2 font-josef"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      bounce: 0.4,
                      type: "spring",
                      delay: i > 0 ? 0.8 : 2,
                    }}
                  >
                    {desc}
                  </motion.p>
                </div>
                <img src={img} alt="" className="absolute -z-10 " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
