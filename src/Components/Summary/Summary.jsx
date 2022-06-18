import React from "react";
import Laptop from "../../Images/laptopmeet.jpg";
import Paper from "../../Images/papermeet.jpg";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Summary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white/10 w-screen h-2/4 text-white font-josef">
      <InView threshold={0.7} triggerOnce={true}>
        {({ ref, inView }) => (
          <div
            className="col-span-1 md:col-span-2 bg-slate-900 p-[10vw]"
            ref={ref}
          >
            <motion.div
              initial={{ y: "100vw" }}
              animate={
                inView && {
                  y: 0,
                }
              }
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.3,
              }}
            >
              <h1 className="text-4xl opacity-50 m-auto w-fit">01</h1>
              <div className="w-fit m-auto">
                <h1 className="sm:text-5xl text-xl w-[70vw] text-center">
                  Picking best clothes for you is our job, and we are happy
                  doing it
                </h1>
              </div>
              <h2 className="sm:text-2xl text-sm w-fit m-auto mt-[4vw] flex gap-2 items-center opacity-50 transition duration-200 hover:opacity-100 cursor-pointer">
                Find out how{" "}
                <i className="sm:text-4xl text-2xl">
                  <BsFillArrowUpRightCircleFill />{" "}
                </i>
              </h2>
            </motion.div>
          </div>
        )}
      </InView>
      <img
        src={Laptop}
        className="object-center object-cover h-full md:w-screen"
      />
      <InView threshold={0.7} triggerOnce={true}>
        {({ ref, inView }) => (
          <div className="bg-slate-900 p-32" ref={ref}>
            <motion.div
              initial={{ x: "100vw" }}
              animate={
                inView && {
                  x: 0,
                }
              }
              transition={{
                duration: 1,
                type: "spring",
                bounce: "0.3",
              }}
            >
              <h1 className="w-fit m-auto opacity-50 text-4xl">02</h1>
              <div className="flex justify-center items-center text-center flex-col gap-6">
                <h2 className="sm:text-5xl text-xl">
                  Panda & with a black hat?..
                </h2>
                <p className="flex gap-2 items-center justify-center w-fit opacity-50 transition duration-200 hover:opacity-100 cursor-pointer">
                  About us.
                  <i className="sm:text-4xl text-2xl">
                    <BsFillArrowUpRightCircleFill />
                  </i>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </InView>

      <InView threshold={0.7} triggerOnce={true}>
        {({ ref, inView }) => (
          <div className="bg-slate-900 p-32 order-last md:order-none" ref={ref}>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={
                inView && {
                  x: 0,
                }
              }
              transition={{ type: "spring", duration: 1 }}
            >
              <h1 className="w-fit m-auto opacity-50 text-4xl">03</h1>

              <div className="flex justify-center items-center text-center flex-col">
                <h2 className="sm:text-5xl text-xl">
                  ...White cat with a white rat?
                </h2>
              </div>
            </motion.div>
          </div>
        )}
      </InView>
      <img src={Paper} className="object-center object-cover h-full" />
    </div>
  );
};

export default Summary;
