import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import Summary from "../Components/Summary/Summary";
import Baju from "../Images/baju.mp4";
import Sun from "../Images/sunglasses.jpg";

function Home() {
  return (
    <>
      <div>
        <img
          src={Sun}
          className="w-screen h-screen object-center object-cover -z-10 fixed brightness-50"
        />
        <div className="w-screen h-screen flex items-center">
          <div className="mx-[16vw] flex gap-6 flex-col">
            <h1 className="sm:text-8xl text-6xl text-white font-paci flex flex-col w-40 gap-6">
              Fashion Your
              <span className="text-white">Clothing</span>
            </h1>
            <h2 className="text-white font-josef sm:text-2xl text-lg sm:w-72 w-50">
              Wear something new, feels like brand new,
              <span className="text-amber-500 font-bold">Geo</span> got it all
              for you.
            </h2>
            <button className="bg-amber-500/75 font-josef rounded-full text-white px-4 py-1 text-xl w-fit">
              Explore
            </button>
          </div>
        </div>
        <Summary />
        <Footer />
      </div>
    </>
  )
}

export default Home;
