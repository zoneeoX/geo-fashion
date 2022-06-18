import React from "react";
import ItemsContainer from "./ItemsContainer";
import Marquee from "react-fast-marquee";
import zhongli from "../../Images/zhongli.png"
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white font-josef z-10">
      <div className=" w-[96%] mx-auto">
        <div className="grid md:grid-cols-2  grid-cols-1">
          {/* image */}
          <div className="flex justify-around items-center ">
            <img
              src={zhongli}
              alt=""
              className="w-full h-[348px] object-cover object-top brightness-75"
            />
          </div>
          {/* title */}
          <div
            className="flex flex-col justify-center items-start lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-full px-16"
          >
            <h1 className="w-fit m-auto md:w-fit md:m-0 md:text-left text-center">
              <span className="md:text-left text-center">
                Exotically stylish with
                <span className="text-amber-600"> GEO</span> attire
              </span>
            </h1>
            <p className="text-base md:text-left text-center  text-gray-400 ">
              GEO offers high quality attire with custom handmade models
              suitable to your preferences
            </p>
          </div>
          <div
            className="grid md:grid-cols-1 gap-2 
            text-center pt-2  text-sm pb-8"
          >
            <h1 className="font-paci sm:text-4xl text-center text-3xl">
              <span className="text-amber-600">GEO</span> PRODUCT
            </h1>
            <div className="text-gray-400 flex flex-col justify-center items-center">
              <span>© 2022 GEO. All rights reserved.</span>
              <span>Terms · Privacy Policy</span>
            </div>
          </div>
          {/* item */}
          <div className="  px-10 pt-2">
            <ItemsContainer />
          </div>
        </div>
        <hr className="border-t-2 border-solid border-white my-4" />
        <Marquee gradientColor={[15, 23, 42]} className speed={100}>
          <h1 className="font-josef text-4xl">
            • SWEATSHIRT • PANTS • T-SHIRT • SHORTS • JACKET • SWEATER • HOODIE{" "}
            <span className="text-black w-0">.</span>
          </h1>
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer;
