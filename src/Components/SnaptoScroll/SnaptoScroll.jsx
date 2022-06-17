import React, { useRef, useState, useEffect } from "react";
import { scrollData } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Scrollbar,
  Mousewheel,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper";

import { animate, AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function SnaptoScroll() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-lg ">
        <Swiper
          speed={1000}
          effect={"creative"}
          creativeEffect={{
            prev: {
              // shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          scrollbar={true}
          mousewheel={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[
            Scrollbar,
            Mousewheel,
            EffectCreative,
            Navigation,
            Pagination,
          ]}
          className="w-screen h-screen "
        >
          {scrollData.map(({ title, img, desc }, i) => (
            <SwiperSlide key={i}>
              {console.log(i)}
              <div className="flex justify-center items-center  w-screen h-screen z-50 ">
                <div className="lg:w-[25vw] lg:h-[30vw]  w-72 px-10 -z-2 ">
                  <motion.img
                    src={img}
                    alt=""
                    className="w-full h-full z-100"
                    initial={{ y: -100, opacity: [0, 0.5] }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.2,
                      type: "spring",
                      delay: i > 0 ? 0 : 0.7,
                    }}
                  />
                </div>
                <div className="text-white">
                  <motion.h1
                    className="text-h font-paci"
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
                    className="text-p pl-1 mt-2 font-josef"
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
